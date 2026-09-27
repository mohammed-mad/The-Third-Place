import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkshopCard from "@/components/home/WorkshopCard";
import { workshops } from "@/data/workshops";

export default function WorkshopSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 330, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory py-16 lg:py-[61px] lg:pb-[53px]" aria-labelledby="workshops-heading">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,345px)_1fr] lg:items-center lg:gap-[50px]">
          <div className="lg:-mt-[120px]">
            <SectionHeading
              eyebrow="Discover & Book"
              eyebrowClassName="text-clay"
              title={
                <span id="workshops-heading">
                  Upcoming
                  <br />
                  Workshops
                </span>
              }
              description="Discover our upcoming creative sessions and find an experience that inspires you."
              titleClassName="text-[42px] leading-[1.06] lg:text-[58px] lg:leading-[1.04]"
              descriptionClassName="max-w-[340px] text-[15.5px] leading-[1.7] lg:mt-[18px]"
            />
            <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-[26px] lg:gap-[12px]">
              <Button to="/workshops" size="sm" arrow className="h-[48px] px-[22px] text-[13.5px]">
                All Workshops
              </Button>
              <Button to="/contact" variant="outline" size="sm" className="h-[48px] px-[22px] text-[13.5px]">
                Private Workshops
              </Button>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              ref={trackRef}
              className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 pt-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-[30px] lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {workshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>

            <div className="mt-5 flex justify-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-line bg-white text-ink shadow-card transition hover:bg-cream"
                aria-label="Previous workshops"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-line bg-white text-ink shadow-card transition hover:bg-cream"
                aria-label="Next workshops"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="absolute -right-[24px] top-[226px] hidden h-[46px] w-[46px] items-center justify-center rounded-pill border border-line bg-white text-ink shadow-card transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-card-hover lg:inline-flex"
              aria-label="See more workshops"
            >
              <ChevronRight className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
