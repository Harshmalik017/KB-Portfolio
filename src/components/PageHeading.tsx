import { LucideIcon } from "lucide-react";
export default function PageHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg">
        <Icon size={24} />
      </span>
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        {subtitle && <p className="text-sm text-slate-700 dark:text-slate-300">{subtitle}</p>}
      </div>
    </div>
  );
}
