export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Workshops", to: "/workshops" },
  { label: "Our Studio", to: "/about" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

export const siteContact = {
  address: "Casablanca, Morocco",
  email: "hello@thethirdplace.ma",
  phone: "+212 600 000 000",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
  },
};
