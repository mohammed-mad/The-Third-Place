# The Third Place — Creative Workshop Studio

Landing page and workshop-booking front end for The Third Place, a creative
workshop studio (Kintsugi, Cyanotype, Mosaic Art) in Casablanca.

Built with **React 18 + TypeScript + Tailwind CSS**, routed with React Router,
icons from Lucide. No UI component library.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
```

## Structure

```
src/
├── assets/          images (hero, workshops, studio, gallery, cta, testimonials), fonts, logo
├── components/
│   ├── layout/      Navbar, Footer, Layout (route shell)
│   ├── home/        Hero, Benefits, WorkshopSection, WorkshopCard, StudioSection,
│   │                Gallery, Testimonials, BookingCTA
│   ├── booking/     SessionSelector, ParticipantsSelector, BookingSummary
│   └── ui/          Button, SectionHeading, Logo, StarRating, BotanicalIllustration, PageHeader
├── data/            workshops, testimonials, gallery, navigation (content lives here)
├── lib/             booking logic, formatting helpers, mock API layer
├── pages/           Home, Workshops, WorkshopDetails, Booking, About, Gallery, Contact, Legal, NotFound
├── types/           Workshop, WorkshopSession, Booking, Testimonial, GalleryImage
├── App.tsx          routes
└── index.css        @font-face declarations + Tailwind layers
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/workshops` | All workshops |
| `/workshops/:slug` | Workshop detail: sessions, date/time, participants, price, total |
| `/booking/:slug` | Booking flow: details → payment placeholder → confirmation |
| `/about`, `/gallery`, `/contact` | Secondary pages |

## Design system

Tokens live in `tailwind.config.ts`: the forest-green / ivory / cream palette,
the EB Garamond (headings) and DM Sans (body) type stacks, pill/card/panel
radii and the card/nav/panel shadows. Fonts are self-hosted from
`src/assets/fonts`. Reusable patterns (`page-container`, `eyebrow`) are in
`src/index.css`.

## Booking & API

Booking state is local React state. `src/lib/booking.ts` holds the pure
logic (totals, participant limits, draft creation) and `src/lib/api.ts` is a
thin async layer over the mock data; replace its bodies with real `fetch`
calls when a backend exists. The payment step is a placeholder intended for
Stripe Checkout or a similar provider. No payment is processed.

## Imagery

Photos are extracted from the design reference so compositions match it
exactly. They are stored at 2× the reference resolution; swap them for the
studio's own photography in `src/assets/images` (same file names) when
available.
