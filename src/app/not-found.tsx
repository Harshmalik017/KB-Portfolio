import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
export default function NotFound() {
  return (
    <GlassCard className="mx-auto max-w-lg py-12 text-center">
      <p className="text-6xl font-extrabold text-brand-700 dark:text-brand-300">404</p>
      <h1 className="mt-2 text-xl font-semibold">Page not found</h1>
      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">The page you are looking for does not exist.</p>
      <Button href="/" className="mt-6">
        Back to home
      </Button>
    </GlassCard>
  );
}
