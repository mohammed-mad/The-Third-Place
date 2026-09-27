import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { Check, Coffee, Gift, Package, Shirt, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import InfoStats from "@/components/ui/InfoStats";
import PageHero from "@/components/ui/PageHero";
import ScriptTitle from "@/components/ui/ScriptTitle";
import BookingPanel from "@/components/booking/BookingPanel";
import { useT } from "@/i18n/LanguageContext";
import { useWorkshop } from "@/i18n/useLocalizedData";
import { formatPrice } from "@/lib/format";
import makerImage from "@/assets/images/people/maker.jpg";

const includeIcons = [Coffee, Package, Gift, Shirt, Sparkles];
const label = "font-sans text-[10.5px] font-bold uppercase tracking-[0.14em] text-orange";

export default function WorkshopDetails() {
  const { slug = "" } = useParams();
  const [params] = useSearchParams();
  const t = useT();
  const workshop = useWorkshop(slug);
  if (!workshop) return <Navigate to="/workshops" replace />;
  const d = t.detail;

  return (
    <>
      <PageHero image={workshop.heroImage} imageAlt={`${workshop.title} – ${workshop.tagline}`} kicker={workshop.kicker} title={workshop.shortTitle} intro={<p className="lg:text-[17px] lg:leading-[28px]">{workshop.intro}</p>} align="left" minHeight="min-h-[600px] lg:min-h-[818px]">
        <div className="mt-8 w-full max-w-[560px]">
          <InfoStats
            stats={[
              { label: d.price, value: formatPrice(workshop.price) },
              { label: d.duration, value: workshop.duration },
              { label: d.people, value: String(workshop.maxParticipants) },
            ]}
          />
          <div className="mt-6 text-center lg:text-left">
            <Button href="#booking" arrow>
              {d.reserve}
            </Button>
          </div>
        </div>
      </PageHero>

      <section className="page-container py-14 lg:py-[80px]">
        <div className="mx-auto max-w-[1160px] columns-1 gap-10 font-sans text-[16px] leading-[26px] text-green-olive lg:columns-2 lg:text-[17px] lg:leading-[28px]">
          <p>{workshop.description}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1160px] grid-cols-1 items-center gap-8 bg-beige-dark p-8 lg:grid-cols-[1fr_420px] lg:p-14">
          <div>
            <h2 className="font-sans text-h3 text-green">{d.whatWillYouDo}</h2>
            <ul className="mt-5 space-y-2">
              {workshop.whatYouWillDo.map((line) => (
                <li key={line} className="flex items-start gap-3 font-sans text-[16px] leading-[26px] text-green-olive">
                  <Check className="mt-[5px] h-4 w-4 shrink-0 text-tomato" strokeWidth={3} aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <img src={workshop.gallery[0]} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>

        <ul className="mx-auto mt-14 grid max-w-[1160px] grid-cols-1 gap-6 sm:grid-cols-3">
          {workshop.gallery.map((src, index) => (
            <li key={index} className="aspect-[4/3] overflow-hidden">
              <img src={src} alt={t.common.impression(workshop.title, index + 1)} className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]" loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <section id="booking" className="scroll-mt-10 bg-green py-14 lg:py-[80px]" aria-labelledby="booking-heading">
        <div className="page-container grid grid-cols-1 gap-10 lg:grid-cols-[1fr_640px] lg:gap-16">
          <div className="text-white">
            <dl className="space-y-6">
              <div>
                <dt className={label}>{d.price}</dt>
                <dd className="mt-1 font-sans text-body">
                  {formatPrice(workshop.price)} {t.common.perPerson}
                </dd>
              </div>
              <div>
                <dt className={label}>{d.duration}</dt>
                <dd className="mt-1 font-sans text-body">{workshop.duration}</dd>
              </div>
              <div>
                <dt className={label}>{d.maxPeople}</dt>
                <dd className="mt-1 font-sans text-body">{workshop.maxParticipants}</dd>
              </div>
              <div>
                <dt className={label}>{d.included}</dt>
                <dd className="mt-2">
                  <ul className="space-y-1">
                    {workshop.includes.map((item, index) => {
                      const Icon = includeIcons[index % includeIcons.length];
                      return (
                        <li key={item} className="flex items-center gap-3 font-sans text-[16px] leading-[26px]">
                          <Icon className="h-4 w-4 shrink-0 text-orange" strokeWidth={1.8} aria-hidden="true" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 id="booking-heading" className="sr-only">
              {t.booking.title}
            </h2>
            <BookingPanel workshop={workshop} initialSessionId={params.get("session")} initialParticipants={Number(params.get("participants") ?? 1) || 1} />
            <p className="mt-4 font-sans text-[13px] leading-[20px] text-white/70">{d.fullNote}</p>
          </div>
        </div>
      </section>

      <section className="page-container py-16 lg:py-[96px]" aria-labelledby="host-heading">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <img src={makerImage} alt={d.hostAlt} className="mx-auto h-[220px] w-[220px] rounded-full object-cover" loading="lazy" />
          <div>
            <ScriptTitle as="p" dashes={false}>
              {d.hostKicker}
            </ScriptTitle>
            <h2 id="host-heading" className="font-sans text-h2 text-green">
              {d.hostName}
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[26px] text-green-olive">{d.hostText}</p>
            <Button to="/about" variant="secondary" size="sm" className="mt-6">
              {t.common.moreAboutStudio}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
