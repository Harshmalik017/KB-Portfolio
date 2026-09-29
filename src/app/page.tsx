import Image from "next/image";
import {
  ArrowRight,
  Brain,
  BookOpen,
  Building2,
  Download,
  FileX,
  GraduationCap,
  Landmark,
  Network,
  Sparkles,
} from "lucide-react";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import GlassCard from "@/components/GlassCard";
import Badge from "@/components/Badge";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { conferences } from "@/data/talks";
import { experience } from "@/data/experience";
import { hasPublicFile } from "@/lib/assets";
const areaIcons = [Landmark, Network, Building2, Brain];
export default function Home() {
  const stats = [
    { label: "Years of experience", value: profile.yearsExperience },
    { label: "Organisations", value: String(profile.organisations) },
    { label: "Publications", value: String(publications.length) },
    { label: "Conference papers", value: String(conferences.length) },
  ];
  const photo = hasPublicFile("kaushik-b.png");
  const cv = hasPublicFile("CV.pdf");
  const current = experience.find((e) => e.current);
  return (
    <div className="space-y-8">
      <GlassCard className="py-10 text-center sm:py-16">
        {photo ? (
          <Image
            src="/kaushik-b.png"
            alt={profile.name}
            width={192}
            height={192}
            priority
            className="mx-auto mb-5 h-48 w-48 rounded-full border-4 border-white/60 object-cover shadow-lg"
          />
        ) : (
          <div
            className="mx-auto mb-5 grid h-48 w-48 place-items-center rounded-full bg-brand-600 text-3xl font-bold text-white shadow-lg"
            aria-hidden
          >
            KB
          </div>
        )}
        <p className="text-sm font-medium uppercase tracking-widest text-brand-700 dark:text-brand-300">Dr.</p>
        <h1 className="text-3xl font-extrabold sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">{profile.title}</p>
        <p className="mx-auto mt-5 max-w-3xl leading-relaxed">{profile.summary}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/experience">
            View experience <ArrowRight size={16} />
          </Button>
          {cv ? (
            <Button href="/CV.pdf" download variant="secondary">
              <Download size={16} />
              Download CV
            </Button>
          ) : (
            <Button variant="secondary" disabled title="The CV file has not been uploaded yet">
              <FileX size={16} />
              CV not uploaded yet
            </Button>
          )}
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <GlassCard key={s.label} className="text-center">
            <p className="text-3xl font-extrabold text-brand-700 dark:text-brand-300">{s.value}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">{s.label}</p>
          </GlassCard>
        ))}
      </div>

      {current && (
        <GlassCard className="flex flex-col gap-2 border-l-4 border-l-brand-600">
          <Badge tone="green">Currently</Badge>
          <p className="text-lg font-semibold">
            {current.role} at {current.org.split(",")[0]}
          </p>
          <p className="text-sm">{current.points[0].slice(0, 200)}…</p>
          <Button href="/experience" variant="secondary" size="sm" className="w-fit">
            Full experience <ArrowRight size={14} />
          </Button>
        </GlassCard>
      )}

      <section aria-labelledby="areas">
        <h2 id="areas" className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Landmark size={20} aria-hidden />
          Research areas
        </h2>
        <Carousel label="Research areas" itemClass="w-[80%] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
          {profile.researchAreas.map((a, i) => {
            const Icon = areaIcons[i];
            return (
              <GlassCard
                key={a.title}
                interactive
                className="!border-brand-500 !bg-brand-600 text-white"
              >
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-700 shadow-sm">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-white/85">{a.text}</p>
              </GlassCard>
            );
          })}
        </Carousel>
      </section>

      <section aria-labelledby="latest">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id="latest" className="flex items-center gap-2 text-xl font-semibold">
            <BookOpen size={20} aria-hidden />
            Latest publications
          </h2>
          <Button href="/publications" variant="secondary" size="sm">
            All publications <ArrowRight size={14} />
          </Button>
        </div>
        <Carousel label="Latest publications">
          {publications.slice(0, 6).map((p) => (
            <GlassCard key={p.title} as="article" interactive className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Badge>{p.type}</Badge>
                <span className="text-sm font-semibold">{p.year}</span>
              </div>
              <h3 className="font-semibold leading-snug">{p.title}</h3>
              <p className="text-sm italic text-slate-700 dark:text-slate-300">{p.venue}</p>
            </GlassCard>
          ))}
        </Carousel>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <GraduationCap size={20} aria-hidden /> Education
          </h2>
          <ul className="space-y-4">
            {profile.education.map((e) => (
              <li key={e.degree} className="border-l-2 border-brand-500 pl-4">
                <p className="text-xs font-semibold text-brand-700 dark:text-brand-300">{e.year}</p>
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm">{e.inst}</p>
                <p className="text-sm italic text-slate-700 dark:text-slate-300">{e.note}</p>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Sparkles size={20} aria-hidden /> Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
