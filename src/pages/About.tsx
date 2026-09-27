import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import ReviewsBlock from "@/components/ui/ReviewsBlock";
import { useT } from "@/i18n/LanguageContext";
import studioImage from "@/assets/images/studio/studio.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";
import heroImage from "@/assets/images/hero/hero.jpg";

export default function About() {
  const t = useT();
  const a = t.aboutPage;
  return (
    <>
      <PageHero image={heroImage} imageAlt={a.heroAlt} kicker={a.kicker} title={a.title} intro={<p>{a.intro}</p>} minHeight="min-h-[480px] lg:min-h-[560px]" />

      <section className="page-container py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-sans text-h2 text-green">{a.block1Title}</h2>
            <p className="mt-4 font-sans text-[16px] leading-[26px] text-green-olive">{a.block1Text}</p>
          </div>
          <img src={gallery5} alt={a.block1Alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div className="mx-auto mt-16 grid max-w-[1160px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img src={gallery3} alt={a.block2Alt} className="order-2 aspect-[4/3] w-full object-cover lg:order-1" loading="lazy" />
          <div className="order-1 lg:order-2">
            <h2 className="font-sans text-h2 text-green">{a.block2Title}</h2>
            <p className="mt-4 font-sans text-[16px] leading-[26px] text-green-olive">{a.block2Text}</p>
          </div>
        </div>
      </section>

      <section className="page-container pb-20" aria-label={t.home.reviewsAria}>
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[44%_1fr]">
        <div className="h-[300px] lg:h-[520px]">
          <img src={studioImage} alt={a.splitAlt} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex items-center bg-beige-dark px-4 py-14 sm:px-8 lg:px-[80px]">
          <div className="max-w-[560px]">
            <h2 className="font-sans text-h2 text-green">{a.splitTitle}</h2>
            <p className="mt-4 font-sans text-body text-green-olive">
              {a.splitText1}
              <Link to="/workshops" className="text-tomato hover:underline">
                {a.splitLink1}
              </Link>
              {a.splitText2}
              <Link to="/private-workshops" className="text-tomato hover:underline">
                {a.splitLink2}
              </Link>
              {a.splitText3}
            </p>
            <Button to="/workshops" variant="secondary" className="mt-7">
              {t.common.seeWorkshops}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
