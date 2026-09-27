import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import WorkshopSection from "@/components/home/WorkshopSection";
import StudioSection from "@/components/home/StudioSection";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import BookingCTA from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <WorkshopSection />
      <StudioSection />
      <Gallery />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
