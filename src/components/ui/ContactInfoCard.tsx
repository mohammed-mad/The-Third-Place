import { Facebook, Instagram } from "lucide-react";
import { site } from "@/data/site";
import { buildWhatsAppContactUrl } from "@/lib/booking-links";

const Label = ({ children }: { children: string }) => <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.12em] text-tomato">{children}</p>;
const Value = ({ children }: { children: React.ReactNode }) => <div className="mt-1 font-sans text-[15px] leading-[24px] text-green">{children}</div>;

/** White floating card with phone, WhatsApp, address, email and socials. */
export default function ContactInfoCard({ className = "" }: { className?: string }) {
  return (
    <aside className={["rounded-[4px] bg-white p-6 shadow-float", className].join(" ")} aria-label="Contact details">
      <Label>Phone</Label>
      <Value>
        <a href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-tomato">
          {site.phoneDisplay}
        </a>
      </Value>
      <div className="mt-5">
        <Label>WhatsApp</Label>
        <Value>
          <a href={buildWhatsAppContactUrl("Hello The Third Place! I have a question about your workshops.")} target="_blank" rel="noreferrer" className="hover:text-tomato">
            Send us a message
          </a>
        </Value>
      </div>
      <div className="mt-5">
        <Label>Address</Label>
        <Value>
          {site.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Value>
      </div>
      <div className="mt-5">
        <Label>E-mail</Label>
        <Value>
          <a href={`mailto:${site.email}`} className="hover:text-tomato">
            {site.email}
          </a>
        </Value>
      </div>
      <div className="mt-5">
        <Label>Follow us</Label>
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
