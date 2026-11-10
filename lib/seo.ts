import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

interface PageMeta {
  title: string;
  description: string;
  /** Path from the site root, e.g. "/offer". Use "" for the homepage. */
  path: string;
  /** Keep the page out of the index. Links are still followed unless nofollow is set. */
  noindex?: boolean;
  nofollow?: boolean;
  /** "article" for the resource guides, "website" for everything else. */
  type?: "website" | "article";
}

const SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Visibility Local",
};

/**
 * Builds a page's metadata from one title and one description, so the canonical URL, the Open
 * Graph tags and the Twitter card cannot drift apart. Links to this site are mostly opened from
 * emails, texts and LinkedIn messages, where the preview card is the first impression.
 *
 * The share image is named explicitly. A page that sets its own openGraph object does not
 * inherit the root segment's opengraph-image file, so relying on the convention left every
 * page except the homepage without a preview image.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
  type = "website",
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE.url],
    },
    ...(noindex || nofollow ? { robots: { index: !noindex, follow: !nofollow } } : {}),
  };
}
