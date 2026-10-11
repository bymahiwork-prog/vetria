type WordmarkProps = {
  size?: number;
  tone?: "dark" | "light";
};

// The primary logo: the VITREA logotype (public/vitrea-logo.svg, transparent background).
// `size` sets the logo's height in pixels; the width follows the logo's proportions.
// tone="dark" = espresso on light grounds; tone="light" = ivory on espresso grounds.
// Styles live in globals.css (.vetria-wordmark) because the mark is used in several places.
export default function Wordmark({ size = 28, tone = "dark" }: WordmarkProps) {
  return (
    <span
      className={`vetria-wordmark vetria-wordmark--${tone}`}
      style={{ height: size }}
      role="img"
      aria-label="Vitrea"
    />
  );
}
