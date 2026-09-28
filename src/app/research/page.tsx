import { FolderOpen } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import ResourceList from "@/components/ResourceList";
import { resources } from "@/data/resources";
import { hasPublicFile } from "@/lib/assets";
export const metadata = { title: "Research & Resources" };
export default function Research() {
  const items = resources.map((r) => ({ ...r, fileMissing: !!r.file && !hasPublicFile(r.file.replace(/^\//, "")) }));
  return (
    <>
      <PageHeading
        icon={FolderOpen}
        title="Research & Resources"
        subtitle="Reports, presentations, policy briefs and papers"
      />
      <ResourceList items={items} />
    </>
  );
}
