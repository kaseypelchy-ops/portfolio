export type Flywheel = {
  kicker: string;
  title: string;
  description: string;
  steps: string[];
  forceMultipliers: string[];
  goodFriction: string[];
};

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
  flywheel: Flywheel;
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
    accent: "lime",
    flywheel: {
      kicker: "Continuous recovery loop",
      title: "Market Intelligence + Recovery",
      description: "Subscriber evidence identifies risk, investigation shapes the intervention, and measured response improves the next round of market scoring.",
      steps: [
        "Subscriber Data",
        "Identify At-Risk Markets",
        "Competitive Research",
        "Root-Cause Analysis",
        "Select Intervention",
        "Execute",
        "Measure Response",
        "Improve Market Scoring"
      ],
      forceMultipliers: [
        "Canonical market identity",
        "Multi-horizon trend analysis",
        "Coverage-aware scoring",
        "Deterministic ranking"
      ],
      goodFriction: [
        "Severity separated from actionability",
        "Lifecycle eligibility rules",
        "Baseline freezing at project start",
        "Data completeness tracked separately"
      ]
    }
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
    accent: "cyan",
    flywheel: {
      kicker: "Field learning loop",
      title: "FieldOS / Door-to-Door",
      description: "Territory data drives field execution, captured outcomes flow through the installation lifecycle, and performance evidence continuously sharpens targeting.",
      steps: [
        "Territory Data",
        "Assign Sales Reps",
        "Knock Doors",
        "Capture Outcomes",
        "Sale / Follow-Up",
        "Installation Lifecycle",
        "Measure Performance",
        "Improve Targeting"
      ],
      forceMultipliers: [
        "Address-centered workflow",
        "Mobile field execution",
        "Realtime operational visibility",
        "Shared installation capacity"
      ],
      goodFriction: [
        "Transactional sale completion",
        "Capacity validation before scheduling",
        "Pricing snapshots preserve quoted offers",
        "Reconciliation fallback protects field data"
      ]
    }
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
    accent: "violet",
    flywheel: {
      kicker: "Coaching feedback loop",
      title: "Customer Service AI Coaching",
      description: "Every customer interaction becomes structured QA evidence that informs coaching, changes behavior, improves experience, and creates better data for the next evaluation cycle.",
      steps: [
        "Customer Interaction",
        "Conversation Analysis",
        "QA Scoring",
        "Identify Strengths + Gaps",
        "Coaching",
        "Behavior Change",
        "Improved Experience",
        "New QA Data"
      ],
      forceMultipliers: [
        "Automated call ingestion",
        "Structured AI evaluation",
        "Automated coaching workflows",
        "New QA data feeds the next cycle"
      ],
      goodFriction: [
        "Eligibility checks before analysis",
        "Idempotent duplicate prevention",
        "Processing locks and retries",
        "Deterministic scoring after AI output"
      ]
    }
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
    accent: "orange",
    flywheel: {
      kicker: "Build-measure-improve loop",
      title: "Software Development + Automation",
      description: "The mapping pipeline follows the same operating loop used to build durable internal tools: investigate the workflow, design and deploy the solution, observe real use, then improve and automate the next cycle.",
      steps: [
        "Operational Problem",
        "Investigate Workflow",
        "Design Solution",
        "Build Tool",
        "Deploy",
        "User Adoption",
        "Collect Operational Data",
        "Improve + Automate"
      ],
      forceMultipliers: [
        "Automated geometry parsing",
        "Bounding-box candidate reduction",
        "Exact point-in-polygon matching",
        "Reusable normalized outputs"
      ],
      goodFriction: [
        "Geometry repair before matching",
        "Deduplication controls",
        "Processing locks with stale-lock recovery",
        "Generation lineage and repeat-upload safety"
      ]
    }
  },
  {
    slug: "seo-aeo",
    number: "05",
    title: "SEO, AEO & Search Intelligence",
    eyebrow: "Marketing Operations · Search Intelligence · Full Stack",
    shortDescription: "A production search-operations platform connecting structured publishing, site health, organic performance, optimization workflows, and AI visibility.",
    summary: "The platform began as a database-driven SEO/AEO content system and expanded into a protected search-intelligence application. It connects managed page data, rendered website state, Google Search Console performance, GA4 AI referrals, Bing AI citation evidence, automated monitoring, prioritization models, and closed-loop experiments.",
    businessProblem: [
      "Hundreds of localized pages needed consistent content, metadata, hierarchy, internal links, and structured data without independent maintenance.",
      "Search, rendered-site, analytics, and AI-visibility evidence lived in separate sources with different meanings.",
      "Recommendations needed prioritization, operational ownership, verification, and later outcome measurement."
    ],
    engineeringView: [
      "Model content and page ownership explicitly before measuring performance.",
      "Keep managed content state, rendered state, and external evidence separate.",
      "Preserve source semantics and measurement lineage.",
      "Distinguish measured zero, unknown, incomplete, and failed states.",
      "Use deterministic models for intent, ownership, priority, and technical findings.",
      "Close the loop from recommendation through implementation, verification, and outcome."
    ],
    engineeringWork: [
      "Relational content modeling",
      "Reusable WordPress publishing",
      "Search Console integration",
      "Intent and ownership intelligence",
      "Opportunity prioritization",
      "Content-gap and cannibalization analysis",
      "Rendered-site health monitoring",
      "Internal-link execution and verification",
      "Optimization experiment tracking",
      "GA4 AI-referral measurement",
      "Bing AI citation intelligence",
      "Import lineage and pipeline operations",
      "Explainable scoring and guardrails"
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "WordPress", "PHP", "Google Search Console", "Google Analytics 4", "Bing Webmaster Tools", "REST APIs", "JSONB", "JSON-LD", "Vercel"],
    github: "https://github.com/kaseypelchy-ops/seo-aeo-content-platform-showcase",
    accent: "rose",
    flywheel: {
      kicker: "Search intelligence loop",
      title: "SEO, AEO + Search Intelligence",
      description: "Structured content creates a governed publishing foundation; search, site, referral, and citation evidence then guide action and measure the next improvement cycle.",
      steps: [
        "Structured Content",
        "Publish + Render",
        "Collect Evidence",
        "Diagnose Gaps",
        "Prioritize Work",
        "Implement + Verify",
        "Measure Outcomes",
        "Improve the Model"
      ],
      forceMultipliers: [
        "435+ dynamic localized pages",
        "Search + site evidence integration",
        "Explainable opportunity scoring",
        "Search + AI measurement feedback"
      ],
      goodFriction: [
        "Editorial locks and human review",
        "Source semantics remain separate",
        "Zero is distinguished from unknown",
        "Experiments lock baseline and measurement windows"
      ]
    }
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
