import { Fragment, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { getNavLinks } from "@/data/site";
import { useT } from "@/i18n/LanguageContext";

/** Pages that open with a dark photo hero get the white logo. */
const darkHeroPattern = /^\/($|workshops|about|contact|private-workshops)/;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const t = useT();
  const navLinks = getNavLinks(t);
  const onDarkHero = darkHeroPattern.test(pathname);

  return (
    <div className="absolute inset-x-0 top-0 z-40">
      {/* Logo hugs the left edge, the menu bar hugs the right edge, like the reference */}
      <div className="flex items-start justify-between pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-10 lg:pr-0">
        <div className="pt-4">
          <Logo tone={onDarkHero ? "light" : "dark"} size={112} className="lg:hidden" />
          <Logo tone={onDarkHero ? "light" : "dark"} size={140} className="hidden lg:inline-block" />
        </div>

        <nav aria-label="Primary" className="hidden items-stretch bg-white pl-2 lg:flex">
          {navLinks.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && <span aria-hidden="true" className="self-center h-[5px] w-[5px] rounded-full bg-green-olive/60" />}
              <NavLink to={link.to} className={({ isActive }) => ["flex items-center px-[20px] py-4 font-sans text-[17px] leading-[28px] text-green transition hover:text-tomato xl:text-[17.6px]", isActive ? "text-tomato" : ""].join(" ")}>
                {link.label}
              </NavLink>
            </Fragment>
          ))}
          <NavLink to="/contact" className="ml-2 flex items-center bg-green px-4 py-4 font-sans text-[17px] leading-[28px] text-white transition hover:bg-tomato xl:text-[17.6px]">
            {t.nav.contact}
          </NavLink>
          <LanguageSwitcher variant="toggle" />
        </nav>

        <div className="mt-4 flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="pill" />
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.nav.closeMenu : t.nav.openMenu} className="inline-flex h-12 w-12 items-center justify-center bg-green text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-4 mt-2 bg-white shadow-float sm:mx-6 lg:hidden">
          {[...navLinks, { label: t.nav.contact, to: "/contact" }].map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)} className="block border-b border-green/10 px-5 py-4 font-sans text-[17px] text-green last:border-0 hover:text-tomato">
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
