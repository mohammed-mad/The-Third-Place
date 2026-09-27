import type { Booking } from "@/types/workshop";
import { workshops } from "@/data/workshops";

/**
 * Thin data-access layer. Today it resolves from local mock data; swap the
 * bodies for `fetch` calls to a real booking API without touching the UI.
 */
export const api = {
  async listWorkshops() {
    return workshops;
  },
  async getWorkshop(slug: string) {
    return workshops.find((workshop) => workshop.slug === slug) ?? null;
  },
  async submitBooking(booking: Booking): Promise<{ bookingId: string; paymentUrl: string | null }> {
    // Placeholder: a backend would persist the booking and return a
    // payment-provider checkout URL (e.g. Stripe Checkout) here.
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { bookingId: booking.id, paymentUrl: null };
  },
};
