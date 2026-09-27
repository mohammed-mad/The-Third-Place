import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Check, Clock, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import SessionSelector from "@/components/booking/SessionSelector";
import ParticipantsSelector from "@/components/booking/ParticipantsSelector";
import BookingSummary from "@/components/booking/BookingSummary";
import { getWorkshopBySlug } from "@/data/workshops";
import { MAX_PARTICIPANTS, clampParticipants } from "@/lib/booking";
import type { WorkshopSession } from "@/types/workshop";

export default function WorkshopDetails() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const workshop = useMemo(() => getWorkshopBySlug(slug), [slug]);

  const firstAvailable = workshop?.sessions.find((session) => session.spotsLeft > 0) ?? null;
  const [session, setSession] = useState<WorkshopSession | null>(firstAvailable);
  const [participants, setParticipants] = useState(1);

  if (!workshop) return <Navigate to="/workshops" replace />;

  const maxParticipants = Math.min(MAX_PARTICIPANTS, session?.spotsLeft ?? MAX_PARTICIPANTS);

  const handleSelectSession = (next: WorkshopSession) => {
    setSession(next);
    setParticipants((current) => clampParticipants(current, next));
  };

  const continueToBooking = () => {
    if (!session) return;
    navigate(`/booking/${workshop.slug}?session=${session.id}&participants=${participants}`);
  };

  return (
    <>
      <section className="relative isolate h-[420px] overflow-hidden bg-ink lg:h-[520px]">
        <img src={workshop.image} alt={`${workshop.title} — ${workshop.tagline}`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1710]/85 via-[#1c1710]/35 to-[#1c1710]/20" aria-hidden="true" />
        <div className="page-container relative flex h-full flex-col justify-end pb-12">
          <Link to="/workshops" className="mb-6 inline-flex items-center gap-2 font-sans text-[13px] text-ivory/85 transition hover:text-ivory">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All workshops
          </Link>
          <p className="eyebrow text-ivory/90">{workshop.category}</p>
          <h1 className="mt-3 font-serif text-[40px] font-medium leading-[1.06] text-ivory lg:text-[60px]">{workshop.title}</h1>
          <p className="mt-2 font-sans text-[17px] text-ivory/85">{workshop.tagline}</p>
        </div>
      </section>

      <section className="bg-ivory py-14 lg:py-20">
        <div className="page-container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div className="space-y-12">
            <div>
              <div className="flex flex-wrap gap-6 font-sans text-[14px] text-ink-muted">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-forest" aria-hidden="true" /> {workshop.duration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-forest" aria-hidden="true" /> {workshop.level}
                </span>
              </div>
              <p className="mt-6 max-w-[640px] font-sans text-[16px] leading-[1.85] text-ink-muted">{workshop.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {workshop.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-[14.5px] text-ink">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <SessionSelector sessions={workshop.sessions} selectedId={session?.id ?? null} onSelect={handleSelectSession} />

            <ParticipantsSelector
              value={participants}
              max={maxParticipants}
              onChange={(value) => setParticipants(clampParticipants(value, session ?? undefined))}
            />
          </div>

          <BookingSummary
            workshop={workshop}
            session={session}
            participants={participants}
            action={
              <Button onClick={continueToBooking} disabled={!session} fullWidth arrow>
                Continue to Booking
              </Button>
            }
          />
        </div>
      </section>
    </>
  );
}
