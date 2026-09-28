import type { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";
export default function EmptyState({
  icon: Icon,
  title,
  message,
  children,
}: {
  icon: LucideIcon;
  title: string;
  message?: string;
  children?: React.ReactNode;
}) {
  return (
    <GlassCard className="flex flex-col items-center gap-3 py-12 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300">
        <Icon size={32} />
      </span>
      <p className="text-lg font-semibold">{title}</p>
      {message && <p className="max-w-md text-sm text-slate-700 dark:text-slate-300">{message}</p>}
      {children && <div className="mt-2">{children}</div>}
    </GlassCard>
  );
}
