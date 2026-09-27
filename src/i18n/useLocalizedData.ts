import { useMemo } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getUpcomingSessions, getWorkshopBySlug, getWorkshops, workshopGroupLabels } from "@/data/workshops";
import { testimonialSources } from "@/data/testimonials";
import { journalSources } from "@/data/journal";
import { faqSources } from "@/data/faq";
import { getGalleryImages } from "@/data/gallery";
import type { FaqItem, JournalPost, Testimonial, WorkshopGroup } from "@/types/workshop";

export const useWorkshops = () => {
  const { lang } = useLanguage();
  return useMemo(() => getWorkshops(lang), [lang]);
};

export const useWorkshop = (slug: string) => {
  const { lang } = useLanguage();
  return useMemo(() => getWorkshopBySlug(slug, lang), [slug, lang]);
};

export const useUpcomingSessions = () => {
  const { lang } = useLanguage();
  return useMemo(() => getUpcomingSessions(lang), [lang]);
};

export const useGroupLabel = () => {
  const { lang } = useLanguage();
  return (group: WorkshopGroup) => workshopGroupLabels[group][lang];
};

export const useTestimonials = (): Testimonial[] => {
  const { lang } = useLanguage();
  return useMemo(() => testimonialSources.map((t) => ({ ...t, quote: t.quote[lang], when: t.when[lang] })), [lang]);
};

export const useJournalPosts = (): JournalPost[] => {
  const { lang } = useLanguage();
  return useMemo(() => journalSources.map((p) => ({ ...p, title: p.title[lang], alt: p.alt[lang] })), [lang]);
};

export const useFaq = (): FaqItem[] => {
  const { lang } = useLanguage();
  return useMemo(() => faqSources.map((f) => ({ id: f.id, question: f.question[lang], answer: f.answer[lang] })), [lang]);
};

export const useGallery = () => {
  const { lang } = useLanguage();
  return useMemo(() => getGalleryImages(lang), [lang]);
};
