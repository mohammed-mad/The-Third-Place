import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-[85px] lg:pt-[17px]">
      <nav
        className="mx-auto flex h-[60px] max-w-[1270px] items-center justify-between rounded-[16px] border border-white/60 bg-ivory/90 pl-4 pr-2 shadow-nav backdrop-blur-md sm:pl-6 lg:h-[76px] lg:rounded-[18px] lg:pl-[26px] lg:pr-[12px]"
        aria-label="Primary"
      >
        <Logo iconClassName="h-[42px] w-[42px]" textClassName="text-[23px] font-semibold" />

        <ul className="hidden items-center gap-[30px] lg:flex xl:gap-[38px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  [
                    "font-sans text-[15px] font-medium transition duration-300 ease-out hover:text-forest",
                    isActive && location.pathname === link.to ? "text-forest" : "text-ink/85",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button to="/workshops" size="sm" className="hidden h-[46px] px-[32px] text-[14.5px] lg:inline-flex">
            Book a Workshop
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-forest transition hover:bg-forest/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-[1270px] rounded-[16px] border border-white/60 bg-ivory p-4 shadow-panel lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  onClick={close}
                  className="block rounded-[10px] px-3 py-3 font-sans text-[15px] font-medium text-ink transition hover:bg-cream hover:text-forest"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/workshops" onClick={close} fullWidth className="mt-3">
            Book a Workshop
          </Button>
        </div>
      )}
    </header>
  );
}
