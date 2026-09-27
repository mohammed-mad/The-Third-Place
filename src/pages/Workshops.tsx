import PageHeader from "@/components/ui/PageHeader";
import WorkshopCard from "@/components/home/WorkshopCard";
import BookingCTA from "@/components/home/BookingCTA";
import { workshops } from "@/data/workshops";

export default function Workshops() {
  return (
    <>
      <PageHeader
        eyebrow="Discover & Book"
        title="All Workshops"
        description="Small-group creative sessions in Kintsugi, Cyanotype and Mosaic Art. Choose a workshop to see upcoming dates and reserve your place."
      />
      <section className="bg-ivory py-16 lg:py-20">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-6 lg:justify-start lg:gap-[30px]">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
