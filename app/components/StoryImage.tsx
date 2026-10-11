type StoryImageProps = {
  src: string | null;
  alt: string;
  height: number;
  className?: string;
};

// Shows the photo when one exists; until then, a labelled placeholder in the brand's tint.
// When real photos arrive, swap the <img> for next/image if you want automatic resizing.
export default function StoryImage({ src, alt, height, className = "" }: StoryImageProps) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ width: "100%", height, objectFit: "cover" }}
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
