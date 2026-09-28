export default function Badge({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "green" }) {
  const t =
    tone === "green"
      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
      : "bg-brand-500/15 text-brand-700 dark:text-brand-200";
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${t}`}>{children}</span>;
}
