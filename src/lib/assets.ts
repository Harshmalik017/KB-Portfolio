import fs from "node:fs";
import path from "node:path";
/** True if a file exists in /public (checked at build/render time on the server). */
export const hasPublicFile = (name: string) => fs.existsSync(path.join(process.cwd(), "public", name));
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
