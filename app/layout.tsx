import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TartanInteraction } from "@/components/TartanInteraction";

export const metadata: Metadata = {
  title: {
    default: "Kasey Pelchy — Business Systems, Data & Automation",
    template: "%s | Kasey Pelchy"
  },
  description: "Portfolio of reusable business-system patterns across operational software, decision intelligence, data, automation, AI, growth technology, and revenue operations.",
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
