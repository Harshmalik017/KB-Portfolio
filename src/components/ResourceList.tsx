"use client";
import { useState } from "react";
import {
  BookOpen,
  Download,
  ExternalLink,
  File,
  FileBarChart,
  FileText,
  FileX,
  FolderOpen,
  Presentation,
  SearchX,
  type LucideIcon,
} from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Button from "./Button";
import EmptyState from "./EmptyState";
import FilterPills from "./FilterPills";
import { resourceTypes, type Resource, type ResourceType } from "@/data/resources";
export type ResourceItem = Resource & { fileMissing?: boolean };
const icons: Record<ResourceType, LucideIcon> = {
  Report: FileBarChart,
  Presentation,
  Paper: BookOpen,
  "Policy Brief": FileText,
  Other: File,
};
export default function ResourceList({ items }: { items: ResourceItem[] }) {
  const [f, setF] = useState<(typeof resourceTypes)[number]>("All");
  if (items.length === 0)
    return (
      <EmptyState
        icon={FolderOpen}
        title="No documents uploaded yet"
        message="Reports, presentations and papers will appear here once the files are uploaded."
      />
    );
  const list = items.filter((r) => f === "All" || r.type === f).sort((a, b) => b.year - a.year);
  return (
    <>
      <div className="mb-6">
        <FilterPills options={resourceTypes} value={f} onChange={setF} />
      </div>
      {list.length === 0 ? (
        <EmptyState
          icon={SearchX}
          title={`No ${f.toLowerCase()} documents yet`}
          message="Nothing has been uploaded in this category."
        >
          <Button variant="secondary" onClick={() => setF("All")}>
            Show all documents
          </Button>
        </EmptyState>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => {
            const Icon = icons[r.type];
            return (
              <GlassCard key={r.title} as="article" interactive className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                    <Icon size={20} />
                  </span>
                  <Badge>
                    {r.type} · {r.year}
                  </Badge>
                </div>
                <h3 className="font-semibold leading-snug">{r.title}</h3>
                {r.org && <p className="text-xs font-medium text-brand-700 dark:text-brand-300">{r.org}</p>}
                <p className="text-sm">{r.summary}</p>
                <div className="mt-auto pt-3">
                  {r.file && r.fileMissing ? (
                    <Button variant="secondary" size="sm" disabled title="This file has not been uploaded yet">
                      <FileX size={14} />
                      File not uploaded yet
                    </Button>
                  ) : r.file ? (
                    <Button href={r.file} download size="sm">
                      <Download size={14} />
                      Download
                    </Button>
                  ) : r.link ? (
                    <Button href={r.link} target="_blank" size="sm">
                      <ExternalLink size={14} />
                      View
                    </Button>
                  ) : (
                    <Button variant="secondary" size="sm" disabled>
                      <FileX size={14} />
                      No file attached
                    </Button>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}
    </>
  );
}
