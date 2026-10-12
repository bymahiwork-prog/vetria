import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "./components/JsonLd";
import { absoluteUrl, site } from "./lib/site";
import "./globals.css";

// Brand typefaces, self-hosted (both SIL Open Font License).
// Playfair Display: headlines, wordmark, pull-quotes. Manrope: everything else.
const playfair = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-Variable.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/PlayfairDisplay-Italic-Variable.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

// Brand entity for Google and AI answer engines.
const organization = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icon.png"),
  slogan: site.tagline,
  description: site.description,
  publishingPrinciples: absoluteUrl("/editorial-policy"),
  ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: absoluteUrl("/"),
  inLanguage: site.locale,
  publisher: { "@id": absoluteUrl("/#organization") },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={[organization, website]} />
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
        {/* Vercel Web Analytics: page views, no cookies. Turn it on in Vercel → Analytics. */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
