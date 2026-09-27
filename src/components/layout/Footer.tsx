import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import BotanicalIllustration from "@/components/ui/BotanicalIllustration";
import { legalLinks, navLinks, siteContact } from "@/data/navigation";

function PinterestIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-.79-.17-2 .03-2.87l1.18-4.99s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.42 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.4-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29l-.28 1.13c-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.23.87-.84 1.96-1.25 2.62A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const socials = [
    { label: "Instagram", href: siteContact.social.instagram, Icon: Instagram },
    { label: "Facebook", href: siteContact.social.facebook, Icon: Facebook },
    { label: "Pinterest", href: siteContact.social.pinterest, Icon: PinterestIcon },
  ];

  return (
    <footer className="relative overflow-hidden bg-forest-deep text-ivory">
      <BotanicalIllustration className="pointer-events-none absolute -right-2 -top-4 hidden h-[250px] w-auto text-ivory/40 lg:block" />
      <BotanicalIllustration className="pointer-events-none absolute right-[30px] top-[160px] hidden h-[180px] w-auto -scale-x-100 text-ivory/25 lg:block" />

      <div className="page-container relative pt-[52px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[418px_212px_346px_1fr] lg:gap-0">
          <div>
            <Logo tone="light" iconClassName="h-[54px] w-[54px]" textClassName="text-[27px]" />
            <p className="mt-5 max-w-[350px] font-sans text-[14.5px] leading-[1.75] text-ivory/85">
              A creative workshop studio where people come together to learn, create and connect.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-pill border border-ivory/45 text-ivory transition duration-300 ease-out hover:border-ivory hover:bg-ivory hover:text-forest-deep"
                  >
                    <Icon className="h-[16px] w-[16px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[16px] font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-[8px]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-[14.5px] text-ivory/90 transition duration-300 hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[16px] font-semibold">Contact</h3>
            <ul className="mt-4 space-y-[12px] font-sans text-[14.5px] text-ivory/90">
              <li className="flex items-center gap-3">
                <MapPin className="h-[15px] w-[15px] shrink-0 text-ivory/70" aria-hidden="true" />
                <span>{siteContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-[15px] w-[15px] shrink-0 text-ivory/70" aria-hidden="true" />
                <a href={`mailto:${siteContact.email}`} className="transition hover:text-ivory">
                  {siteContact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-[15px] w-[15px] shrink-0 text-ivory/70" aria-hidden="true" />
                <a href={`tel:${siteContact.phone.replace(/\s/g, "")}`} className="transition hover:text-ivory">
                  {siteContact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[16px] font-semibold">Join Our Community</h3>
            <p className="mt-5 max-w-[350px] font-sans text-[14.5px] leading-[1.75] text-ivory/85">
              Get updates on new workshops, special events and creative inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5 flex h-[50px] max-w-[362px] items-center rounded-pill bg-ivory p-[5px] pl-5">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent font-sans text-[13px] text-ink placeholder:text-ink-muted focus:outline-none text-[14px]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-forest text-ivory transition duration-300 ease-out hover:bg-forest-hover"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 font-sans text-[12px] text-ivory/80" role="status">
                Thank you — you're on the list.
              </p>
            )}
          </div>
        </div>

        <div className="mt-[38px] flex flex-col gap-4 border-t border-ivory/20 py-[24px] font-sans text-[13px] text-ivory/75 md:flex-row md:items-center md:justify-between">
          <p>© 2026 The Third Place. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <span>Website by Default</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
