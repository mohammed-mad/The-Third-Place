import PageHeader from "@/components/ui/PageHeader";

interface LegalProps {
  title: "Privacy Policy" | "Terms of Service";
}

export default function Legal({ title }: LegalProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} />
      <section className="bg-ivory py-16">
        <div className="page-container max-w-3xl font-sans text-[15px] leading-[1.85] text-ink-muted">
          <p>
            This page is a placeholder for The Third Place's {title.toLowerCase()}. Final wording will be provided by the
            studio before launch.
          </p>
        </div>
      </section>
    </>
  );
}
