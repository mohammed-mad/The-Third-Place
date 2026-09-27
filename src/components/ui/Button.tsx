import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { to?: undefined; href?: undefined };
type ButtonAsLink = BaseProps & { to: string; href?: undefined; onClick?: () => void };
type ButtonAsAnchor = BaseProps & { href: string; to?: undefined; target?: string; rel?: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-sans font-medium transition duration-300 ease-out focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-ivory hover:bg-forest-hover hover:shadow-[0_8px_20px_-10px_rgba(25,75,50,0.6)]",
  outline: "border border-forest/70 bg-transparent text-forest hover:bg-forest hover:text-ivory",
  "outline-light": "border border-ivory/60 bg-white/5 text-ivory backdrop-blur-[2px] hover:bg-ivory/15 hover:border-ivory",
  ghost: "text-forest hover:bg-forest/5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[13px]",
  md: "h-12 px-7 text-[14px]",
  lg: "h-[52px] px-8 text-[15px]",
};

export const buttonClasses = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: Pick<BaseProps, "variant" | "size" | "fullWidth" | "className">) =>
  [base, variants[variant], sizes[size], fullWidth ? "w-full" : "", className].filter(Boolean).join(" ");

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant, size, arrow, fullWidth, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, fullWidth, className });
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-[15px] w-[15px] shrink-0" strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if ("to" in rest && rest.to) {
    const { to, onClick } = rest as ButtonAsLink;
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }
  if ("href" in rest && rest.href) {
    const { href, target, rel } = rest as ButtonAsAnchor;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button ref={ref} type={buttonProps.type ?? "button"} {...buttonProps} className={classes}>
      {content}
    </button>
  );
});

export default Button;
