import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useT } from "@/i18n/LanguageContext";
import studioImage from "@/assets/images/studio/studio.jpg";

export default function StudioSection() {
  const t = useT();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2" aria-labelledby="home-studio">
      <div className="h-[320px] sm:h-[440px] lg:h-[590px]">
        <img src={studioImage} alt={t.home.studioAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="flex items-center bg-beige-dark px-4 py-14 sm:px-8 lg:px-0 lg:py-0">
        <div className="max-w-[528px] lg:ml-[110px]">
          <SectionTitle as="h2" accent={t.home.studioAccent}>
            {t.home.studioTitle}
          </SectionTitle>
          <p className="mt-5 font-sans text-body text-green-olive">
            {t.home.studioText1}
            <br />
            {t.home.studioText2}
          </p>
          <Button to="/about" variant="secondary" className="mt-7">
            {t.common.moreAboutStudio}
          </Button>
        </div>
      </div>
    </section>
  );
}
