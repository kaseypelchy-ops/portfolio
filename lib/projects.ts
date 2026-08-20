export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  summary: string;
  businessProblem: string[];
  engineeringView: string[];
  engineeringWork: string[];
  stack: string[];
  github: string;
  liveDemo?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "market-recovery",
    number: "01",
    title: "Market Recovery Intelligence",
    eyebrow: "Decision Support · Data Engineering · Full Stack",
    shortDescription: "A full-stack market-intelligence platform for identifying decline, prioritizing recovery opportunities, and measuring intervention outcomes.",
    summary: "Operational acquisition, churn, subscriber history, market identity, lifecycle state, and recovery-project data are normalized into a canonical analytical model. Multi-horizon signals feed coverage-aware scoring, a separate policy layer determines actionability, and eligible markets are ranked deterministically for investigation.",
    businessProblem: [
      "Declining markets were difficult to compare consistently across multiple data sources.",
      "Analytical severity and operational actionability needed to remain separate.",
      "Recovery work needed a durable baseline so results could be measured without rewriting history."
    ],
    engineeringView: [
      "Normalize operational evidence before analytical computation.",
      "Resolve records to a canonical market identity.",
      "Derive multi-horizon market-health signals.",
      "Normalize scoring over available evidence while tracking completeness separately.",
      "Apply lifecycle and workflow policy after scoring.",
      "Rank only eligible candidates deterministically.",
      "Freeze project baselines transactionally at project start."
    ],
    engineeringWork: [
      "Canonical data modeling",
      "Multi-horizon trend analysis",
      "Coverage-aware scoring",
      "Data-completeness modeling",
      "Deterministic ranking",
      "Transactional project creation",
      "Immutable measurement baselines",
      "Analytical read-path optimization",
      "Shared TypeScript domain modules",
      "Database indexing",
      "Regression validation"
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "SQL"],
    github: "https://github.com/kaseypelchy-ops/market-recovery-platform-showcase",
    liveDemo: "https://kaseypelchy-ops.github.io/market-recovery-platform-showcase/",
    accent: "lime"
  },
  {
    slug: "fieldos",
    number: "02",
    title: "FieldOS",
    eyebrow: "Operational Software · Sales Technology · Full Stack",
    shortDescription: "An address-centered field-sales operations platform connecting canvassing, pricing, scheduling, sales, post-sale review, and management reporting.",
    summary: "FieldOS gives representatives a mobile workflow while operations and leadership receive centralized visibility into sales activity, installation capacity, territory performance, lifecycle outcomes, and operational trends.",
    businessProblem: [
      "Field activity, serviceable locations, scheduling, pricing, and sales review lived across disconnected workflows.",
      "Representatives needed reliable mobile workflows in areas with weak connectivity.",
      "Operations needed shared installation capacity and trustworthy post-sale visibility."
    ],
    engineeringView: [
      "Use the service location as the operational anchor.",
      "Keep approved offers data-driven and preserve what was quoted at sale time.",
      "Treat installation capacity as shared database state.",
      "Preserve unsynced field work through connectivity and deployment changes.",
      "Keep completed sales transactional and partial opportunities separate.",
      "Use realtime as an accelerator with reconciliation fallback."
    ],
    engineeringWork: [
      "Transactional sales workflows",
      "PWA/offline synchronization",
      "Realtime reconciliation",
      "Installation-capacity management",
      "Pricing snapshots",
      "Duplicate-safe customer notifications",
      "Lifecycle tracking",
      "PostgreSQL functions",
      "Role-based workflows",
      "Data-quality controls",
      "Reporting"
    ],
    stack: ["JavaScript", "HTML/CSS", "PostgreSQL", "PL/pgSQL", "Supabase", "Vercel", "Leaflet"],
    github: "https://github.com/kaseypelchy-ops/fieldos-project-showcase",
    accent: "cyan"
  },
  {
    slug: "ai-call-quality",
    number: "03",
    title: "AI Call Quality & Coaching",
    eyebrow: "AI · Cloud Architecture · Workflow Automation",
    shortDescription: "An AI-assisted QA and coaching platform that turns completed customer-service calls into structured evaluations, follow-up workflows, and management analytics.",
    summary: "Completed calls move through an asynchronous processing pipeline that validates eligibility, prevents duplicate analysis, performs structured AI evaluation, applies deterministic application scoring, persists results, and routes outcomes into coaching and management workflows.",
    businessProblem: [
      "Manual call review limited coverage, consistency, and coaching speed.",
      "AI output needed deterministic validation before becoming an official QA result.",
      "Processing, notifications, coaching, and analytics needed independent failure boundaries."
    ],
    engineeringView: [
      "Separate intake, queueing, analysis, persistence, notification, and coaching.",
      "Make processing idempotent and lock work before analysis.",
      "Use structured model output rather than free-form prose as system state.",
      "Apply deterministic application scoring after AI evaluation.",
      "Track exclusions, retries, failures, and notification outcomes.",
      "Measure coaching follow-up and effectiveness over time."
    ],
    engineeringWork: [
      "Queue-based processing",
      "Idempotent analysis",
      "Structured LLM output",
      "Deterministic scoring",
      "Asynchronous workers",
      "Retry handling",
      "Processing locks",
      "Automated notifications",
      "Coaching workflows",
      "Effectiveness measurement",
      "Operational-health monitoring"
    ],
    stack: ["Python", "TypeScript", "React", "Next.js", "PostgreSQL", "Supabase", "Google Cloud", "Cloud Tasks", "Vercel"],
    github: "https://github.com/kaseypelchy-ops/ai-call-quality-platform-showcase",
    accent: "violet"
  },
  {
    slug: "fiber-mapping",
    number: "04",
    title: "Fiber Service Area Mapping",
    eyebrow: "Python · Geospatial · Data Engineering",
    shortDescription: "A geospatial pipeline that converts KML/KMZ service-area boundaries into normalized broadband-location datasets.",
    summary: "The pipeline parses and repairs geometry, uses a bounding-box query to reduce a large broadband-location dataset to a candidate set, performs exact point-in-polygon matching, normalizes matched locations, and exports structured downstream files.",
    businessProblem: [
      "Service areas are geographic, while marketing and operations need address-level data.",
      "Large reference datasets make brute-force spatial matching expensive.",
      "Cloud processing needed duplicate protection, locks, lineage, and safe recovery."
    ],
    engineeringView: [
      "Parse and repair source geometry before matching.",
      "Use bounding-box filtering to reduce the candidate universe.",
      "Perform exact point-in-polygon evaluation only on candidates.",
      "Normalize and deduplicate matched locations.",
      "Track generation identity and processing lineage.",
      "Recover safely from stale locks and repeat uploads."
    ],
    engineeringWork: [
      "Geometry parsing and repair",
      "Coordinate transformations",
      "Bounding-box filtering",
      "DuckDB query optimization",
      "Point-in-polygon analysis",
      "Streaming record processing",
      "Normalization",
      "Deduplication",
      "Processing locks",
      "Stale-lock recovery",
      "Lineage tracking"
    ],
    stack: ["Python", "DuckDB", "SQL", "Shapely", "PyProj", "Google Cloud", "KML/KMZ"],
    github: "https://github.com/kaseypelchy-ops/fiber-service-area-mapping-showcase",
    accent: "orange"
  },
  {
    slug: "seo-aeo",
    number: "05",
    title: "SEO & AEO Content Platform",
    eyebrow: "Marketing Technology · PostgreSQL · Content Architecture",
    shortDescription: "A database-driven SEO/AEO platform that models localized content as structured relational data and renders it through reusable WordPress templates.",
    summary: "Pages, markets, services, promotions, keywords, FAQs, sections, links, redirects, metadata, and publishing state are modeled in PostgreSQL. Related records are assembled into page-level JSON documents for WordPress to retrieve and render.",
    businessProblem: [
      "Localized content became difficult to maintain when every page was independently configured.",
      "SEO metadata, FAQs, services, geography, and structured data needed shared relationships.",
      "Publishing needed to remain reusable while supporting market-specific output."
    ],
    engineeringView: [
      "Model content relationships in PostgreSQL instead of duplicating page fields.",
      "Represent geographic hierarchy explicitly.",
      "Generate repeatable defaults while allowing editorial overrides.",
      "Assemble relational records into page-oriented JSON bundles.",
      "Resolve routes before rendering reusable WordPress templates.",
      "Generate metadata and JSON-LD from the same structured source."
    ],
    engineeringWork: [
      "Relational content modeling",
      "Hierarchical geography",
      "JSONB document assembly",
      "PL/pgSQL content generation",
      "Route resolution",
      "Dynamic metadata",
      "Structured-data generation",
      "Reusable templates",
      "REST-based publishing"
    ],
    stack: ["PHP", "WordPress", "PostgreSQL", "PL/pgSQL", "Supabase", "REST APIs", "JSONB", "JSON-LD"],
    github: "https://github.com/kaseypelchy-ops/seo-aeo-content-platform-showcase",
    accent: "rose"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
