import type { Testimonial } from "@/types/workshop";
import saraAvatar from "@/assets/images/testimonials/sara.jpg";
import yassineAvatar from "@/assets/images/testimonials/yassine.jpg";
import linaAvatar from "@/assets/images/testimonials/lina.jpg";

export const testimonials: Testimonial[] = [
  {
    id: "t-sara",
    name: "Sara M.",
    rating: 5,
    quote:
      "Such a beautiful experience!\nThe atmosphere is warm and welcoming, and I learned so much. I can't wait to come back.",
    avatar: saraAvatar,
  },
  {
    id: "t-yassine",
    name: "Yassine K.",
    rating: 5,
    quote:
      "Amazing workshop and wonderful people. The studio is beautiful and the instructor was so patient and inspiring.",
    avatar: yassineAvatar,
  },
  {
    id: "t-lina",
    name: "Lina A.",
    rating: 5,
    quote:
      "A perfect way to disconnect and be creative. Highly recommend The Third Place to anyone looking for a unique experience.",
    avatar: linaAvatar,
  },
];
