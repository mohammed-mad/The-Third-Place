export type WorkshopCategory = "Kintsugi" | "Cyanotype" | "Mosaic Art";

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
  category: WorkshopCategory;
  tagline: string;
  /** Display date of the next session, e.g. "Saturday, 17 October" */
  date: string;
  /** Display time of the next session */
  time: string;
  spotsLeft: number;
  /** Price per participant in EUR */
  price: number;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
  level: "Beginner" | "All levels" | "Intermediate";
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
  avatar: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}
