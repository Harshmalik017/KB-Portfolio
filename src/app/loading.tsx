export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="space-y-4">
      <div className="glass h-16 w-2/3 animate-pulse" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="glass h-32 animate-pulse" />
      ))}
    </div>
  );
}
