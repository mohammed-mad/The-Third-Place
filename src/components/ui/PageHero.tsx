import type { ReactNode } from "react";
import ScriptTitle from "@/components/ui/ScriptTitle";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  /** "center" for page heroes, "left" for the workshop detail hero */
  align?: "center" | "left";
  minHeight?: string;
  imagePosition?: string;
}

/** Full-width photo hero with a dark overlay and centred copy. */
export default function PageHero({ image, imageAlt, kicker, title, intro, children, align = "center", minHeight = "min-h-[560px] lg:min-h-[660px]", imagePosition = "object-center" }: PageHeroProps) {
  const centered = align === "center";
  return (
    <header className={["relative isolate flex w-full overflow-hidden bg-green", minHeight].join(" ")}>
      <img src={image} alt={imageAlt} className={["absolute inset-0 h-full w-full object-cover", imagePosition].join(" ")} fetchPriority="high" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className={["page-container relative flex flex-1 flex-col pb-16 pt-[190px] lg:pb-[100px] lg:pt-[190px]", centered ? "items-center text-center" : "items-start text-center lg:items-start"].join(" ")}>
        <ScriptTitle as="p">{kicker}</ScriptTitle>
        <h1 className="display mt-3 max-w-[820px] text-[44px] leading-[1] text-white sm:text-[52px] lg:text-[58px] lg:leading-[60px]">{title}</h1>
        {intro && <div className={["mt-6 max-w-[620px] font-sans text-[17px] leading-[28px] text-white lg:text-intro", centered ? "" : ""].join(" ")}>{intro}</div>}
        {children}
      </div>
    </header>
  );
}
