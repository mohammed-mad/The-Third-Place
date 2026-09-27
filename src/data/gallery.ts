import type { GalleryImage } from "@/types/workshop";
import gallery1 from "@/assets/images/gallery/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery/gallery-4.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5.jpg";
import studio from "@/assets/images/studio/studio.jpg";
import hero from "@/assets/images/hero/hero.jpg";
import kintsugiTable from "@/assets/images/cta/kintsugi-table.jpg";

export const galleryImages: GalleryImage[] = [
  { id: "g-hero", src: hero, alt: "Participants working at wooden tables in the sunlit studio" },
  { id: "g-1", src: gallery1, alt: "Participants painting ceramics at a sunlit wooden table surrounded by plants" },
  { id: "g-2", src: gallery2, alt: "Blue cyanotype botanical prints hanging from a line with wooden pegs" },
  { id: "g-3", src: gallery3, alt: "Handmade ceramic vessels and pots arranged on wooden studio shelves" },
  { id: "g-4", src: gallery4, alt: "Hands assembling a circular mosaic from blue and terracotta tiles" },
  { id: "g-5", src: gallery5, alt: "The studio's long wooden workshop table beside tall windows and plants" },
  { id: "g-studio", src: studio, alt: "The main studio room with arched windows and shelves of ceramics" },
  { id: "g-cta", src: kintsugiTable, alt: "A kintsugi bowl beside a jar of brushes on a wooden table" },
];
