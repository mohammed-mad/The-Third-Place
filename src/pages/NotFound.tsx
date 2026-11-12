import Button from "@/components/ui/Button";
import { useT } from "@/i18n/LanguageContext";

export default function NotFound() {
  const t = useT();
  return (
    <section className="page-container pb-20 pt-[200px]">
      <h1 className="display text-[44px] leading-[1] text-green lg:text-[56px]">{t.notFound.title}</h1>
      <p className="mt-4 font-sans text-body text-green-olive">{t.notFound.text}</p>
      <Button to="/" arrow className="mt-8">
        {t.notFound.cta}
      </Button>
    </section>
  );
}
