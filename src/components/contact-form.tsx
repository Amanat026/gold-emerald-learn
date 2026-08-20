import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";

const PAGE_EMAIL = "englishcore26@gmail.com";
const FOUNDER_EMAIL = "amanatullah263@gmail.com";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100, {
    message: "Name must be less than 100 characters",
  }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your email" })
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone must be less than 20 characters" })
    .regex(/^[0-9+\-\s()]*$/, { message: "Phone can only contain digits and + - ( )" })
    .optional()
    .or(z.literal("")),
  program: z.enum(["Kids English", "Academic English Grammar", "Professional English"], {
    errorMap: () => ({ message: "Please choose a program" }),
  }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please write a short message" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const fieldClass =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setErrors({});
    setSending(true);

    const v = parsed.data;
    const subject = `New enquiry — ${v.program} — ${v.name}`;
    const body = [
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone || "—"}`,
      `Program: ${v.program}`,
      "",
      "Message:",
      v.message,
    ].join("\n");

    const href = `mailto:${PAGE_EMAIL}?cc=${encodeURIComponent(
      FOUNDER_EMAIL,
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    toast.success("Your email is ready — just press send in your mail app.");
    form.reset();
    setSending(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground/85">
            Full name
          </label>
          <input id="name" name="name" maxLength={100} placeholder="Your name" className={fieldClass} />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground/85">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            placeholder="you@example.com"
            className={fieldClass}
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground/85">
            Phone <span className="text-foreground/50">(optional)</span>
          </label>
          <input id="phone" name="phone" maxLength={20} placeholder="01XXXXXXXXX" className={fieldClass} />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="program" className="text-sm font-medium text-foreground/85">
            Program
          </label>
          <select id="program" name="program" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a program
            </option>
            <option>Kids English</option>
            <option>Academic English Grammar</option>
            <option>Professional English</option>
          </select>
          {errors.program && <p className="mt-1.5 text-xs text-destructive">{errors.program}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground/85">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          placeholder="Tell us about your goal…"
          className={fieldClass}
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button type="submit" disabled={sending} className="btn-cta w-full sm:w-auto">
        <Send className="mr-2 inline h-4 w-4" />
        Send message
      </button>
      <p className="text-xs text-foreground/55">
        Your message opens in your mail app addressed to {PAGE_EMAIL}.
      </p>
    </form>
  );
}