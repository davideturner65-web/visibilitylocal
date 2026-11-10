import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /_next/ is deliberately not disallowed: it holds the CSS and JavaScript Google needs in
// order to render the pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
