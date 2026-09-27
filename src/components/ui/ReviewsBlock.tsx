import { BadgeCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import StarRating from "@/components/ui/StarRating";
import { site } from "@/data/site";
import { useT } from "@/i18n/LanguageContext";
import { useTestimonials } from "@/i18n/useLocalizedData";

function GoogleWordmark() {
  return (
    <span className="font-sans text-[20px] font-semibold leading-none" aria-label="Google">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export default function ReviewsBlock({ className = "" }: { className?: string }) {
  const t = useT();
  const testimonials = useTestimonials();
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-sans text-[22px] font-extrabold text-ink">{site.googleReviews.rating}</span>
          <StarRating rating={5} size={19} />
          <span className="font-sans text-[15px] text-ink">{t.common.reviewsOn(site.googleReviews.count)}</span>
          <GoogleWordmark />
        </div>
        <Button href={site.googleReviews.url} target="_blank" rel="noreferrer" variant="green" size="sm" className="text-[14px]">
          {t.common.reviewUs}
        </Button>
      </div>

      <Carousel ariaLabel={t.home.reviewsAria} step={413} className="mt-5">
        {testimonials.map((review) => (
          <article key={review.id} className="w-[300px] shrink-0 snap-start rounded-card bg-beige-dark p-6 sm:w-[389px]">
            <header className="flex items-center gap-3">
              {review.avatar ? (
                <img src={review.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7B8FA6] font-sans text-[18px] font-bold text-white">{review.name[0]}</span>
              )}
              <div>
                <p className="flex items-center gap-1 font-sans text-[15px] font-bold leading-tight text-ink">
                  {review.name}
                  <BadgeCheck className="h-4 w-4 fill-[#34A853] text-white" aria-label={t.common.verified} />
                </p>
                <p className="font-sans text-[12px] text-ink/60">{review.when}</p>
              </div>
            </header>
            <StarRating rating={review.rating} size={16} className="mt-4" />
            <p className="mt-2 line-clamp-3 font-sans text-[15px] leading-[24px] text-ink">{review.quote}</p>
          </article>
        ))}
      </Carousel>
    </div>
  );
}
