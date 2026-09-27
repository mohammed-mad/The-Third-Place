import { type FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import FaqList from "@/components/ui/FaqList";
import PageHero from "@/components/ui/PageHero";
import ReviewsBlock from "@/components/ui/ReviewsBlock";
import { useT } from "@/i18n/LanguageContext";
import { useFaq } from "@/i18n/useLocalizedData";
import { buildWhatsAppContactUrl } from "@/lib/booking-links";
import heroImage from "@/assets/images/gallery/gallery-1.jpg";

const field = "w-full border-b border-green/25 bg-transparent py-2 font-sans text-[15px] text-green placeholder:text-green/40 focus:border-tomato focus:outline-none";
const label = "block font-sans text-[14px] font-bold text-green";

export default function PrivateWorkshops() {
  const t = useT();
  const faq = useFaq();
  const p = t.privatePage;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", people: "", date: "", message: "" });
  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [key]: e.target.value });
  const whatsapp = buildWhatsAppContactUrl(p.whatsappMessage(form.people, form.date, form.message));

  return (
    <>
      <PageHero image={heroImage} imageAlt={p.heroAlt} kicker={p.kicker} title={p.title} intro={<p>{p.intro}</p>}>
        <Button href="#private-form" arrow className="mt-8">
          {p.cta}
        </Button>
      </PageHero>

      <section className="page-container py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 font-sans text-[16px] leading-[26px] text-green-olive lg:grid-cols-2 lg:gap-12">
          <p>{p.p1}</p>
          <p>
            <strong className="text-green">{p.p2Strong}</strong>
            {p.p2}
          </p>
        </div>
      </section>

      <section id="private-form" className="page-container scroll-mt-10 pb-20">
        <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-0">
          <ContactInfoCard className="relative z-10 lg:mt-12 lg:mr-[-40px] lg:self-start" />
          <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} className="bg-beige-dark p-8 lg:p-16 lg:pl-[120px]">
            <h2 className="font-sans text-h3 text-green">{p.formTitle}</h2>
            <div className="mt-6 space-y-6">
              <label className={label}>{p.name}<input required className={field} value={form.name} onChange={update("name")} autoComplete="name" /></label>
              <label className={label}>{p.email}<input required type="email" className={field} value={form.email} onChange={update("email")} autoComplete="email" /></label>
              <label className={label}>{p.phone}<input type="tel" className={field} value={form.phone} onChange={update("phone")} autoComplete="tel" /></label>
              <label className={label}>{p.people}<input type="number" min={6} className={field} value={form.people} onChange={update("people")} /></label>
              <label className={label}>{p.date}<input type="date" className={field} value={form.date} onChange={update("date")} /></label>
              <label className={label}>{p.message}<textarea rows={4} className={field} value={form.message} onChange={update("message")} placeholder={p.messagePlaceholder} /></label>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="submit" size="sm">{t.common.send}</Button>
              <Button href={whatsapp} target="_blank" rel="noreferrer" variant="secondary" size="sm">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> {p.askWhatsapp}
              </Button>
            </div>
            {sent && (
              <p className="mt-4 font-sans text-[15px] text-green" role="status">
                {t.common.formThanks}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="page-container pb-20" aria-label={t.home.reviewsAria}>
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </section>

      <section className="bg-beige-dark py-16 lg:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-[1160px]">
            <FaqList items={faq} />
          </div>
        </div>
      </section>
    </>
  );
}
