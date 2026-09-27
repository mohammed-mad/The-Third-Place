import Button from "@/components/ui/Button";
import ctaImage from "@/assets/images/cta/cta.jpg";

export default function BookingCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink lg:h-[444px]" aria-labelledby="cta-heading">
      <img
        src={ctaImage}
        alt="A kintsugi bowl with gold seams beside a jar of paintbrushes and dried flowers on a wooden table"
        className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1710]/40 to-transparent lg:hidden" aria-hidden="true" />

      <div className="page-container relative flex h-full items-center justify-end py-16 lg:py-0">
        <div className="w-full max-w-[632px] rounded-panel bg-[#F6F1E6] p-8 shadow-panel sm:p-12 lg:px-[56px] lg:py-[54px]">
          <p className="eyebrow text-clay">Ready to create?</p>
          <h2 id="cta-heading" className="mt-4 font-serif text-[34px] font-semibold leading-[1.1] text-ink lg:mt-[12px] lg:text-[46px]">
            Book Your Next Workshop
          </h2>
          <p className="mt-4 max-w-[470px] font-sans text-[16.5px] leading-[1.8] text-ink-muted lg:mt-[16px]">
            Join our creative community and discover the joy of making something with your own hands.
          </p>
          <Button to="/workshops" arrow className="mt-7 h-[50px] px-[32px] text-[14.5px] lg:mt-[30px]">
            Explore Workshops
          </Button>
        </div>
      </div>
    </section>
  );
}
