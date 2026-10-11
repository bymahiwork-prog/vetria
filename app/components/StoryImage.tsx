import Image from "next/image";

type StoryImageProps = {
  src: string | null;
  alt: string;
  // Fixed height in px, or…
  height?: number;
  // …a shape such as "4 / 5" (used instead of height when given).
  aspectRatio?: string;
  className?: string;
  // Which part of the photo stays visible when it is cropped to fit, e.g. "50% 20%" keeps the top.
  position?: string;
  // How wide the image shows on screen, so Next.js serves a file no bigger than needed.
  sizes?: string;
  // true for the main photo at the top of a page: loads first instead of lazily.
  priority?: boolean;
};

// Shows the photo when one exists; until then, a placeholder in the brand's tint.
// With a descriptive alt, the placeholder shows that text as a label; with alt="" it is a plain block.
// Photos go through next/image, which resizes and converts them (WebP/AVIF) for each screen.
export default function StoryImage({
  src,
  alt,
  height,
  aspectRatio,
  className = "",
  position = "50% 50%",
  sizes = "(max-width: 860px) 100vw, 720px",
  priority = false,
}: StoryImageProps) {
  const box = aspectRatio ? { aspectRatio } : { height };

  if (src) {
    return (
      <div className={`vetria-photo ${className}`} style={{ position: "relative", width: "100%", overflow: "hidden", ...box }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          style={{ objectFit: "cover", objectPosition: position }}
        />
      </div>
    );
  }

  if (!alt) {
    return <div className={`vetria-placeholder ${className}`} style={box} aria-hidden="true" />;
  }

  return (
    <div className={`vetria-placeholder ${className}`} style={box} role="img" aria-label={alt}>
      {alt}
    </div>
  );
}
