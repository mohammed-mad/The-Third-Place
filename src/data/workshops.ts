import type { Workshop, WorkshopGroup, WorkshopSource } from "@/types/workshop";
import type { Lang } from "@/i18n/translations";
import kintsugiCard from "@/assets/images/cards/kintsugi.jpg";
import cyanotypeCard from "@/assets/images/cards/cyanotype.jpg";
import mosaicCard from "@/assets/images/cards/mosaic.jpg";
import ceramicPaintingCard from "@/assets/images/cards/ceramic-painting.jpg";
import potteryCard from "@/assets/images/cards/pottery.jpg";
import openStudioCard from "@/assets/images/cards/open-studio.jpg";
import kintsugiWide from "@/assets/images/workshops/kintsugi.jpg";
import cyanotypeWide from "@/assets/images/workshops/cyanotype.jpg";
import mosaicWide from "@/assets/images/workshops/mosaic.jpg";
import kintsugiTable from "@/assets/images/cta/kintsugi-table.jpg";
import heroImage from "@/assets/images/hero/hero.jpg";
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

const craft = { en: "Craft workshop", fr: "Atelier d'artisanat" };
const ceramic = { en: "Ceramic workshop", fr: "Atelier de céramique" };
const threeHours = { en: "approx. 3 hours", fr: "env. 3 heures" };
const allLevels = { en: "All levels", fr: "Tous niveaux" };
const beginner = { en: "Beginner", fr: "Débutant" };
const teaAndSweets = { en: "Welcome tea & sweets", fr: "Thé et douceurs de bienvenue" };
const apron = { en: "Apron to borrow", fr: "Tablier prêté" };

