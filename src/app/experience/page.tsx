import { Briefcase } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import TimelineItem from "@/components/TimelineItem";
import GlassCard from "@/components/GlassCard";
import { experience, consultancies } from "@/data/experience";
export const metadata = { title: "Experience" };
export default function Experience() {
  return (
    <>
      <PageHeading icon={Briefcase} title="Experience" subtitle="UNICEF, UNDP, IBP, UCSD, NIPFP and more" />
      <div className="relative space-y-5 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-brand-500/40">
        {experience.map((j) => (
          <TimelineItem key={j.role + j.period} job={j} />
        ))}
      </div>
      <h2 className="mb-4 mt-12 text-xl font-semibold">Short-term research consultancy</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {consultancies.map((c) => (
          <GlassCard key={c.org} interactive>
            <p className="font-semibold">{c.org}</p>
            <p className="text-xs text-brand-600 dark:text-brand-300">{c.when}</p>
            <p className="mt-1 text-sm">{c.what}</p>
          </GlassCard>
        ))}
      </div>
    </>
  );
}
