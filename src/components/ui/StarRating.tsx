import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, size = 16, className = "" }: StarRatingProps) {
  return (
    <div className={["flex items-center gap-[2px]", className].join(" ")} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} style={{ width: size, height: size }} className={index < rating ? "fill-orange text-orange" : "fill-beige-deeper text-beige-deeper"} strokeWidth={0} aria-hidden="true" />
      ))}
    </div>
  );
}
