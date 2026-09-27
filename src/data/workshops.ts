import type { Workshop, WorkshopGroup } from "@/types/workshop";
import kintsugiCard from "@/assets/images/cards/kintsugi.jpg";
import cyanotypeCard from "@/assets/images/cards/cyanotype.jpg";
import mosaicCard from "@/assets/images/cards/mosaic.jpg";
import ceramicPaintingCard from "@/assets/images/cards/ceramic-painting.jpg";
import potteryCard from "@/assets/images/cards/pottery.jpg";
import openStudioCard from "@/assets/images/cards/open-studio.jpg";
import kintsugiWide from "@/assets/images/workshops/kintsugi.jpg";
import cyanotypeWide from "@/assets/images/workshops/cyanotype.jpg";
import mosaicWide from "@/assets/images/workshops/mosaic.jpg";
import heroImage from "@/assets/images/hero/hero.jpg";
import kintsugiTable from "@/assets/images/cta/kintsugi-table.jpg";
import studioImage from "@/assets/images/studio/studio.jpg";
import gallery1 from "@/assets/images/gallery/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery/gallery-4.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5.jpg";

const session = (id: string, date: string, start: string, end: string, capacity: number, spotsLeft: number) => ({
  id,
  date,
  time: `${start} – ${end}`,
  startTime: start,
  endTime: end,
  capacity,
  spotsLeft,
});

