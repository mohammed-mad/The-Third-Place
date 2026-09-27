import Hero from "@/components/home/Hero";
import UspStrip from "@/components/home/UspStrip";
import WorkshopsSlider from "@/components/home/WorkshopsSlider";
import StudioSection from "@/components/home/StudioSection";
import Reviews from "@/components/home/Reviews";
import Journal from "@/components/home/Journal";

export default function Home() {
  return (
    <>
      <Hero />
      <UspStrip />
      <WorkshopsSlider />
      <StudioSection />
      <Reviews />
      <Journal />
    </>
  );
}
