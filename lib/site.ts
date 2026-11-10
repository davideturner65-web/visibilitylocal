// One place for the facts every page repeats. Change them here, not in the pages.

export const SITE_URL = "https://visibilitylocal.com";
export const SITE_NAME = "Visibility Local";

export const CONTACT_EMAIL = "info@visibilitylocal.com";
export const PHONE_DISPLAY = "(501) 554-2183";
export const PHONE_E164 = "+15015542183";

// The 15-minute call booking page: a Google Calendar appointment schedule on the
// info@visibilitylocal.com account. While BOOKING_URL is empty the site offers the form, email
// and phone, and shows no booking step.
//
// BOOKING_URL is the link people open in a new tab. BOOKING_EMBED_URL is what the site shows
// inline after a market check is submitted. They differ because Google's short share link
// refuses to load inside another page (X-Frame-Options: SAMEORIGIN); only the long
// calendar.google.com address with ?gv=true can be embedded. If the schedule is ever recreated,
// replace both: open the new short link, copy the address it lands on, and add ?gv=true.
export const BOOKING_URL: string = "https://calendar.app.google/znCr48Sug5WmrJRy7";
export const BOOKING_EMBED_URL: string =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ201bPsQteSjs3lWNEWEJGjQgqOtCTIQUpiJNPxA0Nkg2RvXAMW8ROTjj-Ae1SZbn23LXMl-I39?gv=true";

// Outside profiles for the organization: Google Business Profile, LinkedIn company page, and
// so on. These go into the Organization schema as sameAs. Leave empty until they exist; a
// sameAs that points at the site itself tells a crawler nothing.
export const ORG_SAME_AS: string[] = [];

// David Turner's own profiles (LinkedIn first), for the Person schema.
export const FOUNDER_SAME_AS: string[] = [];

// The offer, shown on /offer once set, e.g. "$1,250" and "$1,500". While either is empty the
// offer page says the numbers are given on the first call, and no price appears in schema.
export const MONTHLY_PRICE: string = "";
export const SETUP_FEE: string = "";

// Schema.org identifiers. Every page refers to the organization and the founder by these ids
// rather than redeclaring them, so crawlers see one entity instead of thirty near-copies.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/about#david-turner`;

export const orgRef = { "@id": ORG_ID } as const;
export const founderRef = { "@id": FOUNDER_ID } as const;
