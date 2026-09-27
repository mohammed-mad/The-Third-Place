import type { Booking, BookingCustomer, Workshop, WorkshopSession } from "@/types/workshop";

export const MAX_PARTICIPANTS = 8;

export interface BookingDraft {
  workshop: Workshop;
  session: WorkshopSession;
  participants: number;
}

export const calculateTotal = (pricePerParticipant: number, participants: number): number =>
  pricePerParticipant * participants;

export const clampParticipants = (value: number, session: WorkshopSession | undefined): number => {
  const max = Math.min(MAX_PARTICIPANTS, session?.spotsLeft ?? MAX_PARTICIPANTS);
  return Math.min(Math.max(1, value), Math.max(1, max));
};

export const createDraftBooking = ({ workshop, session, participants }: BookingDraft): Booking => ({
  id: `bk_${Date.now().toString(36)}`,
  workshopId: workshop.id,
  sessionId: session.id,
  participants,
  pricePerParticipant: workshop.price,
  total: calculateTotal(workshop.price, participants),
  status: "draft",
  createdAt: new Date().toISOString(),
});

export const attachCustomer = (booking: Booking, customer: BookingCustomer): Booking => ({
  ...booking,
  customer,
  status: "pending_payment",
});
