import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import studioImage from "@/assets/images/studio/studio.jpg";

export default function StudioSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2" aria-labelledby="home-studio">
      <div className="h-[320px] sm:h-[440px] lg:h-[590px]">
        <img src={studioImage} alt="The studio's long wooden table under tall arched windows, surrounded by plants and shelves of ceramics" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="flex items-center bg-beige-dark px-4 py-14 sm:px-8 lg:px-0 lg:py-0">
        <div className="max-w-[528px] lg:ml-[110px]">
          <SectionTitle as="h2" accent="lovely objects">
            Making together brings more than lovely objects
          </SectionTitle>
          <p className="mt-5 font-sans text-body text-green-olive">
            We all need a third place: not home, not work, but somewhere in between where you can slow down, use your hands and meet people. The studio is exactly that. A generous table, good light, tea on the stove and a host who shows you how, then lets you find your own way.
            <br />
            Whether you're a complete beginner or have experience, you're always welcome here. And the best conversations happen while your hands are busy.
          </p>
          <Button to="/about" variant="secondary" className="mt-7">
            More about the studio
          </Button>
        </div>
      </div>
    </section>
  );
}
