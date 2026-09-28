"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Linkedin, Mail, Menu, X } from "lucide-react";
import { nav, profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
export default function Header({ hasCv = false }: { hasCv?: boolean }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", esc);
    };
  }, [open]);
  const active = (href: string) => path === href;
  return (
    <header className="no-print sticky top-0 z-50 bg-brand-700 text-white shadow-lg shadow-brand-950/30 dark:bg-brand-900">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={`border-b-2 px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${active(n.href) ? "border-white" : "border-transparent"}`}
            >
              {n.label}
            </Link>
          ))}
          {hasCv && (
            <Button href="/CV.pdf" download variant="secondary" size="sm" className="ml-2">
              <Download size={14} />
              CV
            </Button>
          )}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/15 hover:bg-white/25 lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-[visibility] duration-300 lg:hidden ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        <button
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          id="mobile-menu"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col bg-brand-700 text-white shadow-2xl transition-transform duration-300 dark:bg-brand-900 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/15 px-4">
            <span className="font-bold">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/15 hover:bg-white/25"
            >
              <X size={18} />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active(n.href) ? "page" : undefined}
                className={`rounded-lg border-l-4 px-3 py-3 font-medium transition hover:bg-white/10 ${active(n.href) ? "border-white bg-white/15" : "border-transparent"}`}
              >
                {n.label}
              </Link>
            ))}
            {hasCv && (
              <Button href="/CV.pdf" download variant="secondary" className="mt-3">
                <Download size={16} />
                Download CV
              </Button>
            )}
          </nav>
          <div className="flex justify-center gap-3 border-t border-white/15 p-4">
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
        </aside>
      </div>
    </header>
  );
}
