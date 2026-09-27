export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Workshops", to: "/workshops" },
  { label: "The studio", to: "/about" },
  { label: "Private workshops", to: "/private-workshops" },
  { label: "Gallery", to: "/gallery" },
  { label: "About us", to: "/about" },
];

export const legalLinks: NavLink[] = [
  { label: "Terms & conditions", to: "/terms" },
  { label: "Privacy policy", to: "/privacy" },
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
