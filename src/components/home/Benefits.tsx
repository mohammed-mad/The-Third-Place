import { HandHeart, Home, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: HandHeart, title: "Hands-on Creativity", description: "Learn by making" },
  { icon: Users, title: "Small Groups", description: "Personal guidance in every workshop" },
  { icon: Home, title: "A Welcoming Space", description: "Create, connect and slow down" },
];

export default function Benefits() {
  return (
    <section className="bg-cream" aria-label="Why The Third Place">
      <div className="page-container">
        <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:py-[48px]">
          {benefits.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col items-center px-6 py-8 text-center sm:py-2 lg:py-[6px]">
              <Icon className="h-[42px] w-[42px] text-forest" strokeWidth={1.4} aria-hidden="true" />
              <h3 className="mt-[14px] font-serif text-[23px] font-medium leading-tight text-ink">{title}</h3>
              <p className="mt-[8px] font-sans text-[15px] text-ink-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
