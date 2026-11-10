import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/site";

// Receives the market check, contact and scorecard forms and emails them to the inbox through
// Resend. See lib/lead.ts for what has to be configured.

const FIELDS: [key: string, label: string][] = [
  ["wants", "Wants"],
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["agency", "Agency"],
  ["city", "City"],
  ["website", "Website"],
  ["lines", "Lines written"],
  ["scorecard", "Scorecard"],
  ["message", "Message"],
];

const MAX_FIELD_LENGTH = 4000;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Form is not configured" }, { status: 503 });
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: a field people never see. Bots fill it in. Report success and send nothing.
  if (clean(data.company_url)) {
    return NextResponse.json({ success: true });
  }

  const email = clean(data.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required" }, { status: 400 });
  }

  const source = clean(data.source) || "website";
  const name = clean(data.name);
  const city = clean(data.city);

  const lines = [`New enquiry from visibilitylocal.com (${source})`, ""];
  for (const [key, label] of FIELDS) {
    const value = clean(data[key]);
    if (value) lines.push(`${label}: ${value}`);
  }

  const subject = `${source}: ${name || email}${city ? `, ${city}` : ""}`.replace(/[\r\n]+/g, " ");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Visibility Local website <${CONTACT_EMAIL}>`,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
