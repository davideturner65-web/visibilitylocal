// One place for the facts every page repeats. Change them here, not in the pages.

export const SITE_URL = "https://visibilitylocal.com";
export const SITE_NAME = "Visibility Local";

export const CONTACT_EMAIL = "info@visibilitylocal.com";
export const PHONE_DISPLAY = "(501) 554-2183";
export const PHONE_E164 = "+15015542183";

// Link to the 15-minute call booking page, from Cal.com, Calendly, or a Google Calendar
// appointment schedule, e.g. "https://cal.com/visibilitylocal/market-check". While this is
// empty the site offers the form, email and phone, and shows no booking step.
export const BOOKING_URL: string = "";

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
