import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BookingPanel from "@/components/booking/BookingPanel";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import ScriptTitle from "@/components/ui/ScriptTitle";
import { useT } from "@/i18n/LanguageContext";
import { useWorkshop } from "@/i18n/useLocalizedData";

/** Stand-alone booking page: same WhatsApp hand-off as the workshop detail, with contact details beside it. */
export default function Booking() {
  const { slug = "" } = useParams();
  const [params] = useSearchParams();
  const t = useT();
  const workshop = useWorkshop(slug);
  if (!workshop) return <Navigate to="/workshops" replace />;

  return (
    <section className="page-container pb-20 pt-[200px]">
      <Link to={`/workshops/${workshop.slug}`} className="inline-flex items-center gap-2 font-sans text-[14px] text-green-olive transition hover:text-tomato">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.booking.backTo(workshop.title)}
      </Link>
      <div className="mt-6 text-center">
        <ScriptTitle as="p">{workshop.kicker}</ScriptTitle>
        <h1 className="display mt-2 text-[44px] leading-[1] text-green lg:text-[56px]">{t.booking.pageTitle(workshop.shortTitle)}</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
        <ContactInfoCard className="lg:self-start" />
        <BookingPanel workshop={workshop} initialSessionId={params.get("session")} initialParticipants={Number(params.get("participants") ?? 1) || 1} />
      </div>
    </section>
  );
}
