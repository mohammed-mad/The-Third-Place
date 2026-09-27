import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import WorkshopCard from "@/components/ui/WorkshopCard";
import { workshops } from "@/data/workshops";

export default function WorkshopsSlider() {
  return (
    <section className="page-padding mx-auto max-w-page py-16 lg:py-[160px]" aria-labelledby="home-workshops">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[440px_1fr] lg:items-center lg:gap-0">
        <div className="relative pl-4 lg:pl-4">
          <div className="dotted-bg absolute -left-6 top-1/2 h-[104%] w-[84%] -translate-y-1/2 rounded-[6px] lg:-left-4" aria-hidden="true" />
          <div className="relative max-w-[393px] pt-6 pb-6">
            <h2 id="home-workshops" className="font-sans text-h2 text-green">
              Our workshops
            </h2>
            <p className="mt-4 font-sans text-body text-green-olive">
              Ready for a surprisingly relaxed and creative afternoon? Join a craft workshop, a ceramic workshop or bring your own group for a private session. Everyone is welcome.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button to="/workshops" variant="secondary" className="px-4">
                Open workshops
              </Button>
              <Button to="/private-workshops" variant="secondary" className="px-4">
                Private workshops
              </Button>
            </div>
          </div>
        </div>

        <Carousel ariaLabel="Workshops" step={444} className="min-w-0">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
