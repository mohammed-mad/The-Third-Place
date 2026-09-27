import { type ReactNode, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

interface CarouselProps {
  children: ReactNode[];
  ariaLabel: string;
  /** Scroll distance per click in px */
  step?: number;
  className?: string;
  gapClassName?: string;
  /** Where the next/previous buttons sit */
  arrows?: "sides" | "none";
  /** Extra classes for the previous / next buttons (positioning) */
  prevClassName?: string;
  nextClassName?: string;
  /** Extra classes for the scroll track (e.g. trailing padding when it bleeds off-screen) */
  trackClassName?: string;
  showDots?: boolean;
}

/** Horizontal scroll-snap track with round arrow buttons and dot indicators. */
export default function Carousel({ children, ariaLabel, step = 444, className = "", gapClassName = "gap-6", arrows = "sides", prevClassName = "-left-6", nextClassName = "-right-6", trackClassName = "", showDots = true }: CarouselProps) {
  const t = useT();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const count = children.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setCanPrev(track.scrollLeft > 4);
      setCanNext(track.scrollLeft < max - 4);
      const child = track.children[0] as HTMLElement | undefined;
      const width = child ? child.offsetWidth + 24 : step;
      setIndex(Math.min(count - 1, Math.round(track.scrollLeft / width)));
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count, step]);

  const scroll = (direction: 1 | -1) => trackRef.current?.scrollBy({ left: direction * step, behavior: "smooth" });

  const arrowClass =
    "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-green-olive shadow-arrow transition duration-300 hover:bg-beige-dark disabled:opacity-0 lg:inline-flex";

  return (
    <div className={["relative", className].join(" ")}>
      {arrows === "sides" && (
        <button type="button" onClick={() => scroll(-1)} disabled={!canPrev} className={[arrowClass, prevClassName].join(" ")} aria-label={t.common.previous}>
          <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
        </button>
      )}
      <div ref={trackRef} role="region" aria-label={ariaLabel} className={["no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2", gapClassName, trackClassName].join(" ")}>
        {children}
      </div>
      {arrows === "sides" && (
        <button type="button" onClick={() => scroll(1)} disabled={!canNext} className={[arrowClass, nextClassName].join(" ")} aria-label={t.common.next}>
          <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
        </button>
      )}
      {showDots && count > 1 && (
        <div className="mt-4 flex justify-center gap-[6px]" aria-hidden="true">
          {children.map((_, i) => (
            <span key={i} className={["h-[6px] w-[6px] rounded-full transition", i === index ? "bg-green" : "bg-green/30"].join(" ")} />
          ))}
        </div>
      )}
    </div>
  );
}
