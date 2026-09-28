"use client";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <GlassCard className="mx-auto max-w-lg py-12 text-center">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <Button onClick={reset} className="mt-6">
        Try again
      </Button>
    </GlassCard>
  );
}
