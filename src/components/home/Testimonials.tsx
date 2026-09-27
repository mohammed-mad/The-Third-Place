import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-ivory pb-4 pt-16 lg:pb-[20px] lg:pt-[78px]" aria-labelledby="testimonials-heading">
      <div className="page-container">
        <SectionHeading
          eyebrow="What People Say"
          align="center"
          title={<span id="testimonials-heading">A Creative Community</span>}
          titleClassName="text-[36px] lg:text-[54px] leading-[1.1]"
        />

        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6 lg:mx-0 lg:mt-[30px] lg:grid lg:grid-cols-3 lg:gap-[30px] lg:overflow-visible lg:px-0">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.id}
              className="flex w-[300px] shrink-0 snap-start flex-col rounded-card border border-line bg-[#FCFAF5] p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover sm:w-[360px] lg:w-auto lg:p-[30px] lg:pb-[28px]"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1 whitespace-pre-line font-sans text-[17px] leading-[1.85] text-ink lg:mt-[12px]">
                “{testimonial.quote}”
              </blockquote>
              <figure className="mt-6 flex items-center gap-3 lg:mt-[20px]">
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="h-[46px] w-[46px] rounded-pill object-cover"
                  loading="lazy"
                />
                <figcaption className="font-sans text-[13.5px] font-semibold text-ink">{testimonial.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
