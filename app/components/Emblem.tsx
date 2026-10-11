import { useId } from "react";

type EmblemProps = {
  size?: number;
  tone?: "cream" | "espresso";
  decorative?: boolean;
};

// The "Featured in Vitrea" emblem: a V monogram ringed by the tagline.
// Badge only — never use it as the main logo.
export default function Emblem({ size = 160, tone = "cream", decorative = true }: EmblemProps) {
  const ringId = useId();
  const onCream = tone === "cream";
  const ring = onCream ? "#b8955a" : "#cdb07a";
  const ringText = onCream ? "#1a1410" : "#fbf9f5";
  const disc = onCream ? "#1a1410" : "#fbf9f5";
  const letter = onCream ? "#fbf9f5" : "#1a1410";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": "Featured in Vitrea" })}
    >
      <defs>
        <path
          id={ringId}
          d="M150,150 m-112,0 a112,112 0 1,1 224,0 a112,112 0 1,1 -224,0"
        />
      </defs>
      <circle cx="150" cy="150" r="146" fill="none" stroke={ring} strokeWidth="2" />
      <circle cx="150" cy="150" r="86" fill={disc} />
      {onCream && (
        <circle cx="150" cy="150" r="76" fill="none" stroke={ring} strokeWidth="1" />
      )}
      <text
        fill={ringText}
        fontSize="19"
        fontWeight="700"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <textPath href={`#${ringId}`} textLength="690" lengthAdjust="spacing">
          VITREA · STORIES OF WHAT&apos;S NEXT ·
        </textPath>
      </text>
      <text
        x="146"
        y="182"
        textAnchor="middle"
        fill={letter}
        fontSize="96"
        fontStyle="italic"
        style={{ fontFamily: "var(--font-display)" }}
      >
        V
      </text>
      <circle cx="182" cy="176" r="6" fill={ring} />
    </svg>
  );
}
