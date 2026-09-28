"use client";
import Button from "./Button";
export default function FilterPills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter">
      {options.map((o) => (
        <Button
          key={o}
          size="sm"
          variant={value === o ? "primary" : "secondary"}
          onClick={() => onChange(o)}
          className="rounded-full"
        >
          {o}
        </Button>
      ))}
    </div>
  );
}
