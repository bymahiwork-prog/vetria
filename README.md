# Vitrea

Stories of the businesses building what's next. Next.js site for the Vitrea media brand.

## Domain

The site is set up for `https://vitreaonline.in` (see `app/lib/site.ts`). Canonical URLs,
the sitemap, robots.txt and structured data all use it. If the live site is served from
`www.vitreaonline.in` instead, set `NEXT_PUBLIC_SITE_URL=https://www.vitreaonline.in` in
Vercel under Project → Settings → Environment Variables and redeploy.

## Publishing a feature

1. Copy the sample in `app/content/stories.ts`, give it a new `slug` and fill it in.
2. Set `draft: false` and `publishedAt: "YYYY-MM-DD"`.
   Drafts are hidden from Google (noindex) and left out of the sitemap.
3. Point the homepage cards in `app/content/home.ts` and the navbar "Features" link at the new story.

## SEO built in

- Per-page titles, descriptions and canonical URLs (`app/lib/site.ts` → `pageMeta`)
- Share card and icons: `app/opengraph-image.png`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`
- `/sitemap.xml` and `/robots.txt` (search engines and AI answer engines allowed)
- Structured data: NewsMediaOrganization and WebSite on every page, NewsArticle and
  BreadcrumbList on published features, FAQPage on Get featured
- Add the real Instagram and LinkedIn URLs to `site.sameAs` in `app/lib/site.ts` once the handles are locked

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.
