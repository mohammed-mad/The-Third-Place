import type { Testimonial } from "@/types/workshop";
import saraAvatar from "@/assets/images/testimonials/sara.jpg";
import yassineAvatar from "@/assets/images/testimonials/yassine.jpg";
import linaAvatar from "@/assets/images/testimonials/lina.jpg";

export const testimonials: Testimonial[] = [
  { id: "t-sara", name: "Sara M.", rating: 5, when: "1 week ago", avatar: saraAvatar, quote: "Such a beautiful experience! The atmosphere is warm and welcoming, and I learned so much. I can't wait to come back." },
  { id: "t-yassine", name: "Yassine K.", rating: 5, when: "2 weeks ago", avatar: yassineAvatar, quote: "Amazing workshop and wonderful people. The studio is beautiful and the instructor was so patient and inspiring." },
  { id: "t-lina", name: "Lina A.", rating: 5, when: "3 weeks ago", avatar: linaAvatar, quote: "A perfect way to disconnect and be creative. Highly recommend The Third Place to anyone looking for a unique experience." },
  { id: "t-omar", name: "Omar B.", rating: 5, when: "1 month ago", quote: "We booked the mosaic workshop for our team and everyone left with a piece they were proud of. Great host, great tea." },
];
