import { type FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import FaqList from "@/components/ui/FaqList";
import PageHero from "@/components/ui/PageHero";
import ReviewsBlock from "@/components/ui/ReviewsBlock";
import { faqItems } from "@/data/faq";
import { buildWhatsAppContactUrl } from "@/lib/booking-links";
import heroImage from "@/assets/images/gallery/gallery-1.jpg";

const field = "w-full border-b border-green/25 bg-transparent py-2 font-sans text-[15px] text-green placeholder:text-green/40 focus:border-tomato focus:outline-none";
const label = "block font-sans text-[14px] font-bold text-green";

export default function PrivateWorkshops() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", people: "", date: "", message: "" });
  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [key]: e.target.value });

  const whatsapp = buildWhatsAppContactUrl(
    `Hello The Third Place! I'd like to ask about a private workshop${form.people ? ` for ${form.people} people` : ""}${form.date ? ` around ${form.date}` : ""}.${form.message ? ` ${form.message}` : ""}`,
  );

  return (
    <>
      <PageHero image={heroImage} imageAlt="A group painting ceramics together" kicker="Make & connect" title="Private workshop" intro={<p>Come with your family, friends or colleagues to our studio in Casablanca for a creative craft or ceramic workshop. Team days, birthdays and celebrations have all found their way here. Making together is a unique way to spend time with each other and learn something new.</p>}>
        <Button href="#private-form" arrow className="mt-8">
          Get in touch
        </Button>
      </PageHero>

      <section className="page-container py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 font-sans text-[16px] leading-[26px] text-green-olive lg:grid-cols-2 lg:gap-12">
          <p>A private workshop is a unique and relaxed way to spend time with a group. Every group has its own wishes: some want to learn kintsugi in silence with tea, others want a lively mosaic afternoon with music. Tell us about your group through the form and we'll reply with the possibilities and a quote.</p>
          <p>
            <strong className="text-green">Private workshops are possible from six people.</strong> Have a look at the frequently asked questions below or send us a message. Would you rather join one of the open workshops with your own small group? That's possible too: for eight to twelve people we offer a group rate.
          </p>
        </div>
      </section>

      <section id="private-form" className="page-container scroll-mt-10 pb-20">
        <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-0">
          <ContactInfoCard className="relative z-10 lg:mt-12 lg:mr-[-40px] lg:self-start" />
          <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} className="bg-beige-dark p-8 lg:p-16 lg:pl-[120px]">
            <h2 className="font-sans text-h3 text-green">Private workshop request</h2>
            <div className="mt-6 space-y-6">
              <label className={label}>Name<input required className={field} value={form.name} onChange={update("name")} autoComplete="name" /></label>
              <label className={label}>E-mail<input required type="email" className={field} value={form.email} onChange={update("email")} autoComplete="email" /></label>
              <label className={label}>Phone<input type="tel" className={field} value={form.phone} onChange={update("phone")} autoComplete="tel" /></label>
              <label className={label}>Number of people (minimum 6)<input type="number" min={6} className={field} value={form.people} onChange={update("people")} /></label>
              <label className={label}>Preferred date<input type="date" className={field} value={form.date} onChange={update("date")} /></label>
              <label className={label}>Message<textarea rows={4} className={field} value={form.message} onChange={update("message")} placeholder="Tell us about the occasion, the craft you have in mind and any dietary wishes." /></label>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="submit" size="sm">Send</Button>
              <Button href={whatsapp} target="_blank" rel="noreferrer" variant="secondary" size="sm">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask via WhatsApp
              </Button>
            </div>
            {sent && (
              <p className="mt-4 font-sans text-[15px] text-green" role="status">
                Thank you – we'll get back to you within two working days.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="page-container pb-20" aria-label="Reviews">
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </section>

      <section className="bg-beige-dark py-16 lg:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-[1160px]">
            <FaqList items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
