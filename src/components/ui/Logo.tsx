import { Link } from "react-router-dom";

interface LogoProps {
  tone?: "light" | "dark";
  /** Height in px; the badge keeps its proportions */
  size?: number;
  className?: string;
}

/**
 * Circular hand-drawn style badge: arched studio window with a small tree,
 * the wordmark on two lines and "Casablanca" underneath.
 */
export default function Logo({ tone = "dark", size = 140, className = "" }: LogoProps) {
  const color = tone === "dark" ? "text-green" : "text-white";
  return (
    <Link to="/" aria-label="The Third Place — home" className={["inline-block shrink-0", color, className].join(" ")}>
      <svg viewBox="0 0 140 140" width={size} height={size} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M70 6c35 0 63 28 63 64s-28 64-63 64S7 106 7 70 35 6 70 6Z" strokeWidth="2.6" strokeDasharray="1 0 340 0 8 0 40" />
        <path d="M70 12c31 0 57 25 57 58s-26 58-57 58S13 103 13 70 39 12 70 12Z" strokeWidth="1" opacity="0.55" strokeDasharray="60 6 120 4 90 8" />
        {/* arch + tree mark */}
        <path d="M58 46V34a12 12 0 0 1 24 0v12" strokeWidth="2.2" />
        <path d="M55 46h30" strokeWidth="2.2" />
        <path d="M70 44V24" strokeWidth="2" />
        <path d="M70 30c-2.6-.4-4.8-2.6-5.2-5.2 2.8.4 5 2.6 5.2 5.2Z" strokeWidth="1.6" />
        <path d="M70 35c2.6-.4 4.8-2.6 5.2-5.2-2.8.4-5 2.6-5.2 5.2Z" strokeWidth="1.6" />
        <text x="70" y="76" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Oswald, 'Hesland Sans Rough', Impact, sans-serif" fontWeight="600" fontSize="22" letterSpacing="0.5">
          THE THIRD
        </text>
        <text x="70" y="99" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Oswald, 'Hesland Sans Rough', Impact, sans-serif" fontWeight="600" fontSize="22" letterSpacing="0.5">
          PLACE
        </text>
        <path d="M46 108h48" strokeWidth="1.2" strokeDasharray="2 3" />
        <text x="70" y="121" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Manrope, Ambit, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="2.4">
          CASABLANCA
        </text>
      </svg>
    </Link>
  );
}
