import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className = "" }: StarRatingProps) {
  return (
    <div className={["flex items-center gap-[3px]", className].join(" ")} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={["h-[15px] w-[15px]", index < rating ? "fill-gold text-gold" : "fill-line text-line"].join(" ")}
          strokeWidth={0}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
