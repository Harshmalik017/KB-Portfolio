import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
export const runtime = "edge";
export const alt = "Kausik Kumar Bhadra – Economist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        color: "white",
        background: "linear-gradient(135deg,#312e81,#4f46e5 60%,#0e7490)",
      }}
    >
      <div style={{ fontSize: 34, opacity: 0.85 }}>Dr.</div>
      <div style={{ fontSize: 84, fontWeight: 800 }}>Kausik Kumar Bhadra</div>
      <div style={{ fontSize: 38, marginTop: 20, opacity: 0.9 }}>Economist · Public Finance & Policy Researcher</div>
      <div style={{ fontSize: 28, marginTop: 40, opacity: 0.75 }}>
        {`${profile.yearsExperience} years · UNICEF · UNDP · NIPFP · IBP`}
      </div>
    </div>,
    size,
  );
}