export const workshopSources: WorkshopSource[] = [
  {
    id: "ws-kintsugi",
    slug: "kintsugi",
    category: "Kintsugi",
    group: "craft",
    kicker: craft,
    title: { en: "Kintsugi Workshop", fr: "Atelier Kintsugi" },
    shortTitle: { en: "Kintsugi", fr: "Kintsugi" },
    tagline: { en: "Beauty in imperfection", fr: "La beauté de l'imperfection" },
    intro: {
      en: "Always wanted to repair a broken bowl the Japanese way? In this workshop you learn the philosophy behind kintsugi, then roll up your sleeves and mend your own ceramic piece with golden seams in our sunlit studio.",
      fr: "Vous avez toujours voulu réparer un bol cassé à la manière japonaise ? Dans cet atelier, vous découvrez la philosophie du kintsugi, puis vous retroussez vos manches pour réparer votre propre pièce de céramique avec des jointures dorées, dans notre atelier baigné de lumière.",
    },
    description: {
      en: "Kintsugi is the Japanese art of repairing broken ceramics with gold, honouring the cracks as part of an object's story. We start with the history and the traditional urushi method, then work with a modern, food-safe resin technique so you can finish a piece in one afternoon. You will learn how to clean and fit the fragments, mix and apply the adhesive, dust the seams with gold powder and polish the result. Bring a broken piece that matters to you, or choose one from our shelves.",
      fr: "Le kintsugi est l'art japonais de réparer les céramiques brisées avec de l'or, en honorant les fissures comme une partie de l'histoire de l'objet. Nous commençons par l'histoire et la méthode traditionnelle à l'urushi, puis nous travaillons avec une technique moderne à la résine alimentaire pour terminer une pièce en un après-midi. Vous apprendrez à nettoyer et assembler les fragments, à préparer et appliquer l'adhésif, à saupoudrer les jointures de poudre d'or et à polir le résultat. Apportez une pièce cassée qui compte pour vous, ou choisissez-en une sur nos étagères.",
    },
    whatYouWillDo: {
      en: ["Learn the story and philosophy behind kintsugi.", "Fit, glue and fill the cracks of your own ceramic piece.", "Apply gold powder and polish the seams.", "Take your repaired piece home the same day."],
      fr: ["Découvrir l'histoire et la philosophie du kintsugi.", "Assembler, coller et combler les fissures de votre pièce.", "Appliquer la poudre d'or et polir les jointures.", "Repartir avec votre pièce réparée le jour même."],
    },
    includes: {
      en: [teaAndSweets.en, "All materials and gold powder", "A ceramic piece if you don't bring your own", apron.en, "Digital care guide"],
      fr: [teaAndSweets.fr, "Tout le matériel et la poudre d'or", "Une pièce de céramique si vous n'apportez pas la vôtre", apron.fr, "Guide d'entretien numérique"],
    },
    duration: threeHours,
    maxParticipants: 10,
    level: allLevels,
    price: 65,
    cardImage: kintsugiCard,
    heroImage: heroImage,
    gallery: [kintsugiTable, kintsugiWide, gallery1],
    sessions: [session("kin-1", "2026-10-17", "14:00", "17:00", 10, 6), session("kin-2", "2026-10-24", "10:00", "13:00", 10, 9), session("kin-3", "2026-11-07", "14:00", "17:00", 10, 0)],
  },
  {
    id: "ws-cyanotype",
    slug: "cyanotype",
    category: "Cyanotype",
    group: "craft",
    kicker: craft,
    title: { en: "Cyanotype Workshop", fr: "Atelier Cyanotype" },
    shortTitle: { en: "Cyanotype", fr: "Cyanotype" },
    tagline: { en: "Create with light & nature", fr: "Créer avec la lumière et la nature" },
    intro: {
      en: "Cyanotype is one of the oldest photographic processes: deep Prussian-blue prints made with nothing but sunlight and water. Compose with leaves and flowers from our garden and go home with your own series of botanical prints.",
      fr: "Le cyanotype est l'un des plus anciens procédés photographiques : des tirages d'un bleu de Prusse profond, réalisés uniquement avec la lumière du soleil et de l'eau. Composez avec les feuilles et les fleurs de notre jardin et repartez avec votre propre série de tirages botaniques.",
    },
    description: {
      en: "During this workshop you learn both the chemistry and the craft of cyanotype. We coat paper and fabric with the light-sensitive solution, compose with botanicals and found objects, expose in the sun (or under our UV lamp on cloudy days) and develop the prints in water. You will also experiment with toning to shift the blue towards sepia and violet.",
      fr: "Pendant cet atelier, vous apprenez à la fois la chimie et le geste du cyanotype. Nous enduisons papier et tissu de la solution photosensible, composons avec des végétaux et des objets trouvés, exposons au soleil (ou sous notre lampe UV les jours nuageux) et révélons les tirages dans l'eau. Vous expérimenterez aussi le virage pour faire glisser le bleu vers le sépia et le violet.",
    },
    whatYouWillDo: {
      en: ["Coat your own paper and fabric with cyanotype solution.", "Compose with fresh botanicals and translucent objects.", "Expose, develop and tone your prints.", "Leave with a set of 4–6 finished prints."],
      fr: ["Enduire votre papier et votre tissu de solution cyanotype.", "Composer avec des végétaux frais et des objets translucides.", "Exposer, révéler et virer vos tirages.", "Repartir avec une série de 4 à 6 tirages terminés."],
    },
    includes: {
      en: [teaAndSweets.en, "Pre-coated and self-coated papers", "Botanicals from the studio garden", apron.en, "Digital guide to continue at home"],
      fr: [teaAndSweets.fr, "Papiers pré-enduits et à enduire soi-même", "Végétaux du jardin de l'atelier", apron.fr, "Guide numérique pour continuer chez vous"],
    },
    duration: threeHours,
    maxParticipants: 12,
    level: beginner,
    price: 60,
    cardImage: cyanotypeCard,
    heroImage: gallery2,
    gallery: [cyanotypeWide, gallery2, gallery5],
    sessions: [session("cya-1", "2026-10-24", "14:00", "17:00", 12, 8), session("cya-2", "2026-11-14", "14:00", "17:00", 12, 12)],
  },
  {
    id: "ws-mosaic",
    slug: "mosaic-art",
    category: "Mosaic Art",
    group: "craft",
    kicker: craft,
    title: { en: "Mosaic Art Workshop", fr: "Atelier Mosaïque" },
    shortTitle: { en: "Mosaic Art", fr: "Mosaïque" },
    tagline: { en: "Piece by piece", fr: "Pièce par pièce" },
    intro: {
      en: "Inspired by Moroccan zellige and Mediterranean mosaics, this workshop introduces you to cutting, arranging and grouting ceramic and glass tesserae. Design your own pattern and build a decorative piece to take home.",
      fr: "Inspiré du zellige marocain et des mosaïques méditerranéennes, cet atelier vous initie à la coupe, à la composition et au jointoiement de tesselles de céramique et de verre. Dessinez votre propre motif et réalisez une pièce décorative à emporter.",
    },
    description: {
      en: "We begin with a short look at the history of zellige and the geometry behind it. Then you sketch your design, learn to nip tiles safely, lay out your pattern on a wooden base and grout it. Choose between a coaster set, a trivet or a small wall piece.",
      fr: "Nous commençons par un bref regard sur l'histoire du zellige et la géométrie qui le sous-tend. Ensuite, vous esquissez votre motif, apprenez à couper les carreaux en toute sécurité, posez votre composition sur un support en bois et la jointoyez. Choisissez entre un set de dessous-de-verre, un dessous-de-plat ou une petite pièce murale.",
    },
    whatYouWillDo: {
      en: ["Sketch a pattern inspired by traditional zellige.", "Cut and shape ceramic and glass tesserae.", "Lay, glue and grout your mosaic.", "Take your finished piece home."],
      fr: ["Esquisser un motif inspiré du zellige traditionnel.", "Couper et façonner des tesselles de céramique et de verre.", "Poser, coller et jointoyer votre mosaïque.", "Repartir avec votre pièce terminée."],
    },
    includes: {
      en: [teaAndSweets.en, "Tesserae in earthy tones", "Wooden base, adhesive and grout", "Safety glasses and apron", "Digital guide"],
      fr: [teaAndSweets.fr, "Tesselles aux tons terreux", "Support en bois, colle et joint", "Lunettes de protection et tablier", "Guide numérique"],
    },
    duration: threeHours,
    maxParticipants: 8,
    level: allLevels,
    price: 70,
    cardImage: mosaicCard,
    heroImage: gallery4,
    gallery: [mosaicWide, gallery4, gallery3],
    sessions: [session("mos-1", "2026-10-31", "14:00", "17:00", 8, 5), session("mos-2", "2026-11-21", "10:00", "13:00", 8, 8)],
  },
  {
    id: "ws-ceramic-painting",
    slug: "ceramic-painting",
    category: "Ceramic Painting",
    group: "ceramic",
    kicker: ceramic,
    title: { en: "Ceramic Painting Workshop", fr: "Atelier Peinture sur céramique" },
    shortTitle: { en: "Ceramic Painting", fr: "Peinture sur céramique" },
    tagline: { en: "Colour your table", fr: "Mettez de la couleur sur votre table" },
    intro: {
      en: "Pick a bisque-fired bowl, plate or mug from our shelves and paint it with underglaze colours and Moroccan-inspired patterns. We glaze and fire it for you, ready to collect two weeks later.",
      fr: "Choisissez un bol, une assiette ou un mug biscuité sur nos étagères et peignez-le avec des engobes colorés et des motifs d'inspiration marocaine. Nous l'émaillons et le cuisons pour vous : il sera prêt deux semaines plus tard.",
    },
    description: {
      en: "A relaxed afternoon of painting on ceramics. You learn how underglazes behave, how to plan a pattern on a curved surface and how to use brushes, sponges and sgraffito tools. Your piece is glazed and fired in our kiln after the session.",
      fr: "Un après-midi détendu de peinture sur céramique. Vous apprenez comment se comportent les engobes, comment planifier un motif sur une surface courbe et comment utiliser pinceaux, éponges et outils de sgraffite. Votre pièce est émaillée et cuite dans notre four après la séance.",
    },
    whatYouWillDo: {
      en: ["Choose a bisque-fired piece from the studio shelves.", "Learn underglaze, sgraffito and stamping techniques.", "Paint your own pattern.", "Collect your fired piece two weeks later."],
      fr: ["Choisir une pièce biscuitée sur les étagères de l'atelier.", "Apprendre les techniques d'engobe, de sgraffite et de tampon.", "Peindre votre propre motif.", "Récupérer votre pièce cuite deux semaines plus tard."],
    },
    includes: {
      en: [teaAndSweets.en, "One bisque-fired piece", "Underglazes, brushes and tools", "Glazing and firing", apron.en],
      fr: [teaAndSweets.fr, "Une pièce biscuitée", "Engobes, pinceaux et outils", "Émaillage et cuisson", apron.fr],
    },
    duration: { en: "approx. 2.5 hours", fr: "env. 2 h 30" },
    maxParticipants: 12,
    level: beginner,
    price: 55,
    cardImage: ceramicPaintingCard,
    heroImage: gallery1,
    gallery: [gallery1, gallery3, studioImage],
    sessions: [session("cer-1", "2026-10-18", "11:00", "13:30", 12, 7), session("cer-2", "2026-11-08", "11:00", "13:30", 12, 12)],
  },
  {
    id: "ws-pottery",
    slug: "hand-built-pottery",
    category: "Pottery",
    group: "ceramic",
    kicker: ceramic,
    title: { en: "Hand-built Pottery Workshop", fr: "Atelier Poterie façonnée à la main" },
    shortTitle: { en: "Hand-built Pottery", fr: "Poterie à la main" },
    tagline: { en: "Shaped by hand", fr: "Façonné à la main" },
    intro: {
      en: "No wheel needed. Using pinch, coil and slab techniques you shape a small vessel from stoneware clay, then decorate it with texture and slip. We fire and glaze it for you.",
      fr: "Pas besoin de tour. Avec les techniques du pincé, du colombin et de la plaque, vous façonnez un petit contenant en grès, puis vous le décorez avec des textures et de l'engobe. Nous le cuisons et l'émaillons pour vous.",
    },
    description: {
      en: "Hand-building is the oldest way of making pottery and the most forgiving for beginners. You learn to wedge clay, build a pinch pot, add coils for height and finish the surface with stamps and slip. Pieces are dried, bisque-fired, glazed and fired again in the following weeks.",
      fr: "Le modelage est la plus ancienne façon de faire de la poterie et la plus indulgente pour les débutants. Vous apprenez à battre la terre, à monter un bol pincé, à ajouter des colombins pour gagner en hauteur et à finir la surface avec des tampons et de l'engobe. Les pièces sont séchées, biscuitées, émaillées et recuites dans les semaines suivantes.",
    },
    whatYouWillDo: {
      en: ["Wedge and prepare stoneware clay.", "Build a vessel with pinch and coil techniques.", "Decorate with texture, stamps and slip.", "Collect your glazed piece three weeks later."],
      fr: ["Battre et préparer le grès.", "Monter un contenant avec les techniques du pincé et du colombin.", "Décorer avec des textures, des tampons et de l'engobe.", "Récupérer votre pièce émaillée trois semaines plus tard."],
    },
    includes: {
      en: [teaAndSweets.en, "Stoneware clay and tools", "Two firings and glazing", apron.en, "Digital guide"],
      fr: [teaAndSweets.fr, "Grès et outils", "Deux cuissons et émaillage", apron.fr, "Guide numérique"],
    },
    duration: threeHours,
    maxParticipants: 10,
    level: beginner,
    price: 75,
    cardImage: potteryCard,
    heroImage: gallery3,
    gallery: [gallery3, gallery1, studioImage],
    sessions: [session("pot-1", "2026-11-01", "14:00", "17:00", 10, 4)],
  },
  {
    id: "ws-open-studio",
    slug: "open-studio",
    category: "Open Studio",
    group: "ceramic",
    kicker: ceramic,
    title: { en: "Open Studio Evening", fr: "Soirée Atelier libre" },
    shortTitle: { en: "Open Studio", fr: "Atelier libre" },
    tagline: { en: "Make at your own pace", fr: "Créer à votre rythme" },
    intro: {
      en: "Already done a workshop with us? Come back for an open evening: a table, tools, clay or paint, tea and gentle guidance when you want it.",
      fr: "Vous avez déjà suivi un atelier chez nous ? Revenez pour une soirée libre : une table, des outils, de la terre ou de la peinture, du thé et un accompagnement discret quand vous le souhaitez.",
    },
    description: {
      en: "Open Studio evenings are for returning makers who want time and space to continue a project or start a new one. A studio host is on hand for questions, glazing advice and kiln bookings.",
      fr: "Les soirées Atelier libre sont destinées aux habitués qui veulent du temps et de l'espace pour poursuivre un projet ou en commencer un nouveau. Un hôte de l'atelier est présent pour répondre aux questions, conseiller sur l'émaillage et réserver le four.",
    },
    whatYouWillDo: {
      en: ["Continue a project or start something new.", "Use the studio's tools, glazes and kiln.", "Get advice from the studio host.", "Meet other makers."],
      fr: ["Poursuivre un projet ou en commencer un nouveau.", "Utiliser les outils, les émaux et le four de l'atelier.", "Profiter des conseils de l'hôte de l'atelier.", "Rencontrer d'autres créateurs."],
    },
    includes: {
      en: ["Tea & coffee", "Tools and glazes", "Kiln firing (per piece)", apron.en],
      fr: ["Thé et café", "Outils et émaux", "Cuisson au four (par pièce)", apron.fr],
    },
    duration: threeHours,
    maxParticipants: 12,
    level: { en: "Intermediate", fr: "Intermédiaire" },
    price: 35,
    cardImage: openStudioCard,
    heroImage: gallery5,
    gallery: [gallery5, studioImage, gallery1],
    sessions: [session("open-1", "2026-10-22", "18:30", "21:30", 12, 10), session("open-2", "2026-11-05", "18:30", "21:30", 12, 12)],
  },
];

