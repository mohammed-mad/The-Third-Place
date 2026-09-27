import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import ReviewsBlock from "@/components/ui/ReviewsBlock";
import studioImage from "@/assets/images/studio/studio.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";
import heroImage from "@/assets/images/hero/hero.jpg";

export default function About() {
  return (
    <>
      <PageHero image={heroImage} imageAlt="Participants at work in the studio" kicker="The studio" title="Come and feel the atmosphere" intro={<p>In a quiet street off Boulevard d'Anfa in Casablanca you'll find our light-filled studio, where we host craft and ceramic workshops with a lot of pleasure and patience.</p>} minHeight="min-h-[480px] lg:min-h-[560px]" />

      <section className="page-container py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-sans text-h2 text-green">A modern, welcoming studio</h2>
            <p className="mt-4 font-sans text-[16px] leading-[26px] text-green-olive">
              We paid attention to both the layout and the equipment of the studio. It had to be cosy, but also practical. There is a long table for twelve, a kiln, a glazing corner, a wall of underglazes and a sunlit spot for cyanotype. Enough room to work comfortably and to sit together over tea afterwards.
            </p>
          </div>
          <img src={gallery5} alt="The long wooden studio table beside tall windows" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div className="mx-auto mt-16 grid max-w-[1160px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img src={gallery3} alt="Handmade ceramics on wooden shelves" className="order-2 aspect-[4/3] w-full object-cover lg:order-1" loading="lazy" />
          <div className="order-1 lg:order-2">
            <h2 className="font-sans text-h2 text-green">Materials & the garden</h2>
            <p className="mt-4 font-sans text-[16px] leading-[26px] text-green-olive">
              We work with stoneware clay from the Rif, glazes we mix ourselves and gold powder for kintsugi. The small courtyard garden provides the leaves and flowers for cyanotype and a shady place to sit while your prints develop in the sun.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container pb-20" aria-label="Reviews">
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[44%_1fr]">
        <div className="h-[300px] lg:h-[520px]">
          <img src={studioImage} alt="The studio interior" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex items-center bg-beige-dark px-4 py-14 sm:px-8 lg:px-[80px]">
          <div className="max-w-[560px]">
            <h2 className="font-sans text-h2 text-green">Craft & ceramic workshops</h2>
            <p className="mt-4 font-sans text-body text-green-olive">
              In our studio we host a range of craft and ceramic workshops: repair a bowl with gold, print with sunlight, build a mosaic or shape a vessel by hand. Have a look at the <Link to="/workshops" className="text-tomato hover:underline">workshops</Link>, or bring your own group for a <Link to="/private-workshops" className="text-tomato hover:underline">private workshop</Link>.
            </p>
            <Button to="/workshops" variant="secondary" className="mt-7">
              See our workshops
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
