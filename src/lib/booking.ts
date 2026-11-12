import type { Booking, BookingCustomer, Workshop, WorkshopSession } from "@/types/workshop";

export interface BookingDraft {
  workshop: Workshop;
  session: WorkshopSession;
  participants: number;
}

export const calculateTotal = (pricePerParticipant: number, participants: number): number => pricePerParticipant * participants;

export const maxParticipantsFor = (workshop: Workshop, session: WorkshopSession | null | undefined): number =>
  Math.max(1, Math.min(workshop.maxParticipants, session?.spotsLeft ?? workshop.maxParticipants));

export const clampParticipants = (value: number, workshop: Workshop, session: WorkshopSession | null | undefined): number =>
  Math.min(Math.max(1, Math.floor(value) || 1), maxParticipantsFor(workshop, session));

export const firstAvailableSession = (workshop: Workshop): WorkshopSession | null =>
  workshop.sessions.find((session) => session.spotsLeft > 0) ?? null;

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

export const attachCustomer = (booking: Booking, customer: BookingCustomer): Booking => ({ ...booking, customer, status: "pending_payment" });
