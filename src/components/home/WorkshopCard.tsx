import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import type { Workshop } from "@/types/workshop";
import { buttonClasses } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/format";

interface WorkshopCardProps {
  workshop: Workshop;
  className?: string;
}

export default function WorkshopCard({ workshop, className = "" }: WorkshopCardProps) {
  const detailHref = `/workshops/${workshop.slug}`;
  const bookingHref = `/booking/${workshop.slug}`;

  return (
    <article
      className={[
        "group relative flex w-[300px] shrink-0 snap-start flex-col rounded-card border border-line bg-white shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover",
        className,
      ].join(" ")}
    >
      <Link to={detailHref} className="absolute inset-0 z-[1] rounded-card" aria-label={`View ${workshop.title}`} />

      <div className="relative">
        <div className="h-[256px] overflow-hidden rounded-t-card">
          <img
            src={workshop.image}
            alt={`${workshop.title} — ${workshop.tagline}`}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <span className="absolute -bottom-[8px] left-[10px] inline-flex h-[30px] items-center rounded-pill bg-cream px-[16px] font-sans text-[12.5px] font-medium text-ink shadow-[0_1px_2px_rgba(36,37,31,0.08)]">
          {workshop.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[24px] pb-[24px] pt-[38px]">
        <h3 className="font-serif text-[26px] font-semibold leading-tight text-ink">{workshop.title}</h3>
        <p className="mt-[5px] font-sans text-[14px] text-ink-muted">{workshop.tagline}</p>

        <dl className="mt-[22px] space-y-[10px] font-sans text-[14.5px] font-medium text-ink">
          <div className="flex items-center gap-[10px]">
            <dt className="sr-only">Date</dt>
            <Calendar className="h-[16px] w-[16px] shrink-0 text-forest" strokeWidth={1.7} aria-hidden="true" />
            <dd>{workshop.date}</dd>
          </div>
          <div className="flex items-center gap-[10px]">
            <dt className="sr-only">Time</dt>
            <Clock className="h-[16px] w-[16px] shrink-0 text-forest" strokeWidth={1.7} aria-hidden="true" />
            <dd>{workshop.time}</dd>
          </div>
          <div className="flex items-center gap-[10px] pt-[6px]">
            <dt className="sr-only">Availability</dt>
            <User className="h-[16px] w-[16px] shrink-0 text-forest" strokeWidth={1.7} aria-hidden="true" />
            <dd className="text-[13.5px] text-coral">{workshop.spotsLeft} spots left</dd>
          </div>
        </dl>

        <p className="mt-[18px] font-sans text-[30px] font-semibold leading-none text-ink">
          <span className="sr-only">Price per participant: </span>
          {formatPrice(workshop.price)}
        </p>

        <Link
          to={bookingHref}
          className={[buttonClasses({ size: "sm", fullWidth: true }), "relative z-[2] mt-[22px] h-[42px] text-[13.5px]"].join(" ")}
        >
          <span>Book Now</span>
          <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
