export default function Legal({ title }: { title: "Privacy policy" | "Terms & conditions" }) {
  return (
    <section className="page-container pb-20 pt-[200px]">
      <h1 className="display text-[44px] leading-[1] text-green lg:text-[56px]">{title}</h1>
      <p className="mt-6 max-w-3xl font-sans text-body text-green-olive">This page is a placeholder for The Third Place's {title.toLowerCase()}. Final wording will be provided by the studio before launch.</p>
    </section>
  );
}
