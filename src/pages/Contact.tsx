import { type FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import FaqList from "@/components/ui/FaqList";
import PageHero from "@/components/ui/PageHero";
import { faqItems } from "@/data/faq";
import heroImage from "@/assets/images/gallery/gallery-2.jpg";

const field = "w-full border-b border-green/25 bg-transparent py-2 font-sans text-[15px] text-green placeholder:text-green/40 focus:border-tomato focus:outline-none";
const label = "block font-sans text-[14px] font-bold text-green";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero image={heroImage} imageAlt="Cyanotype prints drying on a line" kicker="Contact" title="Let's talk" minHeight="min-h-[420px] lg:min-h-[520px]" />

      <section className="page-container py-14 lg:py-20">
        <p className="mx-auto max-w-[720px] text-center font-sans text-[16px] leading-[26px] text-green-olive">
          Questions about a workshop, a gift voucher or a private session? Send us a message and we'll get back to you within two working days. <strong className="text-green">The fastest way to reach us is WhatsApp.</strong>
        </p>
        <div className="relative mx-auto mt-12 grid max-w-[1160px] grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-0">
          <ContactInfoCard className="relative z-10 lg:mt-12 lg:mr-[-40px] lg:self-start" />
          <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} className="bg-beige-dark p-8 lg:p-16 lg:pl-[120px]">
            <div className="space-y-6">
              <label className={label}>Name<input required className={field} autoComplete="name" /></label>
              <label className={label}>E-mail<input required type="email" className={field} autoComplete="email" /></label>
              <label className={label}>Message<textarea required rows={4} className={field} /></label>
            </div>
            <Button type="submit" size="sm" className="mt-8">Send</Button>
            {sent && (
              <p className="mt-4 font-sans text-[15px] text-green" role="status">
                Thank you – we'll get back to you within two working days.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="page-container pb-20">
        <div className="mx-auto max-w-[1160px]">
          <FaqList items={faqItems} />
        </div>
      </section>
    </>
  );
}
