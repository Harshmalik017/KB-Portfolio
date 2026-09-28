import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/assets";
import { nav } from "@/data/profile";
export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: `${siteUrl}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
