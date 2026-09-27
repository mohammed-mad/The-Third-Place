import { Facebook, Instagram } from "lucide-react";
import { site } from "@/data/site";
import { buildWhatsAppContactUrl } from "@/lib/booking-links";
import { useT } from "@/i18n/LanguageContext";

const Label = ({ children }: { children: React.ReactNode }) => <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.12em] text-tomato">{children}</p>;
const Value = ({ children }: { children: React.ReactNode }) => <div className="mt-1 font-sans text-[15px] leading-[24px] text-green">{children}</div>;

/** White floating card with phone, WhatsApp, address, email and socials. */
export default function ContactInfoCard({ className = "" }: { className?: string }) {
  const t = useT();
  const c = t.contactPage.card;
  return (
    <aside className={["rounded-[4px] bg-white p-6 shadow-float", className].join(" ")} aria-label={c.aria}>
      <Label>{c.phone}</Label>
      <Value>
        <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-tomato">
          {site.phoneDisplay}
        </a>
      </Value>
      <div className="mt-5">
        <Label>{c.whatsapp}</Label>
        <Value>
          <a href={buildWhatsAppContactUrl(t.contactPage.whatsappGeneral)} target="_blank" rel="noreferrer" className="hover:text-tomato">
            {c.whatsappLink}
          </a>
        </Value>
      </div>
      <div className="mt-5">
        <Label>{c.address}</Label>
        <Value>
          {site.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Value>
      </div>
      <div className="mt-5">
        <Label>{c.email}</Label>
        <Value>
          <a href={`mailto:${site.email}`} className="hover:text-tomato">
            {site.email}
          </a>
        </Value>
      </div>
      <div className="mt-5">
        <Label>{c.follow}</Label>
        <div className="mt-2 flex gap-2">
          <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-orange text-ink transition hover:bg-orange-light">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-orange text-ink transition hover:bg-orange-light">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
