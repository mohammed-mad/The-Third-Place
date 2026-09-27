import { Link } from "react-router-dom";

interface LogoProps {
  /** "dark" for light backgrounds, "light" for the forest-green footer */
  tone?: "dark" | "light";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

/** Brand mark: an arched studio window with a small tree inside. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 36V17a12 12 0 0 1 24 0v19" />
      <path d="M5.5 36h29" />
      <path d="M11.5 36V18.5a8.5 8.5 0 0 1 17 0V36" strokeWidth="1.1" opacity="0.7" />
      <path d="M20 33V15" />
      <path d="M20 20c-2.6-.4-5-2.8-5.4-5.6 2.8.4 5 2.8 5.4 5.6Z" />
      <path d="M20 25c2.6-.4 5-2.8 5.4-5.6-2.8.4-5 2.8-5.4 5.6Z" />
      <path d="M20 29c-2.2-.3-4.2-2.3-4.6-4.8 2.4.4 4.3 2.4 4.6 4.8Z" />
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  className = "",
  iconClassName = "h-9 w-9",
  textClassName = "text-[19px]",
}: LogoProps) {
  const color = tone === "dark" ? "text-forest" : "text-ivory";
  const text = tone === "dark" ? "text-ink" : "text-ivory";
  return (
    <Link to="/" className={["inline-flex items-center gap-2.5", className].join(" ")} aria-label="The Third Place — home">
      <span className={color}>
        <LogoMark className={iconClassName} />
      </span>
      <span className={["font-serif font-medium leading-none tracking-[0.005em]", text, textClassName].join(" ")}>
        The Third Place
      </span>
    </Link>
  );
}
