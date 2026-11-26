import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills & Certifications",
  description: "A concise view of Kasey Pelchy's capabilities across operational software, data, automation, AI, growth systems, RevOps, and technical delivery."
};

const skillGroups = [
  {
    number: "01",
    title: "Software & Systems",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Python", "HTML/CSS", "REST APIs", "Internal tools"]
  },
  {
    number: "02",
    title: "Data & Decision Intelligence",
    skills: ["PostgreSQL", "SQL", "Supabase", "BigQuery", "Data modeling", "ETL and normalization", "Scoring systems", "Operational reporting"]
  },
  {
    number: "03",
    title: "Automation & AI",
    skills: ["LLM workflows", "Structured AI output", "Process automation", "Asynchronous workers", "Cloud Tasks", "Retries and idempotency", "Notifications", "Monitoring"]
  },
  {
    number: "04",
    title: "Growth & Marketing Technology",
    skills: ["SEO", "AEO", "GA4", "WordPress", "ACF", "Audience segmentation", "Lifecycle campaigns", "Content systems"]
  },
  {
    number: "05",
    title: "Revenue & Operations",
    skills: ["HubSpot onboarding", "CRM properties & pipelines", "Workflow configuration", "Revenue operations", "Sales handoffs", "Data mapping & imports", "Integration troubleshooting", "Process mapping"]
  },
  {
    number: "06",
    title: "Platforms & Delivery",
    skills: ["Vercel", "Google Cloud", "GitHub", "GitHub Actions", "Supabase", "Mautic", "Klaviyo", "HubSpot", "Deployment validation"]
  }
];

const evidence = [
  { capability: "Distributed operational workflows and shared capacity", project: "Field Operations & Sales Management Platform", href: "/projects/fieldos" },
  { capability: "Data modeling, scoring, prioritization, and measurement", project: "Market Performance Intelligence System", href: "/projects/market-recovery" },
  { capability: "AI evaluation, automation, and closed-loop coaching", project: "AI Quality Assurance & Coaching Platform", href: "/projects/ai-call-quality" },
  { capability: "Python and scalable geospatial processing", project: "Location Intelligence & Geospatial Data Platform", href: "/projects/fiber-mapping" },
  { capability: "Search operations, publishing architecture, and AI visibility", project: "Search & Digital Visibility Intelligence Platform", href: "/projects/seo-aeo" }
];

const certifications = [
  { title: "CRM Data Migration", issuer: "HubSpot Academy", dates: "Sep 28, 2026 – Oct 28, 2027", credential: "a081952f98da454a80d78b9de76b2400", href: "" },
  { title: "Data Integrations", issuer: "HubSpot Academy", dates: "Sep 28, 2026 – Oct 28, 2027", credential: "89b07ae7908144188e85fb79bd8a781b", href: "" },
  { title: "Implementation for Partners", issuer: "HubSpot Academy", dates: "Sep 22, 2026 – Oct 22, 2027", credential: "cd53e73605d9426b90207981e215805d", href: "" },
  { title: "Marketing Hub Software", issuer: "HubSpot Academy", dates: "Sep 23, 2026 – Oct 23, 2027", credential: "fb948d83a31e426aa188c125dccf2ab1", href: "" },
  { title: "Reporting", issuer: "HubSpot Academy", dates: "Oct 1, 2026 – Oct 31, 2027", credential: "99101ae06b264722a0758c8973c4052d", href: "" },
  { title: "Sales Hub Software", issuer: "HubSpot Academy", dates: "Sep 23, 2026 – Oct 23, 2027", credential: "ede013c7329b453ea7a31f2f4e7ff01b", href: "" },
  { title: "Service Hub Software", issuer: "HubSpot Academy", dates: "Sep 24, 2026 – Oct 24, 2027", credential: "3130dee46b95420890d4256384614f44", href: "" },
  { title: "Salesforce Integration", issuer: "HubSpot Academy", dates: "Oct 2, 2026 – Nov 1, 2027", credential: "420ba251da324657a17517128f891137", href: "" },
  { title: "Revenue Operations Certified", issuer: "HubSpot Academy", dates: "Issued Aug 2026 · Expires Sep 2028", credential: "tjjhc09y", href: "https://app-na2.hubspot.com/academy/achievements/tjjhc09y/en/1/kasey-pelchy/hubspot-revenue-operations-certified" },
  { title: "Inbound Certified", issuer: "HubSpot Academy", dates: "Issued Aug 2026 · Expires Sep 2028", credential: "2zrjdrg8", href: "https://app-na2.hubspot.com/academy/achievements/2zrjdrg8/en/1/kasey-pelchy/inbound-certified" }
];

export default function SkillsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Skills & Certifications</p>
          <h1>Capabilities backed by systems that solve real business problems.</h1>
          <p>My strongest work sits where business process, data, software, automation, and growth operations overlap. The case studies are intentionally framed as reusable patterns so the capability is easier to translate across industries.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <span>{group.number}</span>
                <h2>{group.title}</h2>
              </div>
              <div className="skill-chip-grid">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>

        <section className="skills-evidence">
          <div className="section-heading">
            <p className="eyebrow">Evidence in the portfolio</p>
            <h2>Skills connected to reusable system patterns.</h2>
            <p>Each capability below links to a public-safe case study that starts with the business value and then exposes the architecture and engineering depth behind it.</p>
          </div>
          <div className="evidence-list">
            {evidence.map((item, index) => (
              <Link href={item.href} key={item.capability}>
                <span>0{index + 1}</span>
                <strong>{item.capability}</strong>
                <p>{item.project}</p>
                <i>View system →</i>
              </Link>
            ))}
          </div>
        </section>

        <section className="certification-section">
          <div className="section-heading">
            <p className="eyebrow">Verified learning</p>
            <h2>Certifications.</h2>
          </div>
          <p>Ten HubSpot Academy certifications are listed below. Separately, I have completed the PSO certification required for guided partner onboarding.</p>
          <div className="certification-grid">
            {certifications.map((certification) => (
              <div className="certification-entry" key={certification.title}>
                <div className="cert-mark">H</div>
                <div>
                  <span>{certification.issuer}</span>
                  <h3>{certification.title}</h3>
                  <p>{certification.dates}</p>
                  <small>Certificate code {certification.credential}</small>
                  {certification.href && <p><a href={certification.href} target="_blank" rel="noreferrer">Verify credential ↗</a></p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
