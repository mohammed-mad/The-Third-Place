import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="Page not found" description="The page you're looking for doesn't exist or has moved." />
      <section className="bg-ivory py-16">
        <div className="page-container">
          <Button to="/" arrow>
            Back to the homepage
          </Button>
        </div>
      </section>
    </>
  );
}
