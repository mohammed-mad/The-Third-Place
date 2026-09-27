import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="page-container pb-20 pt-[200px]">
      <h1 className="display text-[44px] leading-[1] text-green lg:text-[56px]">Page not found</h1>
      <p className="mt-4 font-sans text-body text-green-olive">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/" arrow className="mt-8">
        Back to the homepage
      </Button>
    </section>
  );
}
