import { useT } from "@/i18n/LanguageContext";

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const t = useT();
  const title = t.legal[kind];
  return (
    <section className="page-container pb-20 pt-[200px]">
      <h1 className="display text-[44px] leading-[1] text-green lg:text-[56px]">{title}</h1>
      <p className="mt-6 max-w-3xl font-sans text-body text-green-olive">{t.legal.placeholder(title)}</p>
    </section>
  );
}
