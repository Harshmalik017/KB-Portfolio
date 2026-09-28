import Link from "next/link";
import type { ReactNode } from "react";
type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "icon";
const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
const variants: Record<Variant, string> = {
  // Primary: theme-filled background, white text
  primary: "bg-brand-600 text-white shadow-md shadow-brand-900/25 hover:bg-brand-700 active:bg-brand-800",
  // Secondary: white background, theme-coloured text
  secondary: "border border-brand-200 bg-white text-brand-700 shadow-sm hover:bg-brand-50 active:bg-brand-100",
};
const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  icon: "h-11 w-11",
};
export const buttonClass = (variant: Variant = "primary", size: Size = "md", extra = "") =>
  `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  "aria-label"?: string;
};
export default function Button({
  variant,
  size,
  className,
  children,
  href,
  download,
  target,
  rel,
  type = "button",
  ...rest
}: Props) {
  const cls = buttonClass(variant, size, className);
  if (href && !rest.disabled) {
    if (href.startsWith("/") && !download)
      return (
        <Link href={href} className={cls} {...rest}>
          {children}
        </Link>
      );
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel ?? (target ? "noreferrer" : undefined)}
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
