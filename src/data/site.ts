import type { Translation } from "@/i18n/translations";

export interface NavLink {
  label: string;
  to: string;
}

/** Primary navigation, labelled in the active language. */
export const getNavLinks = (t: Translation): NavLink[] => [
  { label: t.nav.workshops, to: "/workshops" },
  { label: t.nav.studio, to: "/about" },
  { label: t.nav.privateWorkshops, to: "/private-workshops" },
  { label: t.nav.gallery, to: "/gallery" },
  { label: t.nav.about, to: "/about" },
];

export const getLegalLinks = (t: Translation): NavLink[] => [
  { label: t.footer.terms, to: "/terms" },
  { label: t.footer.privacy, to: "/privacy" },
];

export const site = {
  name: "The Third Place",
  tagline: "A creative workshop studio in Casablanca",
  addressLines: ["Boulevard d'Anfa 12", "20050 Casablanca, Morocco"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Boulevard+d'Anfa+12+Casablanca",
  email: "hello@thethirdplace.ma",
  phoneDisplay: "+212 600 000 000",
  /** International number without "+" or spaces, used for wa.me links */
  whatsappNumber: "212600000000",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  googleReviews: {
    rating: "5.0",
    count: 86,
    url: "https://www.google.com/maps",
  },
};
