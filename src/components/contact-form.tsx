import { useMemo, useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";

const PAGE_EMAIL = "englishcore26@gmail.com";
const FOUNDER_EMAIL = "amanatullah263@gmail.com";

const PROGRAM_KEYS = ["kids", "academic", "professional"] as const;
type ProgramKey = (typeof PROGRAM_KEYS)[number];

const fieldClass =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const { t } = useLanguage();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .trim()
          .nonempty({ message: t.form.errors.nameRequired })
          .max(100, { message: t.form.errors.nameMax }),
        email: z
          .string()
          .trim()
          .nonempty({ message: t.form.errors.emailRequired })
          .email({ message: t.form.errors.emailInvalid })
          .max(255, { message: t.form.errors.emailMax }),
        phone: z
          .string()
          .trim()
          .max(20, { message: t.form.errors.phoneMax })
          .regex(/^[0-9+\-\s()]*$/, { message: t.form.errors.phoneInvalid })
          .optional()
          .or(z.literal("")),
        program: z.enum(PROGRAM_KEYS, {
          errorMap: () => ({ message: t.form.errors.programRequired }),
        }),
        message: z
          .string()
          .trim()
          .nonempty({ message: t.form.errors.messageRequired })
          .max(1000, { message: t.form.errors.messageMax }),
      }),
    [t],
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error(t.form.toastError);
      return;
    }

    setErrors({});
    setSending(true);

    const v = parsed.data;
    const programLabel =
      t.form.programOptions[PROGRAM_KEYS.indexOf(v.program as ProgramKey)] ?? v.program;
    const subject = `New enquiry — ${programLabel} — ${v.name}`;
    const body = [
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone || "—"}`,
      `Program: ${programLabel}`,
      "",
      "Message:",
      v.message,
    ].join("\n");

    const href = `mailto:${PAGE_EMAIL}?cc=${encodeURIComponent(
      FOUNDER_EMAIL,
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    toast.success(t.form.toastSuccess);
    form.reset();
    setSending(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground/85">
            {t.form.name}
          </label>
          <input
            id="name"
            name="name"
            maxLength={100}
            placeholder={t.form.namePh}
            className={fieldClass}
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground/85">
            {t.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={255}
            placeholder={t.form.emailPh}
            className={fieldClass}
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground/85">
            {t.form.phone} <span className="text-foreground/50">{t.form.optional}</span>
          </label>
          <input
            id="phone"
            name="phone"
            maxLength={20}
            placeholder={t.form.phonePh}
            className={fieldClass}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="program" className="text-sm font-medium text-foreground/85">
            {t.form.program}
          </label>
          <select id="program" name="program" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {t.form.programPh}
            </option>
            {PROGRAM_KEYS.map((key, i) => (
              <option key={key} value={key}>
                {t.form.programOptions[i]}
              </option>
            ))}
          </select>
          {errors.program && <p className="mt-1.5 text-xs text-destructive">{errors.program}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground/85">
          {t.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          placeholder={t.form.messagePh}
          className={fieldClass}
        />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button type="submit" disabled={sending} className="btn-cta w-full sm:w-auto">
        <Send className="mr-2 inline h-4 w-4" />
        {t.form.send}
      </button>
      <p className="text-xs text-foreground/55">{t.form.note}</p>
    </form>
  );
}
