import { MarketRecoveryDemo } from "@/components/demos/MarketRecoveryDemo";
import { FieldOSDemo } from "@/components/demos/FieldOSDemo";
import { AIQualityDemo } from "@/components/demos/AIQualityDemo";
import { SeoDemo } from "@/components/demos/SeoDemo";
import { FiberDemo } from "@/components/demos/FiberDemo";

export function ProjectDemo({ slug }: { slug: string }) {
  switch (slug) {
    case "market-recovery": return <MarketRecoveryDemo />;
    case "fieldos": return <FieldOSDemo />;
    case "ai-call-quality": return <AIQualityDemo />;
    case "seo-aeo": return <SeoDemo />;
    case "fiber-mapping": return <FiberDemo />;
    default: return null;
  }
}
