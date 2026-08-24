const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAIL = "englishcore26@gmail.com";
const FROM_EMAIL = "English Core AI Lab <onboarding@resend.dev>";

const PROGRAM_LABELS: Record<string, string> = {
  kids: "Kids English",
  academic: "Academic English Grammar (Class 6-10)",
  professional: "Professional English",
};

export interface ContactEmailInput {
  name: string;
  email: string;
  phone?: string | undefined;
  program: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactEmail(
  input: ContactEmailInput,
  apiKey: string,
): Promise<void> {
  const programLabel = PROGRAM_LABELS[input.program] ?? input.program;
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const phone = escapeHtml(input.phone || "—");
  const message = escapeHtml(input.message);

  const text = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "—"}`,
    `Program: ${programLabel}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#ffffff;color:#1a1a1a">
      <h2 style="margin:0 0 4px;color:#1A4331">New enquiry — English Core AI Lab</h2>
      <p style="margin:0 0 20px;color:#666;font-size:13px">Submitted via the website contact form</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#666;width:110px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1A4331">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top">Phone</td><td style="padding:8px 0">${phone}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top">Program</td><td style="padding:8px 0">${escapeHtml(programLabel)}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f7f4ec;border-left:3px solid #C9A66B;border-radius:4px;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</div>
      <p style="margin-top:20px;font-size:12px;color:#999">Reply directly to this email to respond to ${name}.</p>
    </div>`;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: input.email,
      subject: `New enquiry — ${programLabel} — ${input.name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    throw new Error(`Email provider request failed [${response.status}]`);
  }
}
