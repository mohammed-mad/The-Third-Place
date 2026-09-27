export type WorkshopCategory = "Kintsugi" | "Cyanotype" | "Mosaic Art" | "Ceramic Painting" | "Pottery" | "Open Studio";
export type WorkshopGroup = "Craft workshops" | "Ceramic workshops";

export interface WorkshopSession {
  id: string;
  /** ISO date, e.g. "2026-10-17" */
  date: string;
  /** Display time range, e.g. "14:00 – 17:00" */
  time: string;
  startTime: string;
  endTime: string;
  capacity: number;
  spotsLeft: number;
}

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  /** Short display title used on cards, e.g. "Kintsugi" */
  shortTitle: string;
  /** Handwritten label above the title, e.g. "Craft workshop" */
  kicker: string;
  category: WorkshopCategory;
  group: WorkshopGroup;
  tagline: string;
  intro: string;
  description: string;
  whatYouWillDo: string[];
  includes: string[];
  duration: string;
  maxParticipants: number;
  level: "Beginner" | "All levels" | "Intermediate";
  /** Price per participant in EUR */
  price: number;
  cardImage: string;
  heroImage: string;
  gallery: string[];
  sessions: WorkshopSession[];
}

export type BookingStatus = "draft" | "pending_payment" | "confirmed";

export interface Booking {
  id: string;
  workshopId: string;
  sessionId: string;
  participants: number;
  pricePerParticipant: number;
  total: number;
  status: BookingStatus;
  customer?: BookingCustomer;
  createdAt: string;
}

export interface BookingCustomer {
  fullName: string;
  email: string;
  phone?: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
  /** Relative date label, e.g. "2 weeks ago" */
  when: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  image: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
