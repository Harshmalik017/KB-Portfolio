import type { Metadata } from "next";
import "@fontsource-variable/inter";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfflineNotice from "@/components/OfflineNotice";
import BackToTop from "@/components/BackToTop";
import { hasPublicFile, siteUrl } from "@/lib/assets";
import { profile } from "@/data/profile";
const desc = `Portfolio of Dr. Kausik Kumar Bhadra, economist with ${profile.yearsExperience} years in public finance, fiscal federalism and policy research.`;
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Kausik Kumar Bhadra | Economist – Public Finance & Policy", template: "%s | Kausik Kumar Bhadra" },
  description: desc,
  openGraph: { title: profile.name, description: desc, type: "website", siteName: profile.name },
  twitter: { card: "summary_large_image", title: profile.name, description: desc },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Economist",
  url: siteUrl,
  email: profile.email,
  sameAs: [profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Ambedkar University Delhi" },
    { "@type": "CollegeOrUniversity", name: "Vidyasagar University" },
  ],
  worksFor: { "@type": "Organization", name: "UNICEF" },
  knowsAbout: [
    "Public finance",
    "Fiscal federalism",
    "Child budgeting",
    "Decentralised service delivery",
    "Econometrics",
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-medium text-brand-800 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <div className="bg-blobs flex min-h-screen flex-col">
            <Header hasCv={hasPublicFile("CV.pdf")} />
            <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:py-12">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <OfflineNotice />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
