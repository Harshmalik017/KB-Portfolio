"use client";
import { useEffect, useRef, useState } from "react";
import { RefreshCw, WifiOff } from "lucide-react";
import Button from "./Button";
export default function OfflineNotice() {
  const [offline, setOffline] = useState(false);
  const [checking, setChecking] = useState(false);
  const retryRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const off = () => setOffline(true),
      on = () => setOffline(false);
    setOffline(!navigator.onLine);
    window.addEventListener("offline", off);
    window.addEventListener("online", on);
    return () => {
      window.removeEventListener("offline", off);
      window.removeEventListener("online", on);
    };
  }, []);
  useEffect(() => {
    if (!offline) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOffline(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [offline]);
  const retry = async () => {
    setChecking(true);
    try {
      await fetch("/robots.txt", { cache: "no-store" });
      setOffline(false);
    } catch {
      /* still offline */
    }
    setChecking(false);
  };
  if (!offline) return null;
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="off-title"
      aria-describedby="off-desc"
      className="no-print fixed inset-0 z-[100] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center text-slate-800 shadow-2xl dark:bg-slate-900 dark:text-slate-100">
        <span className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300">
          <WifiOff size={32} />
        </span>
        <h2 id="off-title" className="text-lg font-semibold">
          No internet connection
        </h2>
        <p id="off-desc" className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          You appear to be offline. Some content may not load until you reconnect.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Button onClick={retry} disabled={checking}>
            <RefreshCw size={16} className={checking ? "animate-spin" : ""} />
            {checking ? "Checking…" : "Retry"}
          </Button>
          <Button variant="secondary" onClick={() => setOffline(false)}>
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  );
}