export const workshops: Workshop[] = [
  {
    id: "ws-kintsugi",
    slug: "kintsugi",
    title: "Kintsugi Workshop",
    shortTitle: "Kintsugi",
    kicker: "Craft workshop",
    category: "Kintsugi",
    group: "Craft workshops",
    tagline: "Beauty in imperfection",
    intro:
      "Always wanted to repair a broken bowl the Japanese way? In this workshop you learn the philosophy behind kintsugi, then roll up your sleeves and mend your own ceramic piece with golden seams in our sunlit studio.",
    description:
      "Kintsugi is the Japanese art of repairing broken ceramics with gold, honouring the cracks as part of an object's story. We start with the history and the traditional urushi method, then work with a modern, food-safe resin technique so you can finish a piece in one afternoon. You will learn how to clean and fit the fragments, mix and apply the adhesive, dust the seams with gold powder and polish the result. Bring a broken piece that matters to you, or choose one from our shelves.",
    whatYouWillDo: [
      "Learn the story and philosophy behind kintsugi.",
      "Fit, glue and fill the cracks of your own ceramic piece.",
      "Apply gold powder and polish the seams.",
      "Take your repaired piece home the same day.",
    ],
    includes: ["Welcome tea & sweets", "All materials and gold powder", "A ceramic piece if you don't bring your own", "Apron to borrow", "Digital care guide"],
    duration: "approx. 3 hours",
    maxParticipants: 10,
    level: "All levels",
    price: 65,
    cardImage: kintsugiCard,
    heroImage: heroImage,
    gallery: [kintsugiTable, kintsugiWide, gallery1],
    sessions: [
      session("kin-1", "2026-10-17", "14:00", "17:00", 10, 6),
      session("kin-2", "2026-10-24", "10:00", "13:00", 10, 9),
      session("kin-3", "2026-11-07", "14:00", "17:00", 10, 0),
    ],
  },
  {
    id: "ws-cyanotype",
    slug: "cyanotype",
    title: "Cyanotype Workshop",
    shortTitle: "Cyanotype",
    kicker: "Craft workshop",
    category: "Cyanotype",
    group: "Craft workshops",
    tagline: "Create with light & nature",
    intro:
      "Cyanotype is one of the oldest photographic processes: deep Prussian-blue prints made with nothing but sunlight and water. Compose with leaves and flowers from our garden and go home with your own series of botanical prints.",
    description:
      "During this workshop you learn both the chemistry and the craft of cyanotype. We coat paper and fabric with the light-sensitive solution, compose with botanicals and found objects, expose in the sun (or under our UV lamp on cloudy days) and develop the prints in water. You will also experiment with toning to shift the blue towards sepia and violet.",
    whatYouWillDo: [
      "Coat your own paper and fabric with cyanotype solution.",
      "Compose with fresh botanicals and translucent objects.",
      "Expose, develop and tone your prints.",
      "Leave with a set of 4–6 finished prints.",
    ],
    includes: ["Welcome tea & sweets", "Pre-coated and self-coated papers", "Botanicals from the studio garden", "Apron to borrow", "Digital guide to continue at home"],
    duration: "approx. 3 hours",
    maxParticipants: 12,
    level: "Beginner",
    price: 60,
    cardImage: cyanotypeCard,
    heroImage: gallery2,
    gallery: [cyanotypeWide, gallery2, gallery5],
    sessions: [session("cya-1", "2026-10-24", "14:00", "17:00", 12, 8), session("cya-2", "2026-11-14", "14:00", "17:00", 12, 12)],
  },
  {
    id: "ws-mosaic",
    slug: "mosaic-art",
    title: "Mosaic Art Workshop",
    shortTitle: "Mosaic Art",
    kicker: "Craft workshop",
    category: "Mosaic Art",
    group: "Craft workshops",
    tagline: "Piece by piece",
    intro:
      "Inspired by Moroccan zellige and Mediterranean mosaics, this workshop introduces you to cutting, arranging and grouting ceramic and glass tesserae. Design your own pattern and build a decorative piece to take home.",
    description:
      "We begin with a short look at the history of zellige and the geometry behind it. Then you sketch your design, learn to nip tiles safely, lay out your pattern on a wooden base and grout it. Choose between a coaster set, a trivet or a small wall piece.",
    whatYouWillDo: [
      "Sketch a pattern inspired by traditional zellige.",
      "Cut and shape ceramic and glass tesserae.",
      "Lay, glue and grout your mosaic.",
      "Take your finished piece home.",
    ],
    includes: ["Welcome tea & sweets", "Tesserae in earthy tones", "Wooden base, adhesive and grout", "Safety glasses and apron", "Digital guide"],
    duration: "approx. 3 hours",
    maxParticipants: 8,
    level: "All levels",
    price: 70,
    cardImage: mosaicCard,
    heroImage: gallery4,
    gallery: [mosaicWide, gallery4, gallery3],
    sessions: [session("mos-1", "2026-10-31", "14:00", "17:00", 8, 5), session("mos-2", "2026-11-21", "10:00", "13:00", 8, 8)],
  },
  {
    id: "ws-ceramic-painting",
    slug: "ceramic-painting",
    title: "Ceramic Painting Workshop",
    shortTitle: "Ceramic Painting",
    kicker: "Ceramic workshop",
    category: "Ceramic Painting",
    group: "Ceramic workshops",
    tagline: "Colour your table",
    intro:
      "Pick a bisque-fired bowl, plate or mug from our shelves and paint it with underglaze colours and Moroccan-inspired patterns. We glaze and fire it for you, ready to collect two weeks later.",
    description:
      "A relaxed afternoon of painting on ceramics. You learn how underglazes behave, how to plan a pattern on a curved surface and how to use brushes, sponges and sgraffito tools. Your piece is glazed and fired in our kiln after the session.",
    whatYouWillDo: [
      "Choose a bisque-fired piece from the studio shelves.",
      "Learn underglaze, sgraffito and stamping techniques.",
      "Paint your own pattern.",
      "Collect your fired piece two weeks later.",
    ],
    includes: ["Welcome tea & sweets", "One bisque-fired piece", "Underglazes, brushes and tools", "Glazing and firing", "Apron to borrow"],
    duration: "approx. 2.5 hours",
    maxParticipants: 12,
    level: "Beginner",
    price: 55,
    cardImage: ceramicPaintingCard,
    heroImage: gallery1,
    gallery: [gallery1, gallery3, studioImage],
    sessions: [session("cer-1", "2026-10-18", "11:00", "13:30", 12, 7), session("cer-2", "2026-11-08", "11:00", "13:30", 12, 12)],
  },
  {
    id: "ws-pottery",
    slug: "hand-built-pottery",
    title: "Hand-built Pottery Workshop",
    shortTitle: "Hand-built Pottery",
    kicker: "Ceramic workshop",
    category: "Pottery",
    group: "Ceramic workshops",
    tagline: "Shaped by hand",
    intro:
      "No wheel needed. Using pinch, coil and slab techniques you shape a small vessel from stoneware clay, then decorate it with texture and slip. We fire and glaze it for you.",
    description:
      "Hand-building is the oldest way of making pottery and the most forgiving for beginners. You learn to wedge clay, build a pinch pot, add coils for height and finish the surface with stamps and slip. Pieces are dried, bisque-fired, glazed and fired again in the following weeks.",
    whatYouWillDo: [
      "Wedge and prepare stoneware clay.",
      "Build a vessel with pinch and coil techniques.",
      "Decorate with texture, stamps and slip.",
      "Collect your glazed piece three weeks later.",
    ],
    includes: ["Welcome tea & sweets", "Stoneware clay and tools", "Two firings and glazing", "Apron to borrow", "Digital guide"],
    duration: "approx. 3 hours",
    maxParticipants: 10,
    level: "Beginner",
    price: 75,
    cardImage: potteryCard,
    heroImage: gallery3,
    gallery: [gallery3, gallery1, studioImage],
    sessions: [session("pot-1", "2026-11-01", "14:00", "17:00", 10, 4)],
  },
  {
    id: "ws-open-studio",
    slug: "open-studio",
    title: "Open Studio Evening",
    shortTitle: "Open Studio",
    kicker: "Ceramic workshop",
    category: "Open Studio",
    group: "Ceramic workshops",
    tagline: "Make at your own pace",
    intro:
      "Already done a workshop with us? Come back for an open evening: a table, tools, clay or paint, tea and gentle guidance when you want it.",
    description:
      "Open Studio evenings are for returning makers who want time and space to continue a project or start a new one. A studio host is on hand for questions, glazing advice and kiln bookings.",
    whatYouWillDo: ["Continue a project or start something new.", "Use the studio's tools, glazes and kiln.", "Get advice from the studio host.", "Meet other makers."],
    includes: ["Tea & coffee", "Tools and glazes", "Kiln firing (per piece)", "Apron to borrow"],
    duration: "approx. 3 hours",
    maxParticipants: 12,
    level: "Intermediate",
    price: 35,
    cardImage: openStudioCard,
    heroImage: gallery5,
    gallery: [gallery5, studioImage, gallery1],
    sessions: [session("open-1", "2026-10-22", "18:30", "21:30", 12, 10), session("open-2", "2026-11-05", "18:30", "21:30", 12, 12)],
  },
];

export const workshopGroups: WorkshopGroup[] = ["Craft workshops", "Ceramic workshops"];

export const getWorkshopBySlug = (slug: string): Workshop | undefined => workshops.find((w) => w.slug === slug);

export const workshopsByGroup = (group: WorkshopGroup): Workshop[] => workshops.filter((w) => w.group === group);

export interface UpcomingSession {
  workshop: Workshop;
  session: Workshop["sessions"][number];
}

/** Every session across all workshops, soonest first. */
export const upcomingSessions = (): UpcomingSession[] =>
  workshops
    .flatMap((workshop) => workshop.sessions.map((session) => ({ workshop, session })))
    .sort((a, b) => `${a.session.date}${a.session.startTime}`.localeCompare(`${b.session.date}${b.session.startTime}`));
