import { Hand, Home, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Usp {
  icon: LucideIcon;
  title: string;
  text: string;
}

const usps: Usp[] = [
  { icon: Hand, title: "Hands-on creativity", text: "Learn by making, not watching" },
  { icon: Users, title: "Small groups", text: "Personal guidance in every workshop" },
  { icon: Home, title: "A welcoming space", text: "Create, connect and slow down" },
];

export default function UspStrip() {
  return (
    <section className="bg-beige-dark" aria-label="Why The Third Place">
      <div className="page-container">
        <ul className="grid grid-cols-1 divide-y divide-dashed divide-green/25 md:grid-cols-3 md:divide-x md:divide-y-0">
          {usps.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center gap-6 px-4 py-8 md:px-8 lg:h-[149px] lg:px-14">
              <Icon className="h-11 w-11 shrink-0 text-green" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h4 className="font-sans text-h4 text-green">{title}</h4>
                <p className="mt-1 font-sans text-body text-green-olive">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
