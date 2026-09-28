import { BookOpen } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import PublicationList from "@/components/PublicationList";
export const metadata = { title: "Publications" };
export default function Publications() {
  return (
    <>
      <PageHeading icon={BookOpen} title="Publications" subtitle="Journals, chapters, working papers and articles" />
      <PublicationList />
    </>
  );
}
