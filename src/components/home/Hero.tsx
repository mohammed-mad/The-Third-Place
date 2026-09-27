import Button from "@/components/ui/Button";
import heroImage from "@/assets/images/hero/hero.jpg";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-ink lg:h-[740px]" aria-labelledby="hero-heading">
      <img
        src={heroImage}
        alt="A smiling woman repairs a ceramic bowl with gold in a sunlit workshop while other participants work at wooden tables behind her"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-center"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1c1710]/90 via-[#1c1710]/55 via-42% to-transparent lg:from-[#1c1710]/85"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1c1710]/40 to-transparent" aria-hidden="true" />

      <div className="page-container relative flex h-full min-h-[640px] flex-col justify-end pb-16 pt-32 lg:min-h-0 lg:justify-start lg:pb-0 lg:pt-[212px] lg:pl-[95px]">
        <div className="max-w-[640px] lg:max-w-[720px]">
          <p className="eyebrow text-[15px] font-semibold tracking-[0.26em] text-ivory/95">A creative workshop studio</p>
          <h1
            id="hero-heading"
            className="mt-4 font-serif font-semibold uppercase text-ivory text-[44px] leading-[1.06] tracking-[0.01em] sm:text-[58px] lg:mt-[12px] lg:text-[74px] lg:leading-[1.1] lg:whitespace-nowrap"
          >
            Make. Connect.
            <br />
            Create.
          </h1>
          <p className="mt-5 max-w-[560px] font-sans text-[15.5px] leading-[1.8] text-ivory/90 lg:mt-[20px] lg:text-[18px] lg:font-medium lg:leading-[1.8]">
            Step away from the everyday and discover hands-on creative workshops in a welcoming space. Learn
            Kintsugi, Cyanotype, Mosaic Art and more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-[46px] lg:gap-[22px]">
            <Button to="/workshops" size="lg" arrow className="h-[54px] px-[38px] text-[15.5px]">
              Explore Workshops
            </Button>
            <Button to="/workshops" variant="outline-light" size="lg" className="h-[54px] px-[42px] text-[15.5px]">
              Book Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
