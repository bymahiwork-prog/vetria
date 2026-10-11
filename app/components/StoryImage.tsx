type StoryImageProps = {
  src: string | null;
  alt: string;
  height: number;
  className?: string;
  // Which part of the photo stays visible when it is cropped to fit, e.g. "50% 20%" keeps the top.
  position?: string;
};

// Shows the photo when one exists; until then, a placeholder in the brand's tint.
// With a descriptive alt, the placeholder shows that text as a label; with alt="" it is a plain block.
// When real photos arrive, swap the <img> for next/image if you want automatic resizing.
export default function StoryImage({ src, alt, height, className = "", position = "50% 50%" }: StoryImageProps) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ width: "100%", height, objectFit: "cover", objectPosition: position }}
      />
    );
  }

  if (!alt) {
    return (
      <div
        className={`vetria-placeholder ${className}`}
        style={{ height }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`vetria-placeholder ${className}`}
      style={{ height }}
      role="img"
      aria-label={alt}
    >
      {alt}
    </div>
  );
}
