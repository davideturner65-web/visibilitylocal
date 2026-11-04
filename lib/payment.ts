// Stripe Payment Link for the Visibility Report. Replace with the live link before launch; the
// placeholder is deliberately obvious so it cannot ship unnoticed. Setting it switches the
// report page to direct checkout and the contact page copy along with it.
export const STRIPE_PAYMENT_LINK: string = "REPLACE_WITH_STRIPE_PAYMENT_LINK";
export const isPaymentLinkLive = !STRIPE_PAYMENT_LINK.startsWith("REPLACE_");
