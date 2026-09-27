import type { JournalPost } from "@/types/workshop";
import kintsugi from "@/assets/images/workshops/kintsugi.jpg";
import cyanotype from "@/assets/images/workshops/cyanotype.jpg";
import mosaic from "@/assets/images/workshops/mosaic.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";

export const journalPosts: JournalPost[] = [
  { id: "j-1", slug: "caring-for-kintsugi", title: "Caring for your kintsugi piece at home", image: kintsugi, alt: "Repaired ceramic bowl with golden seams" },
  { id: "j-2", slug: "cyanotype-on-fabric", title: "Cyanotype on fabric – three things to try", image: cyanotype, alt: "Blue botanical prints hanging to dry" },
  { id: "j-3", slug: "zellige-patterns", title: "Zellige patterns you can build at home", image: mosaic, alt: "Hands assembling a circular mosaic" },
  { id: "j-4", slug: "new-glazes", title: "New glazes on the studio shelves", image: gallery3, alt: "Handmade ceramics on wooden shelves" },
];
