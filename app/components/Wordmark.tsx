type WordmarkProps = {
  size?: number;
  tone?: "dark" | "light";
};

// The primary logo: "Vetria." in Playfair Display Italic with a gold full stop.
// tone="dark" = espresso text for cream grounds; tone="light" = cream text for espresso grounds.
// Styles live in globals.css (.vetria-wordmark) because the mark is used in several places.
export default function Wordmark({ size = 40, tone = "dark" }: WordmarkProps) {
  return (
    <span
      className={`vetria-wordmark vetria-wordmark--${tone}`}
      style={{ fontSize: size }}
    >
      Vetria<span className="vetria-wordmark__dot">.</span>
    </span>
  );
}
