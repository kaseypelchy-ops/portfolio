import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TartanInteraction } from "@/components/TartanInteraction";

export const metadata: Metadata = {
  title: {
    default: "Kasey Pelchy — Systems, Data & Marketing Technology",
    template: "%s | Kasey Pelchy"
  },
  description: "Portfolio of Kasey Pelchy: marketing technology, full-stack systems, data engineering, automation, AI, analytics, and operations.",
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
