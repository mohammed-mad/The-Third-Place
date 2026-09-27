import Button from "@/components/ui/Button";
import BotanicalIllustration from "@/components/ui/BotanicalIllustration";
import studioImage from "@/assets/images/studio/studio.jpg";

export default function StudioSection() {
  return (
    <section className="bg-cream" aria-labelledby="studio-heading">
      <div className="grid grid-cols-1 lg:grid-cols-[51.7%_1fr]">
        <div className="relative h-[320px] overflow-hidden sm:h-[420px] lg:h-[662px]">
          <img
            src={studioImage}
            alt="A bright creative studio with a long wooden table, stools, shelves of ceramics, plants and tall arched windows"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative flex items-center overflow-hidden px-4 py-14 sm:px-8 lg:px-0 lg:py-0">
          <BotanicalIllustration className="pointer-events-none absolute bottom-[4px] right-[48px] hidden h-[200px] w-auto text-forest/70 lg:block" />
          <div className="relative w-full max-w-[604px] lg:pl-[78px] lg:pr-0">
            <p className="eyebrow text-forest">Our Studio</p>
            <h2 id="studio-heading" className="mt-4 font-serif text-[36px] font-semibold leading-[1.1] text-ink lg:mt-[14px] lg:text-[54px]">
              More than a workshop.
            </h2>
            <div className="mt-6 space-y-5 font-sans text-[16.5px] leading-[1.9] text-ink-muted lg:mt-[24px] lg:space-y-[22px]">
              <p>
                The Third Place is a space between home and work — somewhere to slow down, be creative and connect
                with others.
              </p>
              <p>
                We believe in the power of making with your hands. Our workshops bring people together to learn new
                skills, explore their creativity and take a break from the digital world.
              </p>
              <p>Whether you're a complete beginner or have experience, you're always welcome here.</p>
            </div>
            <Button to="/about" variant="outline" arrow className="mt-8 h-[50px] px-[34px] text-[15px] lg:mt-[34px]">
              Discover Our Studio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
