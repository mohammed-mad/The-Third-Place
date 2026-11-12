import type { JournalPostSource } from "@/types/workshop";
import kintsugi from "@/assets/images/workshops/kintsugi.jpg";
import cyanotype from "@/assets/images/workshops/cyanotype.jpg";
import mosaic from "@/assets/images/workshops/mosaic.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";

export const journalSources: JournalPostSource[] = [
  { id: "j-1", slug: "caring-for-kintsugi", image: kintsugi, title: { en: "Caring for your kintsugi piece at home", fr: "Prendre soin de votre pièce kintsugi à la maison" }, alt: { en: "Repaired ceramic bowl with golden seams", fr: "Bol en céramique réparé avec des jointures dorées" } },
  { id: "j-2", slug: "cyanotype-on-fabric", image: cyanotype, title: { en: "Cyanotype on fabric – three things to try", fr: "Cyanotype sur tissu : trois idées à essayer" }, alt: { en: "Blue botanical prints hanging to dry", fr: "Tirages botaniques bleus qui sèchent" } },
  { id: "j-3", slug: "zellige-patterns", image: mosaic, title: { en: "Zellige patterns you can build at home", fr: "Des motifs de zellige à réaliser chez vous" }, alt: { en: "Hands assembling a circular mosaic", fr: "Des mains assemblent une mosaïque circulaire" } },
  { id: "j-4", slug: "new-glazes", image: gallery3, title: { en: "New glazes on the studio shelves", fr: "De nouveaux émaux sur les étagères de l'atelier" }, alt: { en: "Handmade ceramics on wooden shelves", fr: "Céramiques faites main sur des étagères en bois" } },
];
