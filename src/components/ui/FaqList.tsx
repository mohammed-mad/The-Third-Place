import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { FaqItem } from "@/types/workshop";
import { useT } from "@/i18n/LanguageContext";

interface FaqListProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqList({ items, title }: FaqListProps) {
  const t = useT();
  const [open, setOpen] = useState<string | null>(null);
  const heading = title ?? t.contactPage.faqTitle;
  return (
    <div>
      <h2 className="font-sans text-h3 text-green">{heading}</h2>
      <ul className="mt-4 border-t border-green/15">
        {items.map((item) => {
          const expanded = open === item.id;
          return (
            <li key={item.id} className="border-b border-green/15">
              <button type="button" onClick={() => setOpen(expanded ? null : item.id)} aria-expanded={expanded} aria-controls={`faq-${item.id}`} className="flex w-full items-center gap-4 py-[14px] text-left">
                {expanded ? <Minus className="h-4 w-4 shrink-0 text-tomato" strokeWidth={2.5} aria-hidden="true" /> : <Plus className="h-4 w-4 shrink-0 text-tomato" strokeWidth={2.5} aria-hidden="true" />}
                <span className="font-sans text-[15px] font-bold text-green">{item.question}</span>
              </button>
              {expanded && (
                <p id={`faq-${item.id}`} className="pb-5 pl-8 pr-4 font-sans text-[16px] leading-[26px] text-green-olive">
                  {item.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
