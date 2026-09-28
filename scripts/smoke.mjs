// Smoke test: starts `next start` and checks every route. Run after `npm run build`.
import { spawn } from "node:child_process";
const port = 3111,
  base = `http://localhost:${port}`;
const checks = [
  ["/", 200, "Kausik"],
  ["/experience", 200, "UNICEF"],
  ["/publications", 200, "Publications"],
  ["/research", 200, "uploaded yet"],
  ["/talks", 200, "Conference"],
  ["/contact", 200, "Send a message"],
  ["/sitemap.xml", 200, "<urlset"],
  ["/robots.txt", 200, "Sitemap"],
  ["/opengraph-image", 200, ""],
  ["/nope", 404, ""],
];
const srv = spawn("npx", ["next", "start", "-p", String(port)], { stdio: "ignore" });
const wait = async () => {
  for (let i = 0; i < 40; i++) {
    try {
      await fetch(base);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error("server did not start");
};
let failed = 0;
try {
  await wait();
  for (const [path, status, text] of checks) {
    const r = await fetch(base + path);
    const body = text ? await r.text() : "";
    const ok = r.status === status && body.includes(text);
    console.log(`${ok ? "PASS" : "FAIL"} ${path} (${r.status})`);
    if (!ok) failed++;
  }
} finally {
  srv.kill();
}
process.exit(failed ? 1 : 0);
