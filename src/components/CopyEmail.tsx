"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Button from "./Button";
export default function CopyEmail({ email }: { email: string }) {
  const [ok, setOk] = useState(false);
  return (
    <Button
      size="sm"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setOk(true);
          setTimeout(() => setOk(false), 2000);
        } catch {
          /* clipboard blocked */
        }
      }}
    >
      {ok ? <Check size={14} /> : <Copy size={14} />}
      {ok ? "Copied" : "Copy email"}
    </Button>
  );
}
