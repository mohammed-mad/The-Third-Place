import type { Workshop, WorkshopSession } from "@/types/workshop";
import { site } from "@/data/site";
import { translations, type Lang } from "@/i18n/translations";
import { formatSessionDate } from "@/lib/format";

export interface BookingRequest {
  workshop: Workshop;
  session: WorkshopSession;
  participants: number;
  name?: string;
  lang: Lang;
}

const localeFor = (lang: Lang) => (lang === "fr" ? "fr-FR" : "en-GB");

/** Pre-filled WhatsApp message to book a session. */
export const buildWhatsAppMessage = ({ workshop, session, participants, name, lang }: BookingRequest): string =>
  translations[lang].messages.whatsappBooking(name?.trim() ?? "", workshop.title, formatSessionDate(session.date, localeFor(lang)), session.time, participants);

export const buildWhatsAppUrl = (request: BookingRequest): string =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(request))}`;

export const buildWhatsAppContactUrl = (message: string): string => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

const toStamp = (date: string, time: string): string => `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;

/** "Add to Google Calendar" link for a session (times in the studio's local zone). */
export const buildGoogleCalendarUrl = ({ workshop, session, participants, lang }: BookingRequest): string => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${workshop.title} – ${site.name}`,
    dates: `${toStamp(session.date, session.startTime)}/${toStamp(session.date, session.endTime)}`,
    details: `${translations[lang].messages.calendarDetails(workshop.tagline, participants)}\n\n${window.location.origin}/workshops/${workshop.slug}`,
    location: `${site.name}, ${site.addressLines.join(", ")}`,
    ctz: "Africa/Casablanca",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/** iCalendar file content for Apple Calendar / Outlook. */
export const buildIcsContent = ({ workshop, session, participants, lang }: BookingRequest): string => {
  const escape = (value: string) => value.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Third Place//Workshops//EN",
    "BEGIN:VEVENT",
    `UID:${workshop.slug}-${session.id}@thethirdplace.ma`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=Africa/Casablanca:${toStamp(session.date, session.startTime)}`,
    `DTEND;TZID=Africa/Casablanca:${toStamp(session.date, session.endTime)}`,
    `SUMMARY:${escape(`${workshop.title} – ${site.name}`)}`,
    `DESCRIPTION:${escape(translations[lang].messages.calendarDetails(workshop.tagline, participants))}`,
    `LOCATION:${escape(`${site.name}, ${site.addressLines.join(", ")}`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};

export const downloadIcs = (request: BookingRequest): void => {
  const blob = new Blob([buildIcsContent(request)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${request.workshop.slug}-${request.session.date}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
