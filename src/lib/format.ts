export const formatPrice = (amount: number, currency = "EUR"): string =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const formatSessionDate = (isoDate: string, locale = "en-GB"): string =>
  capitalize(new Date(`${isoDate}T12:00:00`).toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" }));

export const formatShortDate = (isoDate: string, locale = "en-GB"): string =>
  capitalize(new Date(`${isoDate}T12:00:00`).toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" }));
