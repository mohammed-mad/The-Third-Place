import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import WorkshopCard from "@/components/ui/WorkshopCard";
import { useT } from "@/i18n/LanguageContext";
import { useWorkshops } from "@/i18n/useLocalizedData";

export default function WorkshopsSlider() {
  const t = useT();
  const workshops = useWorkshops();
  return (
    <section className="page-padding mx-auto max-w-page py-16 lg:py-[160px]" aria-labelledby="home-workshops">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[440px_1fr] lg:items-center lg:gap-0">
        <div className="relative pl-4 lg:pl-4">
          <div className="dotted-bg absolute -left-6 top-1/2 h-[104%] w-[84%] -translate-y-1/2 rounded-[6px] lg:-left-4" aria-hidden="true" />
          <div className="relative max-w-[393px] pt-6 pb-6">
            <h2 id="home-workshops" className="font-sans text-h2 text-green">
              {t.home.workshopsTitle}
            </h2>
            <p className="mt-4 font-sans text-body text-green-olive">{t.home.workshopsText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button to="/workshops" variant="secondary" className="px-4">
                {t.common.openWorkshops}
              </Button>
              <Button to="/private-workshops" variant="secondary" className="px-4">
                {t.common.privateWorkshops}
              </Button>
            </div>
          </div>
        </div>

        <Carousel ariaLabel={t.home.workshopsAria} step={444} className="min-w-0">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
