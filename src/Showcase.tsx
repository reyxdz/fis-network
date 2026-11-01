import { useEffect, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function Showcase({
  slides,
  label,
}: {
  slides: readonly Slide[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const slide = slides[index];

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4200);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section className="showcase" aria-roledescription="carousel" aria-label={label}>
      <div className="showcase-frame">
        <img
          key={slide.src}
          src={slide.src}
          width={slide.width}
          height={slide.height}
          alt={slide.alt}
        />
      </div>
      {count > 1 ? (
        <div className="showcase-dots" aria-hidden="true">
          {slides.map((item, itemIndex) => (
            <span key={item.src} className={itemIndex === index ? "on" : ""} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
