import type { ReactNode } from "react";
import type { Workshop, WorkshopSession } from "@/types/workshop";
import { calculateTotal } from "@/lib/booking";
import { formatPrice, formatSessionDate } from "@/lib/format";

interface BookingSummaryProps {
  workshop: Workshop;
  session: WorkshopSession | null;
  participants: number;
  action?: ReactNode;
}

export default function BookingSummary({ workshop, session, participants, action }: BookingSummaryProps) {
  const total = calculateTotal(workshop.price, participants);
  return (
    <aside className="rounded-panel border border-line bg-white p-6 shadow-card lg:sticky lg:top-28 lg:p-8" aria-label="Booking summary">
      <p className="eyebrow text-clay">Your booking</p>
      <h2 className="mt-3 font-serif text-[26px] font-medium leading-tight text-ink">{workshop.title}</h2>
      <dl className="mt-5 space-y-3 border-t border-line pt-5 font-sans text-[14px]">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Date</dt>
          <dd className="text-right text-ink">{session ? formatSessionDate(session.date) : "Select a date"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Time</dt>
          <dd className="text-ink">{session ? session.time : "—"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Remaining spots</dt>
          <dd className={session ? "text-coral" : "text-ink"}>{session ? session.spotsLeft : "—"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Price per participant</dt>
          <dd className="text-ink">{formatPrice(workshop.price)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Participants</dt>
          <dd className="text-ink">{participants}</dd>
        </div>
      </dl>
      <div className="mt-5 flex items-baseline justify-between border-t border-line pt-5">
        <span className="font-sans text-[14px] font-semibold uppercase tracking-[0.12em] text-ink">Total</span>
        <span className="font-serif text-[32px] font-medium leading-none text-ink">{formatPrice(total)}</span>
      </div>
      {action && <div className="mt-6">{action}</div>}
    </aside>
  );
}
