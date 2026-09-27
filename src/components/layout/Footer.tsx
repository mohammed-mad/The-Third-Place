import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { legalLinks, navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="rough-edge-top mt-[14px] bg-green text-white">
      <div className="bg-dots-light bg-dots">
        <div className="page-container pt-[96px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[285px_220px_218px_1fr] lg:gap-0">
            <div>
              <Logo tone="light" size={152} />
            </div>

            <div>
              <h3 className="font-sans text-label uppercase text-white">Menu</h3>
              <ul className="mt-1">
                {[...navLinks, { label: "Contact", to: "/contact" }].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="block pb-2 font-sans text-body text-white transition hover:text-orange">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-label uppercase text-white">Location</h3>
              <p className="mt-1 font-sans text-body text-white">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="text-orange transition hover:text-orange-light">
                  Get directions
                </a>
              </p>
            </div>

            <div className="lg:max-w-[472px]">
              <h3 className="font-sans text-h3 text-white">Sign up for the newsletter</h3>
              <p className="mt-2 font-sans text-body text-white/70">Be the first to hear about new workshops in your inbox. New dates are announced on the last Tuesday of every month.</p>
              <NewsletterForm className="mt-4" />
            </div>
          </div>

          <div className="mt-[92px] mb-10 flex flex-col border border-white/20 md:flex-row md:items-stretch md:justify-between">
            <div className="flex">
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-[62px] w-16 items-center justify-center border-r border-white/20 transition hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-[62px] w-16 items-center justify-center border-r border-white/20 transition hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <ul className="flex flex-wrap items-center gap-y-2 px-4 py-4 md:py-0">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="px-4 font-sans text-tiny uppercase text-white/50 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 font-sans text-tiny uppercase text-white/50">© 2026 {site.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
