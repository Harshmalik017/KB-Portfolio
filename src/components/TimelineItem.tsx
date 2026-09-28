"use client";
import { useState } from "react";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import type { Job } from "@/data/experience";
export default function TimelineItem({ job }: { job: Job }) {
  const collapsible = job.points.length > 1 || job.points.some((p) => p.length > 220);
  const [open, setOpen] = useState(!collapsible);
  const shown = open ? job.points : job.points.slice(0, 1);
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-6 grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-white">
        <Briefcase size={12} />
      </span>
      <GlassCard as="article" interactive>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">{job.role}</h3>
          {job.current && <Badge tone="green">Current</Badge>}
        </div>
        <p className="font-medium text-brand-700 dark:text-brand-300">{job.org}</p>
        <p className="mb-3 flex flex-wrap items-center gap-x-3 text-sm text-slate-700 dark:text-slate-300">
          <span>{job.period}</span>
          {job.place && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} />
              {job.place}
            </span>
          )}
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
          {shown.map((p) => (
            <li key={p} className={open ? "" : "line-clamp-3"}>
              {p}
            </li>
          ))}
        </ul>
        {collapsible && (
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300"
          >
            {open ? "Show less" : "Show more"}
            <ChevronDown size={14} className={open ? "rotate-180" : ""} />
          </button>
        )}
      </GlassCard>
    </div>
  );
}
