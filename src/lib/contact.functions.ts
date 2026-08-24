import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendContactEmail } from "./contact.server";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        name: z.string().trim().min(1).max(100),
        email: z.string().trim().email().max(255),
        phone: z
          .string()
          .trim()
          .max(20)
          .regex(/^[0-9+\-\s()]*$/)
          .optional()
          .or(z.literal("")),
        program: z.enum(["kids", "academic", "professional"]),
        message: z.string().trim().min(1).max(1000),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) throw new Error("Email service is not configured");
    await sendContactEmail(data, apiKey);
    return { ok: true };
  });
