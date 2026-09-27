import ScriptTitle from "@/components/ui/ScriptTitle";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <section className="page-container pb-20 pt-[200px]">
      <div className="text-center">
        <ScriptTitle as="p">Our space</ScriptTitle>
        <h1 className="display mt-2 text-[44px] leading-[1] text-green lg:text-[56px]">A glimpse inside</h1>
        <p className="mx-auto mt-4 max-w-[600px] font-sans text-body text-green-olive">A warm and inspiring space for creativity, learning and connection.</p>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {galleryImages.map((image, index) => (
          <li key={image.id} className={["overflow-hidden", index === 0 ? "col-span-2 row-span-2" : ""].join(" ")}>
            <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-[1.04]" loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}
