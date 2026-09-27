import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="bg-ivory pt-16 lg:pt-[82px]" aria-labelledby="gallery-heading">
      <div className="page-container">
        <SectionHeading
          eyebrow="Our Space"
          align="center"
          title={<span id="gallery-heading">A Glimpse Inside</span>}
          description="A warm and inspiring space for creativity, learning and connection."
          titleClassName="text-[36px] lg:text-[54px] leading-[1.1]"
          descriptionClassName="text-[17px] font-medium text-ink/75 lg:mt-[10px]"
        />
      </div>

      <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-[10px] overflow-x-auto px-4 lg:mt-[44px] lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
        {galleryImages.map((image) => (
          <li key={image.id} className="h-[260px] w-[78vw] shrink-0 snap-center overflow-hidden sm:w-[46vw] lg:h-[330px] lg:w-auto">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition duration-500 ease-out hover:scale-[1.03]"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