export const workshopGroups: WorkshopGroup[] = ["craft", "ceramic"];

export const workshopGroupLabels: Record<WorkshopGroup, Record<Lang, string>> = {
  craft: { en: "Craft workshops", fr: "Ateliers d'artisanat" },
  ceramic: { en: "Ceramic workshops", fr: "Ateliers de céramique" },
};

/** Resolve a workshop's text fields for one language. */
export const localizeWorkshop = (source: WorkshopSource, lang: Lang): Workshop => ({
  ...source,
  title: source.title[lang],
  shortTitle: source.shortTitle[lang],
  kicker: source.kicker[lang],
  tagline: source.tagline[lang],
  intro: source.intro[lang],
  description: source.description[lang],
  duration: source.duration[lang],
  level: source.level[lang] as Workshop["level"],
  whatYouWillDo: source.whatYouWillDo[lang],
  includes: source.includes[lang],
});

export const getWorkshops = (lang: Lang): Workshop[] => workshopSources.map((source) => localizeWorkshop(source, lang));

export const getWorkshopBySlug = (slug: string, lang: Lang): Workshop | undefined => {
  const source = workshopSources.find((w) => w.slug === slug);
  return source ? localizeWorkshop(source, lang) : undefined;
};

export interface UpcomingSession {
  workshop: Workshop;
  session: Workshop["sessions"][number];
}

/** Every session across all workshops, soonest first. */
export const getUpcomingSessions = (lang: Lang): UpcomingSession[] =>
  getWorkshops(lang)
    .flatMap((workshop) => workshop.sessions.map((session) => ({ workshop, session })))
    .sort((a, b) => `${a.session.date}${a.session.startTime}`.localeCompare(`${b.session.date}${b.session.startTime}`));
