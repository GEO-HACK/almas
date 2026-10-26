import { normaliseContact, validateContact } from "@/lib/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot filled in: almost certainly a bot. Pretend success, send nothing.
  if (typeof raw.company === "string" && raw.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const fields = normaliseContact(raw);
  const errors = validateContact(fields);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { ok: false, message: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  // TODO: Wire up an email provider (for example Resend, Postmark or SendGrid)
  // to deliver this enquiry to the Al-Mas Advisory inbox. Keep API keys in
  // environment variables (.env.local) and never expose them to the client.
  // Example shape:
  //   await emailClient.send({
  //     to: process.env.CONTACT_INBOX,
  //     replyTo: fields.email,
  //     subject: `New enquiry: ${fields.service} from ${fields.name}`,
  //     text: JSON.stringify(fields, null, 2),
  //   });
  console.info("[contact] New enquiry received", {
    service: fields.service,
    country: fields.country,
  });

  return Response.json({ ok: true, message: "Thanks, we will be in touch shortly." });
}
