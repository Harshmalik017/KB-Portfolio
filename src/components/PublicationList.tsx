"use client";
import { useMemo, useState } from "react";
import { CalendarDays, ExternalLink, FileText, Search, SearchX } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Button from "./Button";
import EmptyState from "./EmptyState";
import FilterPills from "./FilterPills";
import { publications, pubTypes } from "@/data/publications";
type Sort = "new" | "old" | "type";
export default function PublicationList() {
  const [f, setF] = useState<(typeof pubTypes)[number]>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("new");
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    const l = publications.filter(
      (p) =>
        (f === "All" || p.type === f) &&
        (!t || `${p.title} ${p.venue} ${p.coauthors ?? ""} ${p.year}`.toLowerCase().includes(t)),
    );
    return [...l].sort((a, b) =>
      sort === "old"
        ? a.year - b.year
        : sort === "type"
          ? a.type.localeCompare(b.type) || b.year - a.year
          : b.year - a.year,
    );
  }, [f, q, sort]);
  const groupKey = (p: (typeof list)[number]) => (sort === "type" ? p.type : String(p.year));
  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <label className="glass flex flex-1 items-center gap-2 px-3 py-2">
          <Search size={16} aria-hidden />
          <span className="sr-only">Search publications</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title, journal, co-author, year…"
            className="w-full bg-transparent text-sm placeholder:text-slate-700 focus:outline-none dark:placeholder:text-slate-400"
          />
        </label>
        <label className="glass flex items-center gap-2 px-3 py-2 text-sm">
          <span>Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="bg-transparent focus:outline-none"
          >
            <option value="new">Newest first</option>
            <option value="old">Oldest first</option>
            <option value="type">By type</option>
          </select>
        </label>
      </div>
      <div className="mb-6">
        <FilterPills options={pubTypes} value={f} onChange={setF} />
      </div>
      <p className="mb-4 text-sm text-slate-700 dark:text-slate-300" aria-live="polite">
        {list.length} result{list.length === 1 ? "" : "s"}
      </p>
      {list.length === 0 && (
        <EmptyState
          icon={SearchX}
          title="No publications found"
          message="Try a different search term or clear the filters."
        >
          <Button
            variant="secondary"
            onClick={() => {
              setQ("");
              setF("All");
            }}
          >
            Clear filters
          </Button>
        </EmptyState>
      )}
      {list.map((p, i) => (
        <div key={p.title}>
          {(i === 0 || groupKey(list[i - 1]) !== groupKey(p)) && (
            <h2 className="mb-3 mt-6 flex items-center gap-2 text-lg font-bold text-brand-700 dark:text-brand-300">
              {sort === "type" ? <FileText size={18} aria-hidden /> : <CalendarDays size={18} aria-hidden />}
              {groupKey(p)}
            </h2>
          )}
          <GlassCard as="article" interactive className="mb-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Badge>{p.type}</Badge>
              <span className="text-sm font-semibold">{p.year}</span>
            </div>
            <h3 className="font-semibold leading-snug">{p.title}</h3>
            <p className="text-sm italic text-slate-700 dark:text-slate-300">{p.venue}</p>
            {p.coauthors && (
              <p className="text-xs">
                {p.firstAuthor ? "First author, with " : "with "}
                {p.coauthors}
              </p>
            )}
            {p.link && (
              <div>
                <Button href={p.link} target="_blank" variant="secondary" size="sm">
                  Read <ExternalLink size={14} />
                </Button>
              </div>
            )}
          </GlassCard>
        </div>
      ))}
    </>
  );
}
