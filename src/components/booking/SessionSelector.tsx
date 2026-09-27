import type { WorkshopSession } from "@/types/workshop";
import { formatSessionDate } from "@/lib/format";

interface SessionSelectorProps {
  sessions: WorkshopSession[];
  selectedId: string | null;
  onSelect: (session: WorkshopSession) => void;
}

/** Date + time picker rendered as a list of available sessions. */
export default function SessionSelector({ sessions, selectedId, onSelect }: SessionSelectorProps) {
  return (
    <fieldset>
      <legend className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">Choose a date & time</legend>
      <ul className="mt-4 space-y-3">
        {sessions.map((session) => {
          const soldOut = session.spotsLeft === 0;
          const selected = session.id === selectedId;
          return (
            <li key={session.id}>
              <label
                className={[
                  "flex cursor-pointer items-center justify-between gap-4 rounded-card border px-5 py-4 transition duration-300 ease-out",
                  selected ? "border-forest bg-forest/5 shadow-card" : "border-line bg-white hover:border-forest/50",
                  soldOut ? "cursor-not-allowed opacity-50" : "",
                ].join(" ")}
              >
                <span className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="session"
                    value={session.id}
                    checked={selected}
                    disabled={soldOut}
                    onChange={() => onSelect(session)}
                    className="h-4 w-4 accent-forest"
                  />
                  <span>
                    <span className="block font-sans text-[15px] font-medium text-ink">{formatSessionDate(session.date)}</span>
                    <span className="block font-sans text-[13px] text-ink-muted">{session.time}</span>
                  </span>
                </span>
                <span className={["font-sans text-[12.5px]", soldOut ? "text-ink-muted" : "text-coral"].join(" ")}>
                  {soldOut ? "Sold out" : `${session.spotsLeft} spots left`}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
