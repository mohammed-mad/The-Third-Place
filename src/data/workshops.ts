import type { Workshop } from "@/types/workshop";
import kintsugiImage from "@/assets/images/workshops/kintsugi.jpg";
import cyanotypeImage from "@/assets/images/workshops/cyanotype.jpg";
import mosaicImage from "@/assets/images/workshops/mosaic.jpg";

export const workshops: Workshop[] = [
  {
    id: "ws-kintsugi",
    slug: "kintsugi-workshop",
    title: "Kintsugi Workshop",
    category: "Kintsugi",
    tagline: "Beauty in Imperfection",
    date: "Saturday, 17 October",
    time: "14:00 – 17:00",
    spotsLeft: 6,
    price: 65,
    image: kintsugiImage,
    description:
      "Kintsugi is the Japanese art of repairing broken ceramics with gold, honouring the cracks as part of an object's story. In this hands-on session you will learn the traditional technique using a modern, food-safe method, and leave with your own repaired piece.",
    highlights: [
      "All materials, ceramics and gold powder included",
      "Bring your own broken piece or choose one of ours",
      "Tea, coffee and homemade treats during the session",
      "Take your finished piece home the same day",
    ],
    duration: "3 hours",
    level: "All levels",
    sessions: [
      { id: "kin-1", date: "2026-10-17", time: "14:00 – 17:00", startTime: "14:00", endTime: "17:00", capacity: 10, spotsLeft: 6 },
      { id: "kin-2", date: "2026-10-24", time: "10:00 – 13:00", startTime: "10:00", endTime: "13:00", capacity: 10, spotsLeft: 9 },
      { id: "kin-3", date: "2026-11-07", time: "14:00 – 17:00", startTime: "14:00", endTime: "17:00", capacity: 10, spotsLeft: 10 },
    ],
  },
  {
    id: "ws-cyanotype",
    slug: "cyanotype-workshop",
    title: "Cyanotype Workshop",
    category: "Cyanotype",
    tagline: "Create with Light & Nature",
    date: "Saturday, 24 October",
    time: "14:00 – 17:00",
    spotsLeft: 8,
    price: 60,
    image: cyanotypeImage,
    description:
      "Cyanotype is one of the oldest photographic processes, producing deep Prussian-blue prints using only sunlight and water. You will compose with leaves, flowers and found objects, coat your own paper and develop a series of botanical prints.",
    highlights: [
      "Pre-coated and self-coated papers to experiment with",
      "Fresh botanicals gathered from the studio garden",
      "Learn exposure, developing and toning techniques",
      "Leave with a set of 4–6 finished prints",
    ],
    duration: "3 hours",
    level: "Beginner",
    sessions: [
      { id: "cya-1", date: "2026-10-24", time: "14:00 – 17:00", startTime: "14:00", endTime: "17:00", capacity: 12, spotsLeft: 8 },
      { id: "cya-2", date: "2026-11-14", time: "14:00 – 17:00", startTime: "14:00", endTime: "17:00", capacity: 12, spotsLeft: 12 },
    ],
  },
  {
    id: "ws-mosaic",
    slug: "mosaic-art-workshop",
    title: "Mosaic Art Workshop",
    category: "Mosaic Art",
    tagline: "Piece by Piece",
    date: "Saturday, 31 October",
    time: "14:00 – 17:00",
    spotsLeft: 5,
    price: 70,
    image: mosaicImage,
    description:
      "Inspired by Moroccan zellige and Mediterranean mosaics, this workshop introduces you to cutting, arranging and grouting ceramic and glass tesserae. Design your own pattern and build a small decorative piece to take home.",
    highlights: [
      "Hand-cut ceramic and glass tesserae in earthy tones",
      "Learn nipping, spacing and grouting techniques",
      "Choose a coaster, trivet or small wall piece",
      "Small group of maximum 8 participants",
    ],
    duration: "3 hours",
    level: "All levels",
    sessions: [
      { id: "mos-1", date: "2026-10-31", time: "14:00 – 17:00", startTime: "14:00", endTime: "17:00", capacity: 8, spotsLeft: 5 },
      { id: "mos-2", date: "2026-11-21", time: "10:00 – 13:00", startTime: "10:00", endTime: "13:00", capacity: 8, spotsLeft: 8 },
    ],
  },
];

export const getWorkshopBySlug = (slug: string): Workshop | undefined =>
  workshops.find((workshop) => workshop.slug === slug);
