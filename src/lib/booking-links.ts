import type { Workshop, WorkshopSession } from "@/types/workshop";
import { site } from "@/data/site";
import { formatSessionDate } from "@/lib/format";

export interface BookingRequest {
  workshop: Workshop;
  session: WorkshopSession;
  participants: number;
  name?: string;
}

/** Pre-filled WhatsApp message to book a session. */
export const buildWhatsAppMessage = ({ workshop, session, participants, name }: BookingRequest): string => {
  const who = name?.trim() ? ` My name is ${name.trim()}.` : "";
  return [
    `Hello The Third Place!${who}`,
    `I would like to book the ${workshop.title} on ${formatSessionDate(session.date)}, ${session.time}, for ${participants} ${participants === 1 ? "person" : "people"}.`,
    `Could you confirm availability and send me the payment details? Thank you!`,
  ].join("\n");
};

export const buildWhatsAppUrl = (request: BookingRequest): string =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(request))}`;

export const buildWhatsAppContactUrl = (message: string): string =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

const toGoogleStamp = (date: string, time: string): string => `${date.replace(/-/g, "")}T${time.replace(":", "")}00`;

/** "Add to Google Calendar" link for a session (times in the studio's local zone). */
export const buildGoogleCalendarUrl = ({ workshop, session, participants }: BookingRequest): string => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${workshop.title} – The Third Place`,
    dates: `${toGoogleStamp(session.date, session.startTime)}/${toGoogleStamp(session.date, session.endTime)}`,
    details: `${workshop.tagline}. ${participants} ${participants === 1 ? "participant" : "participants"}. Bring an apron if you have one – everything else is provided.\n\n${window.location.origin}/workshops/${workshop.slug}`,
    location: `${site.name}, ${site.addressLines.join(", ")}`,
    ctz: "Africa/Casablanca",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/** iCalendar file content for Apple Calendar / Outlook. */
export const buildIcsContent = ({ workshop, session, participants }: BookingRequest): string => {
  const escape = (value: string) => value.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Third Place//Workshops//EN",
    "BEGIN:VEVENT",
    `UID:${workshop.slug}-${session.id}@thethirdplace.ma`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=Africa/Casablanca:${toGoogleStamp(session.date, session.startTime)}`,
    `DTEND;TZID=Africa/Casablanca:${toGoogleStamp(session.date, session.endTime)}`,
    `SUMMARY:${escape(`${workshop.title} – The Third Place`)}`,
    `DESCRIPTION:${escape(`${workshop.tagline}. ${participants} participant(s).`)}`,
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
