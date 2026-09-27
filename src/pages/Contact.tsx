import { type FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import FaqList from "@/components/ui/FaqList";
import PageHero from "@/components/ui/PageHero";
import { useT } from "@/i18n/LanguageContext";
import { useFaq } from "@/i18n/useLocalizedData";
import heroImage from "@/assets/images/gallery/gallery-2.jpg";

const field = "w-full border-b border-green/25 bg-transparent py-2 font-sans text-[15px] text-green placeholder:text-green/40 focus:border-tomato focus:outline-none";
const label = "block font-sans text-[14px] font-bold text-green";

export default function Contact() {
  const t = useT();
  const faq = useFaq();
  const c = t.contactPage;
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero image={heroImage} imageAlt={c.heroAlt} kicker={c.kicker} title={c.title} minHeight="min-h-[420px] lg:min-h-[520px]" />

      <section className="page-container py-14 lg:py-20">
        <p className="mx-auto max-w-[720px] text-center font-sans text-[16px] leading-[26px] text-green-olive">
          {c.intro}
          <strong className="text-green">{c.introStrong}</strong>
        </p>
        <div className="relative mx-auto mt-12 grid max-w-[1160px] grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-0">
          <ContactInfoCard className="relative z-10 lg:mt-12 lg:mr-[-40px] lg:self-start" />
          <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }} className="bg-beige-dark p-8 lg:p-16 lg:pl-[120px]">
            <div className="space-y-6">
              <label className={label}>{c.name}<input required className={field} autoComplete="name" /></label>
              <label className={label}>{c.email}<input required type="email" className={field} autoComplete="email" /></label>
              <label className={label}>{c.message}<textarea required rows={4} className={field} /></label>
            </div>
            <Button type="submit" size="sm" className="mt-8">{t.common.send}</Button>
            {sent && (
              <p className="mt-4 font-sans text-[15px] text-green" role="status">
                {t.common.formThanks}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="page-container pb-20">
        <div className="mx-auto max-w-[1160px]">
          <FaqList items={faq} />
        </div>
      </section>
    </>
  );
}
