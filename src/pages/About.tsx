import PageHeader from "@/components/ui/PageHeader";
import StudioSection from "@/components/home/StudioSection";
import Benefits from "@/components/home/Benefits";
import BookingCTA from "@/components/home/BookingCTA";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The Third Place"
        description="A creative workshop studio in Casablanca where people come together to learn, create and connect — a space between home and work."
      />
      <StudioSection />
      <Benefits />
      <BookingCTA />
    </>
  );
}
