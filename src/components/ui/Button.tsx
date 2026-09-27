import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

type Variant = "primary" | "secondary" | "secondary-light" | "yellow" | "white" | "green";
type Size = "md" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { to?: undefined; href?: undefined };
type AsLink = BaseProps & { to: string; href?: undefined; onClick?: () => void };
type AsAnchor = BaseProps & { href: string; to?: undefined; target?: string; rel?: string; download?: string; onClick?: () => void };

export type ButtonProps = AsButton | AsLink | AsAnchor;

const base =
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-pill font-sans font-bold transition duration-300 ease-out disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-tomato text-white hover:bg-tomato-hover hover:-translate-y-0.5",
  secondary: "border-[1.5px] border-green text-green hover:bg-green hover:text-white",
  "secondary-light": "border-[1.5px] border-white text-white hover:bg-white hover:text-green",
  yellow: "bg-orange text-ink hover:bg-orange-light",
  white: "bg-white text-green hover:bg-beige-dark",
  green: "bg-green text-white hover:bg-green-olive",
};

const sizes: Record<Size, string> = {
  md: "min-h-[54px] px-8 py-[12px] text-[18px] leading-[28.8px]",
  sm: "min-h-[38px] px-[19px] py-[6px] text-[16px] leading-[25.6px]",
};

export const buttonClasses = ({ variant = "primary", size = "md", fullWidth = false, className = "" }: Pick<BaseProps, "variant" | "size" | "fullWidth" | "className">) =>
  [base, variants[variant], sizes[size], fullWidth ? "w-full" : "", className].filter(Boolean).join(" ");

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant, size, arrow, fullWidth, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, fullWidth, className });
  const content = (
    <>
      <span>{children}</span>
      {arrow && <MoveRight className="h-5 w-5 shrink-0" strokeWidth={2.2} aria-hidden="true" />}
    </>
  );
  if ("to" in rest && rest.to) {
    const { to, onClick } = rest as AsLink;
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }
  if ("href" in rest && rest.href) {
    const { href, target, rel, download, onClick } = rest as AsAnchor;
    return (
      <a href={href} target={target} rel={rel} download={download} onClick={onClick} className={classes}>
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
