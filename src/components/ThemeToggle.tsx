"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      aria-label="Toggle dark/light mode"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
