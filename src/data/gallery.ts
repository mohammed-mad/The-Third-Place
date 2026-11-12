import type { GalleryImage } from "@/types/workshop";
import type { Lang } from "@/i18n/translations";
import gallery1 from "@/assets/images/gallery/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery/gallery-4.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5.jpg";
import studio from "@/assets/images/studio/studio.jpg";
import hero from "@/assets/images/hero/hero.jpg";
import kintsugiTable from "@/assets/images/cta/kintsugi-table.jpg";

const sources: { id: string; src: string; alt: Record<Lang, string> }[] = [
  { id: "g-hero", src: hero, alt: { en: "Participants working at wooden tables in the sunlit studio", fr: "Des participants travaillent autour de tables en bois dans l'atelier ensoleillé" } },
  { id: "g-1", src: gallery1, alt: { en: "Participants painting ceramics at a sunlit wooden table surrounded by plants", fr: "Des participants peignent des céramiques à une table en bois entourée de plantes" } },
  { id: "g-2", src: gallery2, alt: { en: "Blue cyanotype botanical prints hanging from a line with wooden pegs", fr: "Des cyanotypes botaniques bleus suspendus à un fil avec des pinces en bois" } },
  { id: "g-3", src: gallery3, alt: { en: "Handmade ceramic vessels and pots arranged on wooden studio shelves", fr: "Des céramiques faites main disposées sur les étagères en bois de l'atelier" } },
  { id: "g-4", src: gallery4, alt: { en: "Hands assembling a circular mosaic from blue and terracotta tiles", fr: "Des mains assemblent une mosaïque circulaire de carreaux bleus et terre cuite" } },
  { id: "g-5", src: gallery5, alt: { en: "The studio's long wooden workshop table beside tall windows and plants", fr: "La longue table en bois de l'atelier près des hautes fenêtres et des plantes" } },
  { id: "g-studio", src: studio, alt: { en: "The main studio room with arched windows and shelves of ceramics", fr: "La pièce principale de l'atelier avec ses fenêtres en arc et ses étagères de céramiques" } },
  { id: "g-cta", src: kintsugiTable, alt: { en: "A kintsugi bowl beside a jar of brushes on a wooden table", fr: "Un bol kintsugi à côté d'un pot de pinceaux sur une table en bois" } },
];

export const getGalleryImages = (lang: Lang): GalleryImage[] => sources.map((image) => ({ id: image.id, src: image.src, alt: image.alt[lang] }));
