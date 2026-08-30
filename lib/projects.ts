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
  implementationName: string;
  eyebrow: string;
  shortDescription: string;
  summary: string;
  systemPattern: string;
  applications: string[];
  businessValue: string[];
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
    title: "Market Performance Intelligence System",
    implementationName: "Market Recovery Intelligence",
    eyebrow: "Decision Intelligence · Prioritization · Full Stack",
    shortDescription: "A decision-support system for finding underperforming regions, locations, or business units, prioritizing intervention, and measuring whether the response worked.",
    summary: "This system pattern turns fragmented performance data into a consistent way to identify where attention is needed, distinguish severity from actionability, prioritize investigation, launch an intervention, and preserve a baseline for later measurement. The original implementation focused on geographic markets, but the architecture applies anywhere a business manages many comparable units.",
    systemPattern: "Turn distributed performance signals into a ranked, measurable intervention workflow.",
    applications: ["Multi-location businesses", "Franchise operations", "Regional sales", "Service territories", "Retail networks", "Portfolio management"],
    businessValue: [
      "Focus leadership attention on the units most likely to need intervention.",
      "Replace inconsistent judgment with explainable, repeatable prioritization.",
      "Separate a poor score from whether the business is actually ready to act.",
      "Measure improvement against a frozen baseline instead of moving history."
    ],
    businessProblem: [
      "Performance data often lives in different systems and cannot be compared consistently across locations, regions, teams, or business units.",
      "A weak performance signal does not automatically mean a unit is actionable; eligibility, lifecycle, capacity, or evidence quality may change the decision.",
      "Improvement work needs a durable before-and-after baseline so leaders can tell whether an intervention actually changed the outcome."
    ],
    engineeringView: [
      "Normalize operational evidence before analytical computation.",
      "Resolve records to a canonical unit of analysis.",
      "Derive multi-horizon health and performance signals.",
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
      kicker: "Continuous improvement loop",
      title: "Performance Intelligence + Intervention",
      description: "Operational evidence identifies underperformance, investigation shapes the response, and measured outcomes improve the next round of prioritization.",
      steps: [
        "Performance Data",
        "Identify Underperformance",
        "Investigate Drivers",
        "Root-Cause Analysis",
        "Select Intervention",
        "Execute",
        "Measure Impact",
        "Improve Prioritization"
      ],
      forceMultipliers: [
        "Canonical unit identity",
        "Multi-horizon trend analysis",
        "Coverage-aware scoring",
        "Deterministic ranking"
      ],
      goodFriction: [
        "Severity separated from actionability",
        "Lifecycle and eligibility rules",
        "Baseline freezing at project start",
        "Data completeness tracked separately"
      ]
    }
  },
  {
    slug: "fieldos",
    number: "02",
    title: "Field Operations & Sales Management Platform",
    implementationName: "FieldOS",
    eyebrow: "Operational Software · Distributed Teams · Full Stack",
    shortDescription: "A configurable platform for coordinating distributed field teams, customer or location activity, scheduling, conversion, fulfillment, and management visibility.",
    summary: "This system pattern gives people in the field a focused mobile workflow while operations and leadership receive one view of activity, capacity, outcomes, and follow-through. The original implementation supported field sales, but the same architecture fits any organization coordinating people who work across locations and need reliable handoffs back to central operations.",
    systemPattern: "Connect field activity to scheduling, fulfillment, reporting, and the next operational decision.",
    applications: ["Home services", "Solar & roofing", "Utilities", "Property services", "Field sales", "Franchise operations"],
    businessValue: [
      "Give field teams one guided workflow instead of disconnected forms, maps, spreadsheets, and messages.",
      "Create shared visibility into who visited what, what happened, and what should happen next.",
      "Prevent overbooking by treating appointment or fulfillment capacity as shared operational state.",
      "Connect frontline activity to downstream fulfillment and management reporting."
    ],
    businessProblem: [
      "Distributed teams often work across maps, spreadsheets, forms, scheduling tools, and messaging channels that do not share a single operational record.",
      "Field users need workflows that remain usable when connectivity is weak or inconsistent.",
      "Operations needs trustworthy shared capacity, lifecycle status, and post-activity visibility rather than manual reconciliation."
    ],
    engineeringView: [
      "Use the customer, asset, property, or service location as the operational anchor.",
      "Keep approved offers and configuration data-driven while preserving what was selected at transaction time.",
      "Treat appointment or fulfillment capacity as shared database state.",
      "Preserve unsynced field work through connectivity and deployment changes.",
      "Keep completed transactions and partial opportunities as separate lifecycle states.",
      "Use realtime as an accelerator with reconciliation fallback."
    ],
    engineeringWork: [
      "Transactional field workflows",
      "PWA/offline synchronization",
      "Realtime reconciliation",
      "Shared-capacity management",
      "Configuration snapshots",
      "Duplicate-safe notifications",
      "Lifecycle tracking",
      "PostgreSQL functions",
      "Role-based workflows",
      "Data-quality controls",
      "Operational reporting"
    ],
    stack: ["JavaScript", "HTML/CSS", "PostgreSQL", "PL/pgSQL", "Supabase", "Vercel", "Leaflet"],
    github: "https://github.com/kaseypelchy-ops/fieldos-project-showcase",
    accent: "cyan",
    flywheel: {
      kicker: "Field learning loop",
      title: "Field Operations + Fulfillment",
      description: "Work-area data drives field execution, captured outcomes move through follow-up and fulfillment, and performance evidence continuously sharpens the next assignment cycle.",
      steps: [
        "Work-Area Data",
        "Assign Teams",
        "Visit / Engage",
        "Capture Outcomes",
        "Follow-Up / Convert",
        "Fulfillment",
        "Measure Performance",
        "Improve Targeting"
      ],
      forceMultipliers: [
        "Location-centered workflow",
        "Mobile field execution",
        "Realtime operational visibility",
        "Shared appointment capacity"
      ],
      goodFriction: [
        "Transactional completion",
        "Capacity validation before scheduling",
        "Configuration snapshots preserve history",
        "Reconciliation fallback protects field data"
      ]
    }
  },
  {
    slug: "ai-call-quality",
    number: "03",
    title: "AI Quality Assurance & Coaching Platform",
    implementationName: "AI Call Quality & Coaching",
    eyebrow: "AI · Quality Operations · Workflow Automation",
    shortDescription: "An AI-assisted quality system that turns customer or sales interactions into structured evaluations, coaching workflows, and management intelligence.",
    summary: "This system pattern uses AI as one stage inside a controlled operational workflow rather than treating model output as the final answer. Interactions are validated, analyzed into structured evidence, scored deterministically, persisted, and routed into coaching and management workflows. The pattern applies to any organization that needs to review more interactions without giving up consistency or auditability.",
    systemPattern: "Turn high-volume interactions into structured quality evidence and closed-loop coaching.",
    applications: ["Contact centers", "Inside sales", "Customer success", "Insurance", "Healthcare scheduling", "Financial services"],
    businessValue: [
      "Increase QA coverage without requiring managers to manually review every interaction.",
      "Create more consistent evaluations by combining structured AI analysis with deterministic scoring rules.",
      "Move from a QA score to a documented coaching action and follow-up workflow.",
      "Track processing health, exclusions, retries, notifications, and coaching effectiveness over time."
    ],
    businessProblem: [
      "Manual quality review limits coverage, consistency, and the speed of useful coaching.",
      "AI output cannot safely become official system state without structure, validation, and deterministic business rules.",
      "Analysis, notifications, coaching, and analytics need independent failure boundaries so one issue does not break the entire process."
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
      title: "Interaction Quality + Coaching",
      description: "Every interaction becomes structured QA evidence that informs coaching, changes behavior, improves the customer experience, and creates better data for the next evaluation cycle.",
      steps: [
        "Customer Interaction",
        "Interaction Analysis",
        "Quality Evaluation",
        "Identify Strengths + Gaps",
        "Coaching",
        "Behavior Change",
        "Improved Experience",
        "New Quality Data"
      ],
      forceMultipliers: [
        "Automated interaction ingestion",
        "Structured AI evaluation",
        "Automated coaching workflows",
        "New evidence feeds the next cycle"
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
    title: "Location Intelligence & Geospatial Data Platform",
    implementationName: "Fiber Service Area Mapping",
    eyebrow: "Geospatial · Data Engineering · Automation",
    shortDescription: "A geospatial processing pattern that converts service, delivery, or operating boundaries into normalized location-level data that downstream teams can actually use.",
    summary: "This system pattern bridges the gap between geographic boundaries and operational records. It parses and repairs geometry, reduces a large reference dataset to a practical candidate set, performs exact spatial matching, normalizes matched locations, and exports structured downstream data. The original implementation used service-area boundaries, but the same approach applies to territories, delivery zones, assets, properties, risk areas, and expansion planning.",
    systemPattern: "Convert geographic boundaries into clean, actionable location-level records at scale.",
    applications: ["Utilities", "Logistics & delivery", "Real estate", "Territory planning", "Franchise expansion", "Infrastructure operations"],
    businessValue: [
      "Translate shapes on a map into specific locations that sales, operations, marketing, or planning teams can use.",
      "Reduce expensive spatial processing by filtering the candidate universe before exact matching.",
      "Create repeatable, deduplicated datasets instead of one-off GIS exports.",
      "Protect automated processing with lineage, locks, repeat-upload handling, and safe recovery."
    ],
    businessProblem: [
      "Businesses often define service, risk, delivery, ownership, or operating areas geographically while downstream workflows need location-level records.",
      "Large reference datasets make brute-force spatial matching expensive and slow.",
      "Automated cloud processing needs duplicate protection, locks, lineage, and safe recovery when the same source is processed again."
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
      kicker: "Spatial data loop",
      title: "Boundaries + Location Intelligence",
      description: "Geographic definitions become normalized operational records, downstream use exposes data gaps, and those observations improve the next processing cycle.",
      steps: [
        "Operational Boundary",
        "Normalize Geometry",
        "Reduce Candidates",
        "Exact Spatial Match",
        "Normalize Records",
        "Downstream Workflow",
        "Measure Data Quality",
        "Improve Pipeline"
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
    title: "Search & Digital Visibility Intelligence Platform",
    implementationName: "SEO, AEO & Search Intelligence",
    eyebrow: "Growth Intelligence · Search Operations · Full Stack",
    shortDescription: "A search-operations platform connecting scalable publishing, technical site health, organic demand, optimization workflows, analytics, and emerging AI visibility.",
    summary: "This system pattern gives a business one operational layer for publishing at scale, measuring search demand, diagnosing technical or content gaps, prioritizing work, verifying changes, and tracking visibility across both traditional search and emerging AI discovery. The original implementation supported a large localized content footprint, but the architecture applies to any organization managing many pages, locations, services, products, or search intents.",
    systemPattern: "Connect publishing, search evidence, technical health, prioritization, and outcome measurement in one growth loop.",
    applications: ["Multi-location brands", "Professional services", "SaaS", "Home services", "Healthcare networks", "Content-heavy businesses"],
    businessValue: [
      "Scale structured content without turning every page into a separate maintenance project.",
      "Bring search performance, rendered-site health, analytics, and AI visibility into one operating view.",
      "Prioritize the work most likely to matter instead of treating every finding as equally urgent.",
      "Close the loop from recommendation to implementation, verification, and measured outcome."
    ],
    businessProblem: [
      "Large sites need consistent content, metadata, hierarchy, internal links, and structured data without maintaining every page independently.",
      "Search performance, rendered-site evidence, analytics, and AI-visibility signals live in different sources with different meanings.",
      "Recommendations need prioritization, ownership, verification, and later outcome measurement rather than becoming another static audit."
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
      "Reusable publishing architecture",
      "Search Console integration",
      "Intent and ownership intelligence",
      "Opportunity prioritization",
      "Content-gap and cannibalization analysis",
      "Rendered-site health monitoring",
      "Internal-link execution and verification",
      "Optimization experiment tracking",
      "AI-referral measurement",
      "AI citation intelligence",
      "Import lineage and pipeline operations",
      "Explainable scoring and guardrails"
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "WordPress", "PHP", "Google Search Console", "Google Analytics 4", "Bing Webmaster Tools", "REST APIs", "JSONB", "JSON-LD", "Vercel"],
    github: "https://github.com/kaseypelchy-ops/seo-aeo-content-platform-showcase",
    accent: "rose",
    flywheel: {
      kicker: "Growth intelligence loop",
      title: "Publishing + Search Intelligence",
      description: "Structured publishing creates a governed foundation; search, site, referral, and citation evidence then guide action and measure the next improvement cycle.",
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
        "Reusable publishing patterns",
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
