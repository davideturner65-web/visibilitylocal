// Server-only. The lead forms post to /api/lead, which sends the enquiry through Resend. That
// needs RESEND_API_KEY set in the environment (Vercel project settings), and visibilitylocal.com
// verified as a sending domain in Resend.
//
// Pages call this at build time and pass the result to the form. While the key is missing the
// forms are replaced by email and phone links, so the site never shows a form that cannot send.
export function leadFormEnabled(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}
