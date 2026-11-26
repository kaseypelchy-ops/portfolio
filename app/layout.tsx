import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TartanInteraction } from "@/components/TartanInteraction";

export const metadata: Metadata = {
  title: {
    default: "Kasey Pelchy — Business Systems, HubSpot & RevOps",
    template: "%s | Kasey Pelchy"
  },
  description: "HubSpot and Revenue Operations experience, custom business applications, data engineering, integrations, automation, and technical case studies.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TartanInteraction />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
