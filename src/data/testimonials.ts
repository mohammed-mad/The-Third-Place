import type { TestimonialSource } from "@/types/workshop";
import saraAvatar from "@/assets/images/testimonials/sara.jpg";
import yassineAvatar from "@/assets/images/testimonials/yassine.jpg";
import linaAvatar from "@/assets/images/testimonials/lina.jpg";

export const testimonialSources: TestimonialSource[] = [
  {
    id: "t-sara",
    name: "Sara M.",
    rating: 5,
    avatar: saraAvatar,
    when: { en: "1 week ago", fr: "il y a 1 semaine" },
    quote: {
      en: "Such a beautiful experience! The atmosphere is warm and welcoming, and I learned so much. I can't wait to come back.",
      fr: "Une expérience magnifique ! L'ambiance est chaleureuse et accueillante, et j'ai tellement appris. J'ai hâte de revenir.",
    },
  },
  {
    id: "t-yassine",
    name: "Yassine K.",
    rating: 5,
    avatar: yassineAvatar,
    when: { en: "2 weeks ago", fr: "il y a 2 semaines" },
    quote: {
      en: "Amazing workshop and wonderful people. The studio is beautiful and the instructor was so patient and inspiring.",
      fr: "Un atelier incroyable et des gens formidables. L'atelier est magnifique et l'animatrice a été d'une patience et d'une inspiration rares.",
    },
  },
  {
    id: "t-lina",
    name: "Lina A.",
    rating: 5,
    avatar: linaAvatar,
    when: { en: "3 weeks ago", fr: "il y a 3 semaines" },
    quote: {
      en: "A perfect way to disconnect and be creative. Highly recommend The Third Place to anyone looking for a unique experience.",
      fr: "Le moyen parfait de déconnecter et de créer. Je recommande vivement The Third Place à tous ceux qui cherchent une expérience unique.",
    },
  },
  {
    id: "t-omar",
    name: "Omar B.",
    rating: 5,
    when: { en: "1 month ago", fr: "il y a 1 mois" },
    quote: {
      en: "We booked the mosaic workshop for our team and everyone left with a piece they were proud of. Great host, great tea.",
      fr: "Nous avons réservé l'atelier mosaïque pour notre équipe et chacun est reparti avec une pièce dont il était fier. Super hôte, super thé.",
    },
  },
];
