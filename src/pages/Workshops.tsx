import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import PageHero from "@/components/ui/PageHero";
import ReviewsBlock from "@/components/ui/ReviewsBlock";
import SectionTitle from "@/components/ui/SectionTitle";
import WorkshopCard from "@/components/ui/WorkshopCard";
import { upcomingSessions, workshopGroups, workshopsByGroup } from "@/data/workshops";
import { formatShortDate } from "@/lib/format";
import studioImage from "@/assets/images/studio/studio.jpg";
import privateImage from "@/assets/images/gallery/gallery-1.jpg";

export default function Workshops() {
  return (
    <>
      <PageHero image={studioImage} imageAlt="The studio table set for a workshop" kicker="Open workshops" title={<>Learn a craft with your hands<br className="hidden lg:block" /> and surprise yourself</>} intro={<p>Open workshops are sessions you can join on your own or with a few friends. Groups are small, around eight to twelve people, so there is plenty of time for questions. New dates are added every month, so keep an eye on this page or sign up for the newsletter. Prefer your own group? Have a look at the <Link to="/private-workshops" className="text-orange underline-offset-2 hover:underline">private workshops</Link>.</p>}>
        <Button href="#upcoming" variant="secondary-light" className="mt-8">
          See upcoming dates
        </Button>
      </PageHero>

      {workshopGroups.map((group) => (
        <section key={group} className="page-padding mx-auto max-w-page pt-14 lg:pt-20" aria-labelledby={`group-${group}`}>
          <h2 id={`group-${group}`} className="font-sans text-h2 text-green lg:pl-4">
            {group}
          </h2>
          <Carousel ariaLabel={group} className="mt-6 lg:mx-4">
            {workshopsByGroup(group).map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </Carousel>
        </section>
      ))}

      <section id="upcoming" className="page-container scroll-mt-24 py-16 lg:py-24" aria-labelledby="upcoming-heading">
        <div className="mx-auto max-w-[620px]">
          <SectionTitle as="h2" accent="open workshops" className="[&_span]:underline-accent">
            Upcoming open workshops
          </SectionTitle>
          <ul className="mt-6 border-t border-green/15">
            {upcomingSessions().map(({ workshop, session }) => {
              const full = session.spotsLeft === 0;
              return (
                <li key={session.id} className="border-b border-green/15">
                  <Link to={`/workshops/${workshop.slug}?session=${session.id}`} className="grid grid-cols-[150px_1fr] items-center gap-4 py-4 transition hover:bg-beige-dark sm:grid-cols-[200px_1fr]">
                    <span className="font-sans text-[15px] text-green">{formatShortDate(session.date)}</span>
                    <span className="flex flex-wrap items-center gap-2 font-sans text-[15px] font-bold text-green">
                      {workshop.shortTitle}
                      <span className="font-normal text-green-olive">· {session.time}</span>
                      <span className={["rounded-pill px-[8px] py-[1px] font-sans text-[10px] font-bold uppercase", full ? "bg-tomato text-white" : "bg-orange text-ink"].join(" ")}>
                        {full ? "Full" : `${session.spotsLeft} spots`}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center font-sans text-[15px] leading-[26px] text-green-olive">
            Curious when new workshops go online? Sign up for the newsletter at the bottom of this page and you'll be the first to know. <strong className="text-green">New dates are published on the last Tuesday of every month.</strong>
          </p>
        </div>
      </section>

      <section className="page-container pb-20" aria-label="Reviews">
        <ReviewsBlock className="mx-auto max-w-[1220px]" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[44%_1fr]" aria-labelledby="private-heading">
        <div className="h-[300px] lg:h-[520px]">
          <img src={privateImage} alt="A group painting ceramics together at the studio table" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex items-center bg-beige-dark px-4 py-14 sm:px-8 lg:px-[80px]">
          <div className="max-w-[560px]">
            <h2 id="private-heading" className="font-sans text-h2 text-green">
              Private workshops
            </h2>
            <p className="mt-4 font-sans text-body text-green-olive">
              A craft or ceramic workshop is an original and relaxed way to spend time with a group of friends, family or colleagues. Team days, birthdays and bachelorette parties have all found their way to the studio. From six people we plan a date of your choice and put together a programme that fits your group.
            </p>
            <Button to="/private-workshops" arrow className="mt-7">
              More information
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
