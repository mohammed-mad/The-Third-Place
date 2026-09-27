import { useState } from "react";
import { CalendarPlus, Download, MessageCircle, Minus, Plus } from "lucide-react";
import type { Workshop, WorkshopSession } from "@/types/workshop";
import Button from "@/components/ui/Button";
import { clampParticipants, firstAvailableSession, maxParticipantsFor } from "@/lib/booking";
import { buildGoogleCalendarUrl, buildWhatsAppUrl, downloadIcs } from "@/lib/booking-links";
import { formatPrice, formatShortDate } from "@/lib/format";
import { useLanguage } from "@/i18n/LanguageContext";

interface BookingPanelProps {
  workshop: Workshop;
  initialSessionId?: string | null;
  initialParticipants?: number;
  title?: string;
}

/**
 * Session picker + participant stepper that hands off to WhatsApp for the
 * actual reservation, with "add to calendar" links for the chosen session.
 */
export default function BookingPanel({ workshop, initialSessionId = null, initialParticipants = 1, title }: BookingPanelProps) {
  const { t, lang, locale } = useLanguage();
  const initial = workshop.sessions.find((s) => s.id === initialSessionId && s.spotsLeft > 0) ?? firstAvailableSession(workshop);
  const [session, setSession] = useState<WorkshopSession | null>(initial);
  const [participants, setParticipants] = useState(() => clampParticipants(initialParticipants, workshop, initial));
  const [name, setName] = useState("");

  const max = maxParticipantsFor(workshop, session);
  const total = workshop.price * participants;
  const request = session ? { workshop, session, participants, name, lang } : null;

  const choose = (next: WorkshopSession) => {
    setSession(next);
    setParticipants((current) => clampParticipants(current, workshop, next));
  };

  return (
    <div className="bg-white p-6 shadow-float lg:p-9">
      <h2 className="font-sans text-h3 text-green">{title ?? t.booking.title}</h2>

      <fieldset className="mt-5">
        <legend className="font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-tomato">{t.booking.chooseDate}</legend>
        {workshop.sessions.length === 0 ? (
          <p className="mt-3 bg-beige-dark p-4 font-sans text-[15px] leading-[24px] text-green-olive">{t.booking.noDates}</p>
        ) : (
          <ul className="mt-3 divide-y divide-green/10 border-y border-green/10">
            {workshop.sessions.map((item) => {
              const full = item.spotsLeft === 0;
              const selected = session?.id === item.id;
              return (
                <li key={item.id}>
                  <label className={["flex cursor-pointer items-center justify-between gap-3 py-3", full ? "cursor-not-allowed opacity-50" : ""].join(" ")}>
                    <span className="flex items-center gap-3">
                      <input type="radio" name={`session-${workshop.id}`} checked={selected} disabled={full} onChange={() => choose(item)} className="h-4 w-4 accent-tomato" />
                      <span className="font-sans text-[15px] text-green">
                        <span className="font-bold">{formatShortDate(item.date, locale)}</span> · {item.time}
                      </span>
                    </span>
                    <span className={["rounded-pill px-[10px] py-[2px] font-sans text-[11px] font-bold uppercase text-white", full ? "bg-tomato" : "bg-orange text-ink"].join(" ")}>
                      {full ? t.common.full : t.common.left(item.spotsLeft)}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </fieldset>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-tomato">{t.booking.howMany}</p>
          <div className="mt-2 inline-flex items-center rounded-pill border border-green/20">
            <button type="button" onClick={() => setParticipants((v) => clampParticipants(v - 1, workshop, session))} disabled={participants <= 1} className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-green transition hover:bg-beige-dark disabled:opacity-40" aria-label={t.booking.removeParticipant}>
              <Minus className="h-4 w-4" />
            </button>
            <output className="w-10 text-center font-sans text-[16px] font-bold text-green" aria-live="polite">
              {participants}
            </output>
            <button type="button" onClick={() => setParticipants((v) => clampParticipants(v + 1, workshop, session))} disabled={participants >= max} className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-green transition hover:bg-beige-dark disabled:opacity-40" aria-label={t.booking.addParticipant}>
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="text-right">
          <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-tomato">{t.booking.total}</p>
          <p className="font-sans text-[26px] font-extrabold leading-tight text-green">{formatPrice(total)}</p>
          <p className="font-sans text-[12px] text-green-olive">
            {formatPrice(workshop.price)} {t.common.perPerson} · {session ? t.common.spotsLeft(session.spotsLeft) : t.booking.selectDate}
          </p>
        </div>
      </div>

      <label className="mt-5 block">
        <span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-tomato">{t.booking.yourName}</span>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.booking.namePlaceholder} className="mt-2 w-full border-b border-green/20 bg-transparent pb-2 font-sans text-[15px] text-green placeholder:text-green/40 focus:border-tomato focus:outline-none" />
      </label>

      <div className="mt-6 flex flex-col gap-3">
        <Button href={request ? buildWhatsAppUrl(request) : undefined as unknown as string} target="_blank" rel="noreferrer" fullWidth className={!request ? "pointer-events-none opacity-50" : ""}>
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> {t.booking.whatsapp}
        </Button>
        <p className="text-center font-sans text-[13px] leading-[20px] text-green-olive">{t.booking.whatsappNote}</p>
        <div className="mt-1 grid gap-2 sm:grid-cols-2">
          <Button href={request ? buildGoogleCalendarUrl(request) : undefined as unknown as string} target="_blank" rel="noreferrer" variant="secondary" size="sm" className={!request ? "pointer-events-none opacity-50" : ""}>
            <CalendarPlus className="h-4 w-4" aria-hidden="true" /> {t.booking.googleCalendar}
          </Button>
          <Button onClick={() => request && downloadIcs(request)} disabled={!request} variant="secondary" size="sm">
            <Download className="h-4 w-4" aria-hidden="true" /> {t.booking.ics}
          </Button>
        </div>
      </div>
    </div>
  );
}
