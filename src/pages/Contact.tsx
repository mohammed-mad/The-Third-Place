import { type FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { siteContact } from "@/data/navigation";

const inputClasses =
  "w-full rounded-[10px] border border-line bg-white px-4 py-3 font-sans text-[15px] text-ink placeholder:text-ink-faint focus:border-forest focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about a workshop, a private group session or a gift voucher? We'd love to hear from you."
      />
      <section className="bg-ivory py-16 lg:py-20">
        <div className="page-container grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-[30px] font-medium text-ink">Visit the studio</h2>
            <ul className="mt-6 space-y-4 font-sans text-[15px] text-ink">
              <li className="flex items-center gap-3">
                <MapPin className="h-[18px] w-[18px] text-forest" aria-hidden="true" /> {siteContact.address}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-[18px] w-[18px] text-forest" aria-hidden="true" />
                <a href={`mailto:${siteContact.email}`} className="transition hover:text-forest">
                  {siteContact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-[18px] w-[18px] text-forest" aria-hidden="true" />
                <a href={`tel:${siteContact.phone.replace(/\s/g, "")}`} className="transition hover:text-forest">
                  {siteContact.phone}
                </a>
              </li>
            </ul>
            <p className="mt-8 font-sans text-[14.5px] leading-[1.8] text-ink-muted">
              Private workshops for teams, birthdays and celebrations are available on request. Tell us a little about
              your group and we'll put together a session for you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-panel border border-line bg-white p-6 shadow-card lg:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Name</span>
                <input required className={inputClasses} autoComplete="name" />
              </label>
              <label className="block">
                <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Email</span>
                <input required type="email" className={inputClasses} autoComplete="email" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-sans text-[13px] font-medium text-ink">Message</span>
              <textarea required rows={5} className={inputClasses} />
            </label>
            <Button type="submit" arrow>
              Send Message
            </Button>
            {sent && (
              <p className="font-sans text-[14px] text-forest" role="status">
                Thank you — we'll get back to you within two working days.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
