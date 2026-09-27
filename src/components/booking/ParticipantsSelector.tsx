import { Minus, Plus } from "lucide-react";

interface ParticipantsSelectorProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

export default function ParticipantsSelector({ value, max, onChange }: ParticipantsSelectorProps) {
  return (
    <div>
      <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">Participants</p>
      <div className="mt-4 inline-flex items-center rounded-pill border border-line bg-white p-1">
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= 1}
          className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-forest transition hover:bg-cream disabled:opacity-40"
          aria-label="Remove a participant"
        >
          <Minus className="h-4 w-4" />
        </button>
        <output className="w-12 text-center font-sans text-[16px] font-medium text-ink" aria-live="polite">
          {value}
        </output>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-forest transition hover:bg-cream disabled:opacity-40"
          aria-label="Add a participant"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-2 font-sans text-[12.5px] text-ink-muted">Up to {max} participants for this session.</p>
    </div>
  );
}
