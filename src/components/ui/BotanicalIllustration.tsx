interface BotanicalIllustrationProps {
  className?: string;
}

/** Decorative line-art sprig used in the studio section and footer. */
export default function BotanicalIllustration({ className = "" }: BotanicalIllustrationProps) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 196c14-40 38-84 84-134" />
      <path d="M92 74c-14 3-26-5-30-18 14-3 27 4 30 18Z" />
      <path d="M92 74c8-12 4-27-6-36 9 7 14 22 6 36Z" />
      <path d="M70 100c-14 6-29-1-36-14 15-4 30 2 36 14Z" />
      <path d="M70 100c4-14-1-29-12-36 11 4 19 21 12 36Z" />
      <path d="M50 130c-15 4-29-3-33-16 14-4 28 3 33 16Z" />
      <path d="M50 130c6-14 2-30-9-38 12 5 18 24 9 38Z" />
      <path d="M36 162c-13 7-30 1-36-12 14-5 30 0 36 12Z" />
      <path d="M36 162c8-12 6-29-5-38 12 4 16 24 5 38Z" />
      <path d="M106 40c10-16 30-24 46-20-6 18-24 30-46 20Z" />
      <path d="M106 40c16-6 32 0 44 12" opacity="0.7" />
      <path d="M120 96c8-14 26-20 40-16-5 16-22 26-40 16Z" />
      <path d="M120 96c14-5 28 0 38 10" opacity="0.7" />
      <path d="M128 132c6-12 20-18 32-14-4 13-18 20-32 14Z" />
      <path d="M106 40c6 20 12 46 22 92" opacity="0.8" />
    </svg>
  );
}
