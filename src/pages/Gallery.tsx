import PageHeader from "@/components/ui/PageHeader";
import BookingCTA from "@/components/home/BookingCTA";
import { galleryImages } from "@/data/gallery";
import { workshops } from "@/data/workshops";
import studioImage from "@/assets/images/studio/studio.jpg";

export default function GalleryPage() {
  const images = [
    { id: "studio", src: studioImage, alt: "The studio's main room with a long wooden table and arched windows" },
    ...galleryImages,
    ...workshops.map((workshop) => ({ id: workshop.id, src: workshop.image, alt: `${workshop.title} — ${workshop.tagline}` })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Our Space"
        title="Gallery"
        description="A warm and inspiring space for creativity, learning and connection. A few moments from inside the studio."
      />
      <section className="bg-ivory py-16 lg:py-20">
        <div className="page-container">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-[10px]">
            {images.map((image, index) => (
              <li
                key={image.id}
                className={["overflow-hidden rounded-card", index === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""].join(" ")}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
