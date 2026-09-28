"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Button from "./Button";
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 500);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return (
    <Button
      size="icon"
      aria-label="Back to top"
      className="no-print fixed bottom-5 right-5 z-40 rounded-full"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={20} />
    </Button>
  );
}
