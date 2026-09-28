import { Mic, Presentation } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import GlassCard from "@/components/GlassCard";
import Badge from "@/components/Badge";
import { lectures, conferences, type TalkItem } from "@/data/talks";
const Group = ({ title, icon: Icon, items }: { title: string; icon: typeof Mic; items: TalkItem[] }) => (
  <section className="mb-10">
    <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
      <Icon size={20} />
      {title}
    </h2>
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((i) => (
        <GlassCard key={i.title} interactive>
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold text-brand-600 dark:text-brand-300">{i.when}</p>
            {i.status && <Badge tone={i.status === "Presented" ? "green" : "brand"}>{i.status}</Badge>}
          </div>
          <p className="font-semibold">{i.title}</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{i.where}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);
export const metadata = { title: "Talks" };
export default function Talks() {
  return (
    <>
      <PageHeading icon={Mic} title="Talks & Conferences" />
      <Group title="Lectures" icon={Mic} items={lectures} />
      <Group title="Conference presentations" icon={Presentation} items={conferences} />
    </>
  );
}
