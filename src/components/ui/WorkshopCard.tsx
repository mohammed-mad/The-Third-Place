import { Link } from "react-router-dom";
import type { Workshop } from "@/types/workshop";
import { formatPrice } from "@/lib/format";

interface WorkshopCardProps {
  workshop: Workshop;
  className?: string;
}

/** Portrait photo card with handwritten kicker, display title and price pill. */
export default function WorkshopCard({ workshop, className = "" }: WorkshopCardProps) {
  return (
    <Link
      to={`/workshops/${workshop.slug}`}
      className={["group relative block aspect-[420/576] w-[300px] shrink-0 snap-start overflow-hidden rounded-[2px] sm:w-[360px] lg:w-[420px]", className].join(" ")}
      aria-label={`${workshop.kicker}: ${workshop.shortTitle}, ${formatPrice(workshop.price)}`}
    >
      <img src={workshop.cardImage} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]" loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-7 text-center">
        <span className="font-script text-[26px] leading-none text-orange">{workshop.kicker}</span>
        <span className="display mt-2 text-[34px] leading-none text-white lg:text-card-display">{workshop.shortTitle}</span>
        <span className="mt-3 inline-flex items-center rounded-pill bg-tomato px-[14px] py-[3px] font-sans text-[15px] font-bold leading-[22px] text-white">
          {formatPrice(workshop.price)}
        </span>
      </div>
    </Link>
  );
}
