import type { Lang } from "@/i18n/translations";

/** A piece of content available in every supported language. */
export type Localized<T = string> = Record<Lang, T>;

export const pick = <T,>(value: Localized<T>, lang: Lang): T => value[lang];
