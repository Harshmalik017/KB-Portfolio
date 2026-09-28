import { ReactNode } from "react";
export default function GlassCard({
  children,
  className = "",
  as: Tag = "div",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  interactive?: boolean;
}) {
  return <Tag className={`glass p-5 sm:p-6 ${interactive ? "glass-hover" : ""} ${className}`}>{children}</Tag>;
}
