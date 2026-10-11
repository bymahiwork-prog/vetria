import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";
import { publishedStories } from "./content/stories";

// Date the site structure last changed; bump it when pages are added or rewritten.
const SITE_UPDATED = "2026-10-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/get-featured"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/newsletter"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/about"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/editorial-policy"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Only published stories; drafts with placeholders stay out.
  const features: MetadataRoute.Sitemap = publishedStories().map((story) => ({
    url: absoluteUrl(`/features/${story.slug}`),
    lastModified: story.publishedAt ?? SITE_UPDATED,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...pages, ...features];
}
