import SectionHeading from "@/components/ui/SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Header used by secondary pages so they share the homepage's editorial rhythm. */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-cream pb-14 pt-[132px] md:pb-16 md:pt-[150px]">
      <div className="page-container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          as="h1"
          titleClassName="text-[40px] leading-[1.08] md:text-display-lg"
          descriptionClassName="max-w-2xl text-[16px] leading-[1.75]"
        />
      </div>
    </section>
  );
}
