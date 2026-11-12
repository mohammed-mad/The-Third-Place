import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { useT } from "@/i18n/LanguageContext";
import { useJournalPosts } from "@/i18n/useLocalizedData";

export default function Journal() {
  const t = useT();
  const posts = useJournalPosts();
  return (
    <section className="bg-beige-dark py-16 lg:pt-[72px] lg:pb-[104px]" aria-labelledby="home-journal">
      <div className="page-container">
        <SectionTitle as="h2" accent={t.home.journalAccent} align="center">
          {t.home.journalTitle}
        </SectionTitle>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to="/gallery" className="group block bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="aspect-[308/232] overflow-hidden">
                  <img src={post.image} alt={post.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                </div>
                <h4 className="p-5 pb-6 font-sans text-h4 text-green">{post.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button to="/gallery" variant="secondary">
            {t.common.allStories}
          </Button>
        </div>
      </div>
    </section>
  );
}
