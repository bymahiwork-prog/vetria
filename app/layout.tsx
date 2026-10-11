import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Vetria — Stories of the businesses building what's next",
  description:
    "Vetria features founders and independent businesses, and explains where small-business marketing is heading.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
