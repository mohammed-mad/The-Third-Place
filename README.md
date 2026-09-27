# The Third Place — Craft & Ceramic Workshops

Website and workshop-booking front end for The Third Place, a creative
workshop studio in Casablanca (Kintsugi, Cyanotype, Mosaic Art, ceramic
painting, hand-built pottery and open studio evenings).

Built with **React 18 + TypeScript + Tailwind CSS**, routed with React Router,
icons from Lucide. No UI component library.

This branch (`claude/sarena-redesign`) re-implements the site on the layout,
typography and colour system of sarenaskeuken.nl, adapted to The Third Place's
content, and adds WhatsApp booking plus add-to-calendar links.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
```

## Booking flow

There is no checkout. Each workshop page (and `/booking/:slug`) has a booking
panel where the visitor picks a date, the number of people and optionally their
name, then:

- **Book via WhatsApp** opens `wa.me/<studio number>` with a pre-filled message
  containing the workshop, date, time and group size. The studio confirms and
  sends a payment link in the chat.
- **Add to Google Calendar** opens a pre-filled Google Calendar event for the
  chosen session (Africa/Casablanca time, studio address as location).
- **Apple / Outlook (.ics)** downloads an iCalendar file for the same session.

The helpers live in `src/lib/booking-links.ts`; the studio's WhatsApp number,
address and socials are in `src/data/site.ts`.

## Structure

```
src/
├── assets/          images, self-hosted fonts, logo
├── components/
│   ├── layout/      Navbar, Footer, Layout
│   ├── home/        Hero, UspStrip, WorkshopsSlider, StudioSection, Reviews, Journal
│   ├── booking/     BookingPanel (dates, participants, WhatsApp + calendar)
│   └── ui/          Button, Logo, ScriptTitle, SectionTitle, Carousel, WorkshopCard,
│                    ReviewsBlock, FaqList, ContactInfoCard, NewsletterForm, InfoStats, PageHero
├── data/            workshops, site, testimonials, journal, faq, gallery
├── lib/             booking logic, booking links, formatting
├── pages/           Home, Workshops, WorkshopDetails, Booking, PrivateWorkshops,
│                    About, Gallery, Contact, Legal, NotFound
├── types/           Workshop, WorkshopSession, Booking, Testimonial, JournalPost, FaqItem
└── index.css        @font-face declarations, Tailwind layers, shared patterns
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/workshops` | Craft and ceramic workshop carousels, upcoming dates, private workshops |
| `/workshops/:slug` | Workshop detail with WhatsApp booking and calendar links |
| `/booking/:slug` | Stand-alone booking panel with contact details |
| `/private-workshops` | Private / group workshop request form |
| `/about`, `/gallery`, `/contact` | Secondary pages |

## Design system

Tokens are in `tailwind.config.ts`: beige page backgrounds, dark-green text,
tomato and orange accents, the condensed display face, the handwritten label
face and the geometric body face. The reference site uses the commercial fonts
Hesland Sans Rough and Ambit; this build ships the closest open fonts
(Oswald, Caveat, Manrope) self-hosted from `src/assets/fonts`. To use the
originals, licence them, drop the files into that folder and add them to the
`@font-face` rules at the top of `src/index.css`; the font stacks already list
them first.

## Imagery

Photos are derived from the original design reference for The Third Place and
adapted to the new layout. Several are upscaled from a small source, so swap
them for the studio's own photography in `src/assets/images` (same file names)
when available.
