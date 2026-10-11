import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

// Open to search engines and to AI answer engines (ChatGPT, Perplexity, Gemini, Claude):
// being cited in AI answers is part of how Vetria gets discovered.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
