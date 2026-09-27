import { languages, type Lang } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";

interface LanguageSwitcherProps {
  /** "bar" sits inside the white desktop menu, "pill" floats on photo heroes / mobile */
  variant?: "bar" | "pill";
  className?: string;
}

/** EN | FR toggle. */
export default function LanguageSwitcher({ variant = "bar", className = "" }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();
  const wrapper = variant === "bar" ? "flex items-center gap-1 border-l border-green/15 pl-4 pr-3" : "inline-flex items-center gap-1 rounded-pill bg-white/95 p-1 shadow-card";
  return (
    <div role="group" aria-label={t.langSwitch.label} className={[wrapper, className].join(" ")}>
      {languages.map((language) => {
        const active = language.code === lang;
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => setLang(language.code as Lang)}
            aria-pressed={active}
            aria-label={language.label}
            className={[
              "rounded-pill px-[10px] py-[3px] font-sans text-[13px] font-bold uppercase tracking-[0.06em] transition",
              active ? "bg-green text-white" : "text-green hover:bg-beige-dark",
            ].join(" ")}
          >
            {t.langSwitch[language.code as Lang]}
          </button>
        );
      })}
    </div>
  );
}
