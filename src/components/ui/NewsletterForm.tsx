import { type FormEvent, useState } from "react";
import { useT } from "@/i18n/LanguageContext";

export default function NewsletterForm({ className = "" }: { className?: string }) {
  const t = useT();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };
  return (
    <form onSubmit={submit} className={className}>
      <div className="flex h-[48px] items-center rounded-pill bg-white p-[5px] pl-5">
        <label htmlFor="newsletter" className="sr-only">
          {t.footer.emailPlaceholder}
        </label>
        <input id="newsletter" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.footer.emailPlaceholder} className="min-w-0 flex-1 bg-transparent font-sans text-[14px] text-green placeholder:text-green/50 focus:outline-none" />
        <button type="submit" className="inline-flex h-[38px] shrink-0 items-center rounded-pill bg-tomato px-[19px] font-sans text-[16px] font-bold text-white transition hover:bg-tomato-hover">
          {t.footer.subscribe}
        </button>
      </div>
      {done && (
        <p className="mt-2 font-sans text-[14px] text-white/80" role="status">
          {t.footer.subscribed}
        </p>
      )}
    </form>
  );
}
