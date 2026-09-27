import type { ReactNode } from "react";

interface ScriptTitleProps {
  children: ReactNode;
  className?: string;
  dashes?: boolean;
  as?: "p" | "span" | "h1" | "h2";
}

/** Handwritten orange label, optionally between two short dashes. */
export default function ScriptTitle({ children, className = "", dashes = true, as: Tag = "p" }: ScriptTitleProps) {
  return (
    <Tag className={[dashes ? "script-title" : "font-script text-script text-orange", className].join(" ")}>{children}</Tag>
  );
}
