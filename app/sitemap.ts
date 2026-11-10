import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// lastModified is a real date, changed by hand when a page's content changes. Stamping every
// URL with the build time tells Google the whole site changed on every deploy, and it stops
// trusting the field.
const REPOSITIONED = "2026-11-10"; // offer, market check and sitewide copy changes
const GUIDES_REVIEWED = "2026-08-28"; // matches dateModified in the guides' Article schema
const LEGAL = "2026-11-10";

type Entry = [path: string, lastModified: string, priority: number];

// /research and /results/hillcrest-life-and-health are deliberately absent: both are noindex
// until they have content, and listing a noindex page contradicts the sitemap.
const entries: Entry[] = [
  ["", REPOSITIONED, 1.0],
  ["/market-check", REPOSITIONED, 0.95],
  ["/industries/insurance-agents", REPOSITIONED, 0.95],
  ["/offer", REPOSITIONED, 0.9],
  ["/scorecard", REPOSITIONED, 0.9],
  ["/contact", REPOSITIONED, 0.7],
  ["/about", REPOSITIONED, 0.7],
  ["/resources", REPOSITIONED, 0.8],

  ["/services/google-business-profile", REPOSITIONED, 0.8],
  ["/services/local-seo", REPOSITIONED, 0.8],
  ["/services/ai-search-visibility", REPOSITIONED, 0.8],
  ["/services/citations", REPOSITIONED, 0.8],
  ["/services/content", REPOSITIONED, 0.8],
  ["/services/reputation", REPOSITIONED, 0.8],

  ["/resources/google-business-profile-setup", GUIDES_REVIEWED, 0.75],
  ["/resources/local-seo-checklist", GUIDES_REVIEWED, 0.75],
  ["/resources/ai-search-visibility", GUIDES_REVIEWED, 0.75],
  ["/resources/citation-building", GUIDES_REVIEWED, 0.75],
  ["/resources/insurance-agent-gbp", GUIDES_REVIEWED, 0.75],
  ["/resources/schema-markup", GUIDES_REVIEWED, 0.75],

  ["/industries/financial-advisors", REPOSITIONED, 0.6],
  ["/industries/cpa-firms", REPOSITIONED, 0.6],
  ["/industries/mortgage-brokers", REPOSITIONED, 0.6],
  ["/industries/real-estate", REPOSITIONED, 0.4],
  ["/industries/attorneys", REPOSITIONED, 0.4],
  ["/industries/medical-practices", REPOSITIONED, 0.4],
  ["/industries/home-services", REPOSITIONED, 0.4],

  ["/privacy", LEGAL, 0.2],
  ["/terms", LEGAL, 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(([path, lastModified, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  }));
}
