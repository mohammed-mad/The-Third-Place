import { Globe } from "lucide-react";
import { languages, type Lang } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";

interface LanguageSwitcherProps {
  /**
   * "toggle": one button at the end of the menu bar that switches to the other language.
   * "pill": EN | FR pair used next to the mobile menu button.
   */
  variant?: "toggle" | "pill";
  className?: string;
}

export default function LanguageSwitcher({ variant = "toggle", className = "" }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();

  if (variant === "toggle") {
    const other = (lang === "en" ? "fr" : "en") as Lang;
    const otherName = languages.find((l) => l.code === other)?.label ?? other;
    return (
      <button
        type="button"
        onClick={() => setLang(other)}
        aria-label={`${t.langSwitch.label}: ${otherName}`}
        title={otherName}
        className={["inline-flex items-center gap-2 self-stretch bg-orange px-4 font-sans text-[15px] font-bold uppercase tracking-[0.06em] text-ink transition hover:bg-orange-light", className].join(" ")}
      >
        <Globe className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
        {t.langSwitch[other]}
      </button>
    );
  }

  return (
    <div role="group" aria-label={t.langSwitch.label} className={["inline-flex items-center gap-1 rounded-pill bg-white/95 p-1 shadow-card", className].join(" ")}>
      {languages.map((language) => {
        const active = language.code === lang;
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => setLang(language.code as Lang)}
            aria-pressed={active}
            aria-label={language.label}
            className={["rounded-pill px-[10px] py-[3px] font-sans text-[13px] font-bold uppercase tracking-[0.06em] transition", active ? "bg-green text-white" : "text-green hover:bg-beige-dark"].join(" ")}
          >
            {t.langSwitch[language.code as Lang]}
          </button>
        );
      })}
    </div>
  );
}
