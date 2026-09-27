import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import PageHero from "@/components/ui/PageHero";
import ReviewsBlock from "@/components/ui/ReviewsBlock";
import SectionTitle from "@/components/ui/SectionTitle";
import WorkshopCard from "@/components/ui/WorkshopCard";
import { workshopGroups } from "@/data/workshops";
import { useLanguage } from "@/i18n/LanguageContext";
import { useGroupLabel, useUpcomingSessions, useWorkshops } from "@/i18n/useLocalizedData";
import { formatShortDate } from "@/lib/format";
import studioImage from "@/assets/images/studio/studio.jpg";
import privateImage from "@/assets/images/gallery/gallery-1.jpg";

export default function Workshops() {
  const { t, locale } = useLanguage();
  const workshops = useWorkshops();
  const upcoming = useUpcomingSessions();
  const groupLabel = useGroupLabel();
  const w = t.workshopsPage;

  return (
    <>
      <PageHero
        image={studioImage}
        imageAlt={w.heroAlt}
        kicker={w.kicker}
        title={w.titleLines.map((line, index) => (
          <Fragment key={line}>
            {index > 0 && <br className="hidden lg:block" />}
            {index > 0 && " "}
            {line}
          </Fragment>
        ))}
        intro={
          <p>
            {w.intro1}
            <Link to="/private-workshops" className="text-orange underline-offset-2 hover:underline">
              {w.introLink}
            </Link>
            {w.intro2}
          </p>
        }
      >
        <Button href="#upcoming" variant="secondary-light" className="mt-8">
          {w.seeDates}
        </Button>
      </PageHero>

      {workshopGroups.map((group) => (
        <section key={group} className="page-padding mx-auto max-w-page pt-14 lg:pt-20" aria-labelledby={`group-${group}`}>
          <h2 id={`group-${group}`} className="font-sans text-h2 text-green lg:pl-4">
            {groupLabel(group)}
          </h2>
          <Carousel ariaLabel={groupLabel(group)} className="mt-6 lg:mx-4">
            {workshops
              .filter((workshop) => workshop.group === group)
              .map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
          </Carousel>
        </section>
      ))}

      <section id="upcoming" className="page-container scroll-mt-24 py-16 lg:py-24" aria-labelledby="upcoming-heading">
        <div className="mx-auto max-w-[620px]">
          <SectionTitle as="h2" accent={w.upcomingAccent}>
            {w.upcomingTitle}
          </SectionTitle>
          <ul className="mt-6 border-t border-green/15">
            {upcoming.map(({ workshop, session }) => {
              const full = session.spotsLeft === 0;
              return (
                <li key={session.id} className="border-b border-green/15">
                  <Link to={`/workshops/${workshop.slug}?session=${session.id}`} className="grid grid-cols-[150px_1fr] items-center gap-4 py-4 transition hover:bg-beige-dark sm:grid-cols-[200px_1fr]">
                    <span className="font-sans text-[15px] text-green">{formatShortDate(session.date, locale)}</span>
                    <span className="flex flex-wrap items-center gap-2 font-sans text-[15px] font-bold text-green">
                      {workshop.shortTitle}
                      <span className="font-normal text-green-olive">· {session.time}</span>
                      <span className={["rounded-pill px-[8px] py-[1px] font-sans text-[10px] font-bold uppercase", full ? "bg-tomato text-white" : "bg-orange text-ink"].join(" ")}>
                        {full ? t.common.full : t.common.spots(session.spotsLeft)}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center font-sans text-[15px] leading-[26px] text-green-olive">
            {w.newsletterNote}
            <strong className="text-green">{w.newsletterNoteStrong}</strong>
          </p>
        </div>
      </section>

      <section className="page-container pb-20" aria-label={t.home.reviewsAria}>
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[44%_1fr]" aria-labelledby="private-heading">
        <div className="h-[300px] lg:h-[520px]">
          <img src={privateImage} alt={w.privateAlt} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex items-center bg-beige-dark px-4 py-14 sm:px-8 lg:px-[80px]">
          <div className="max-w-[560px]">
            <h2 id="private-heading" className="font-sans text-h2 text-green">
              {w.privateTitle}
            </h2>
            <p className="mt-4 font-sans text-body text-green-olive">{w.privateText}</p>
            <Button to="/private-workshops" arrow className="mt-7">
              {t.common.moreInformation}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
