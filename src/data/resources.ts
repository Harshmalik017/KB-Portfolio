export type ResourceType = "Report" | "Presentation" | "Paper" | "Policy Brief" | "Other";
export type Resource = {
  title: string;
  type: ResourceType;
  year: number;
  org?: string;
  summary: string;
  /** Path under /public, e.g. "/documents/reports/2024-food-inflation.pdf" */
  file?: string;
  /** External URL (used if no file) */
  link?: string;
};
export const resourceTypes = ["All", "Report", "Presentation", "Paper", "Policy Brief", "Other"] as const;
// Add entries here as documents are shared, e.g.:
// { title: "Union Budget 2023-24 for Children", type: "Report", year: 2023, org: "UNICEF", summary: "…", file: "/documents/reports/2023-union-budget-children.pdf" },
export const resources: Resource[] = [];
