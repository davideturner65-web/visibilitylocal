import type { MetadataRoute } from "next";

const BASE_URL = "https://visibilitylocal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/resources`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const servicePages = [
    "google-business-profile",
    "local-seo",
    "ai-search-visibility",
    "citations",
    "content",
    "reputation",
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const industryPages = [
    "insurance-agents",
    "mortgage-brokers",
    "cpa-firms",
    "financial-advisors",
    "real-estate",
    "attorneys",
    "medical-practices",
    "home-services",
  ].map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const resourcePages = [
    "google-business-profile-setup",
    "local-seo-checklist",
    "ai-search-visibility",
    "citation-building",
    "insurance-agent-gbp",
    "schema-markup",
  ].map((slug) => ({
    url: `${BASE_URL}/resources/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...resourcePages].map(
    (page) => ({
      url: page.url,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  );
}
