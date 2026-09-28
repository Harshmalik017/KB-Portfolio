import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer className="no-print bg-brand-700 text-white dark:bg-brand-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/15 p-2 hover:bg-white/25"
          >
            <Linkedin size={18} />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className="rounded-full bg-white/15 p-2 hover:bg-white/25"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
