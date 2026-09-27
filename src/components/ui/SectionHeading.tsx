import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowClassName = "text-forest",
  titleClassName = "",
  descriptionClassName = "",
  className = "",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={[centered ? "mx-auto text-center" : "text-left", className].join(" ")}>
      <p className={["eyebrow mb-4", eyebrowClassName].join(" ")}>{eyebrow}</p>
      <Heading className={["font-serif font-semibold text-ink", titleClassName].join(" ")}>{title}</Heading>
      {description && (
        <p className={["mt-4 font-sans text-ink-muted", descriptionClassName].join(" ")}>{description}</p>
      )}
    </div>
  );
}
