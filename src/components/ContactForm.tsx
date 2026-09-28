"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Button from "./Button";
const field =
  "w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400";
export default function ContactForm({ email }: { email: string }) {
  const [f, setF] = useState({ name: "", from: "", message: "" });
  const on = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name} (${f.from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Portfolio enquiry from " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name
          <input required value={f.name} onChange={on("name")} className={`${field} mt-1`} />
        </label>
        <label className="text-sm font-medium">
          Your email
          <input required type="email" value={f.from} onChange={on("from")} className={`${field} mt-1`} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message
        <textarea required rows={5} value={f.message} onChange={on("message")} className={`${field} mt-1`} />
      </label>
      <Button type="submit">
        <Send size={16} />
        Send via email app
      </Button>
      <p className="text-xs text-slate-700 dark:text-slate-300">
        Opens your email app with the message pre-filled; nothing is stored on this site.
      </p>
    </form>
  );
}
