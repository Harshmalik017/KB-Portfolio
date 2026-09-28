"use client";
import { Children, useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
/** Scroll-snap carousel: swipe on touch, arrow buttons / arrow keys on desktop. Nav hides when everything fits. */
export default function Carousel({
  label,
  children,
  itemClass = "w-[85%] md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]",
}: {
  label: string;
  children: ReactNode;
  itemClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [can, setCan] = useState({ prev: false, next: false });
  const update = useCallback(() => {
    const el = ref.current;
    if (el) setCan({ prev: el.scrollLeft > 4, next: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
  }, []);
  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);
  const go = (d: 1 | -1) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.9, behavior: "smooth" });
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };
  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={ref}
        onScroll={update}
        onKeyDown={onKey}
        tabIndex={0}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-6 pt-1 focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
      >
        {Children.map(children, (c) => (
          <div
            role="group"
            aria-roledescription="slide"
            className={`flex shrink-0 snap-start [&>*]:w-full ${itemClass}`}
          >
            {c}
          </div>
        ))}
      </div>
      {(can.prev || can.next) && (
        <div className="-mt-2 flex justify-end gap-2">
          <Button variant="secondary" size="icon" aria-label="Previous" disabled={!can.prev} onClick={() => go(-1)}>
            <ChevronLeft size={20} />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Next" disabled={!can.next} onClick={() => go(1)}>
            <ChevronRight size={20} />
          </Button>
        </div>
      )}
    </div>
  );
}
