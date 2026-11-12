import ReviewsBlock from "@/components/ui/ReviewsBlock";
import { useT } from "@/i18n/LanguageContext";

export default function Reviews() {
  const t = useT();
  return (
    <section className="relative overflow-hidden py-16 lg:pt-[110px] lg:pb-[150px]" aria-label={t.home.reviewsAria}>
      <svg viewBox="0 0 320 240" className="pointer-events-none absolute -bottom-6 left-0 hidden h-[240px] w-auto text-green-olive/70 lg:block" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 236C70 170 120 120 200 60" />
        <path d="M120 130c-14-30 10-60 36-58-4 26-18 48-36 58Z" />
        <path d="M150 104c20-26 52-30 72-14-18 22-48 28-72 14Z" />
        <path d="M86 170c-24-12-30-46-10-64 10 24 10 46 10 64Z" />
        <path d="M100 152c22-22 56-20 70 0-24 14-52 12-70 0Z" />
        <path d="M40 220c-18-18-14-52 8-62 6 22 2 44-8 62Z" />
        <path d="M190 70c10-24 40-30 56-16-16 18-40 24-56 16Z" />
        <circle cx="262" cy="200" r="22" />
        <path d="M262 178c-4-10-2-18 6-24M262 178c8-6 16-6 22-2" />
        <circle cx="300" cy="222" r="16" />
      </svg>
      <div className="page-container relative">
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </div>
    </section>
  );
}
