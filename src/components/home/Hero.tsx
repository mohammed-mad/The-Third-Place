import Button from "@/components/ui/Button";
import ScriptTitle from "@/components/ui/ScriptTitle";
import heroImage from "@/assets/images/hero/hero.jpg";

export default function Hero() {
  return (
    <header className="relative isolate min-h-[640px] overflow-hidden bg-green lg:h-[818px]">
      <img src={heroImage} alt="Participants making ceramics at long wooden tables in the sunlit studio" className="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="page-container relative flex h-full min-h-[640px] flex-col justify-end pb-16 pt-40 lg:min-h-0 lg:justify-start lg:pb-0 lg:pt-[182px]">
        <div className="flex max-w-[600px] flex-col items-center text-center lg:ml-[44px]">
          <ScriptTitle as="p">Welcome</ScriptTitle>
          <h1 className="display mt-3 text-[44px] leading-[44px] text-white sm:text-[56px] sm:leading-[56px] lg:text-[66px] lg:leading-[66px]">
            Learn a craft with <br className="hidden lg:block" />
            your hands and <br className="hidden lg:block" />
            surprise yourself
          </h1>
          <p className="mt-7 font-sans text-[17px] leading-[28px] text-white lg:text-intro">
            A warm welcome to our studio in Casablanca, a place between home and work. Roll up your sleeves: we repair ceramics with gold, print with sunlight and build mosaics, tile by tile. Ready for a creative afternoon together?
          </p>
          <Button to="/workshops" arrow className="mt-8">
            See our workshops
          </Button>
        </div>
      </div>
    </header>
  );
}
