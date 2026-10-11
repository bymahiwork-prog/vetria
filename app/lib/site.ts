// Site-wide facts used for SEO: canonical URLs, sitemap, robots and structured data.
//
// The live domain. NEXT_PUBLIC_SITE_URL (set in Vercel: Project → Settings → Environment
// Variables) overrides it, e.g. if the site is served from www.vitreaonline.in instead.
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vitreaonline.in";

export const site = {
  name: "Vitrea",
  url: rawUrl.replace(/\/$/, ""),
  tagline: "Stories of the businesses building what's next",
  description:
    "Vitrea is an independent media brand featuring founders and independent businesses, and explaining where small-business marketing is heading.",
  locale: "en",
  // TODO: add the real profile URLs once the handles are locked (Instagram, LinkedIn…).
  // These become "sameAs" in structured data, which helps Google and AI search recognise the brand.
  sameAs: [] as string[],
};

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

// The default share card (app/opengraph-image.png). Pages that set their own openGraph
// must include it explicitly, because nested openGraph objects replace the site-wide one.
export const defaultShareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name}: ${site.tagline}`,
};

type PageMetaInput = { path: string; title: string; description: string; absoluteTitle?: boolean };

// Consistent per-page metadata: title, description, canonical URL and social cards.
// (Next.js replaces, rather than merges, nested openGraph objects, so each page sets the full set.)
export function pageMeta({ path, title, description, absoluteTitle = false }: PageMetaInput) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: site.name,
      locale: "en_GB",
      url: path,
      title,
      description,
      images: [defaultShareImage],
    },
    twitter: { card: "summary_large_image" as const, title, description, images: [defaultShareImage.url] },
  };
}
