interface Stat {
  label: string;
  value: string;
}

/** White strip with three labelled facts (price, duration, people). */
export default function InfoStats({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <dl className={["grid grid-cols-3 divide-x divide-green/10 rounded-[4px] bg-white shadow-float", className].join(" ")}>
      {stats.map((stat) => (
        <div key={stat.label} className="px-4 py-[14px] text-center">
          <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-tomato">{stat.label}</dt>
          <dd className="mt-1 font-sans text-[15px] font-medium text-green">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
