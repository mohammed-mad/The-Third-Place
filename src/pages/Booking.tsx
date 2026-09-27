import { type FormEvent, useMemo, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import BookingSummary from "@/components/booking/BookingSummary";
import PageHeader from "@/components/ui/PageHeader";
import { getWorkshopBySlug } from "@/data/workshops";
import { api } from "@/lib/api";
import { attachCustomer, clampParticipants, createDraftBooking } from "@/lib/booking";
import type { Booking as BookingModel, BookingCustomer } from "@/types/workshop";

type Step = "details" | "payment" | "confirmed";

const inputClasses =
  "w-full rounded-[10px] border border-line bg-white px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink-faint focus:border-forest focus:outline-none";

export default function Booking() {
  const { slug = "" } = useParams();
  const [params] = useSearchParams();
  const workshop = useMemo(() => getWorkshopBySlug(slug), [slug]);

  const session = useMemo(() => {
    if (!workshop) return null;
    const requested = workshop.sessions.find((item) => item.id === params.get("session"));
    return requested ?? workshop.sessions.find((item) => item.spotsLeft > 0) ?? null;
  }, [workshop, params]);

  const participants = clampParticipants(Number(params.get("participants") ?? 1) || 1, session ?? undefined);

  const [step, setStep] = useState<Step>("details");
  const [booking, setBooking] = useState<BookingModel | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [customer, setCustomer] = useState<BookingCustomer>({ fullName: "", email: "", phone: "", notes: "" });

  if (!workshop) return <Navigate to="/workshops" replace />;
  if (!session) return <Navigate to={`/workshops/${workshop.slug}`} replace />;

  const handleDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const draft = createDraftBooking({ workshop, session, participants });
    setBooking(attachCustomer(draft, customer));
    setStep("payment");
  };

  const handlePayment = async () => {
    if (!booking) return;
    setSubmitting(true);
    // Placeholder for a payment provider (e.g. Stripe Checkout). The API
    // returns a paymentUrl when one is configured; we confirm locally for now.
    const result = await api.submitBooking(booking);
    setSubmitting(false);
    if (result.paymentUrl) {
      window.location.assign(result.paymentUrl);
      return;
    }
    setBooking({ ...booking, status: "confirmed" });
    setStep("confirmed");
  };

  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title={step === "confirmed" ? "You're booked in" : `Book ${workshop.title}`}
        description={
          step === "confirmed"
            ? "We've saved your place. A confirmation email with all the details will follow shortly."
            : "A few details and you're all set. Payment is collected in the final step."
        }
      />

      <section className="bg-ivory py-14 lg:py-20">
        <div className="page-container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div>
            <Link
              to={`/workshops/${workshop.slug}`}
              className="mb-8 inline-flex items-center gap-2 font-sans text-[13px] text-ink-muted transition hover:text-forest"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change date or participants
            </Link>

            <ol className="mb-8 flex items-center gap-3 font-sans text-[12px] uppercase tracking-[0.14em] text-ink-muted">
              {(["details", "payment", "confirmed"] as Step[]).map((item, index) => (
                <li key={item} className={["flex items-center gap-3", item === step ? "text-forest" : ""].join(" ")}>
                  <span
                    className={[
                      "inline-flex h-6 w-6 items-center justify-center rounded-pill border text-[11px]",
                      item === step ? "border-forest bg-forest text-ivory" : "border-line",
                    ].join(" ")}
                  >
                    {index + 1}
                  </span>
                  {item === "details" ? "Your details" : item === "payment" ? "Payment" : "Confirmed"}
                  {index < 2 && <span className="h-px w-6 bg-line" aria-hidden="true" />}
                </li>
              ))}
            </ol>

            {step === "details" && (
              <form onSubmit={handleDetails} className="space-y-5 rounded-panel border border-line bg-white p-6 shadow-card lg:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Full name</span>
                    <input
                      required
                      className={inputClasses}
                      value={customer.fullName}
                      onChange={(event) => setCustomer({ ...customer, fullName: event.target.value })}
                      autoComplete="name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Email</span>
                    <input
                      required
                      type="email"
                      className={inputClasses}
                      value={customer.email}
                      onChange={(event) => setCustomer({ ...customer, email: event.target.value })}
                      autoComplete="email"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Phone (optional)</span>
                  <input
                    type="tel"
                    className={inputClasses}
                    value={customer.phone}
                    onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Notes (optional)</span>
                  <textarea
                    rows={3}
                    className={inputClasses}
                    value={customer.notes}
                    onChange={(event) => setCustomer({ ...customer, notes: event.target.value })}
                    placeholder="Allergies, accessibility needs, or a piece you'd like to bring"
                  />
                </label>
                <Button type="submit" arrow>
                  Continue to Payment
                </Button>
              </form>
            )}

            {step === "payment" && booking && (
              <div className="rounded-panel border border-line bg-white p-6 shadow-card lg:p-8">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-forest" aria-hidden="true" />
                  <h2 className="font-serif text-[26px] font-medium text-ink">Payment</h2>
                </div>
                <p className="mt-4 font-sans text-[15px] leading-[1.8] text-ink-muted">
                  Secure card payment will be handled by our payment provider. This step is a placeholder that can be
                  connected to Stripe or another provider without changing the booking flow.
                </p>
                <div className="mt-6 rounded-card border border-dashed border-line bg-cream p-6 text-center font-sans text-[14px] text-ink-muted">
                  <Lock className="mx-auto mb-2 h-5 w-5 text-forest" aria-hidden="true" />
                  Payment provider checkout will appear here.
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button onClick={handlePayment} disabled={submitting} arrow>
                    {submitting ? "Confirming…" : "Confirm Booking"}
                  </Button>
                  <Button variant="outline" onClick={() => setStep("details")}>
                    Back
                  </Button>
                </div>
              </div>
            )}

            {step === "confirmed" && booking && (
              <div className="rounded-panel border border-line bg-white p-6 shadow-card lg:p-8">
                <p className="eyebrow text-clay">Booking reference</p>
                <p className="mt-2 font-serif text-[30px] font-medium text-ink">{booking.id.toUpperCase()}</p>
                <p className="mt-4 font-sans text-[15px] leading-[1.8] text-ink-muted">
                  Thank you, {booking.customer?.fullName}. We look forward to welcoming you to the studio. If anything
                  changes, reply to your confirmation email and we'll help you reschedule.
                </p>
                <Button to="/workshops" variant="outline" arrow className="mt-6">
                  Browse more workshops
                </Button>
              </div>
            )}
          </div>

          <BookingSummary workshop={workshop} session={session} participants={participants} />
        </div>
      </section>
    </>
  );
}
