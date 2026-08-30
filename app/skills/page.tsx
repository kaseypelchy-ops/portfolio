import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills & Certifications",
  description: "A concise view of Kasey Pelchy's capabilities across software, data, automation, AI, marketing technology, RevOps, and operational systems."
};

const skillGroups = [
  {
    number: "01",
    title: "Software & Systems",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Python", "HTML/CSS", "REST APIs", "Internal tools"]
  },
  {
    number: "02",
    title: "Data & Analytics",
    skills: ["PostgreSQL", "SQL", "Supabase", "BigQuery", "Data modeling", "ETL and normalization", "Scoring systems", "Operational reporting"]
  },
  {
    number: "03",
    title: "Automation & AI",
    skills: ["LLM workflows", "Structured AI output", "Process automation", "Asynchronous workers", "Cloud Tasks", "Retries and idempotency", "Notifications", "Monitoring"]
  },
  {
    number: "04",
    title: "Marketing Technology",
    skills: ["SEO", "AEO", "GA4", "WordPress", "ACF", "Audience segmentation", "Lifecycle campaigns", "Content systems"]
  },
  {
    number: "05",
    title: "Revenue & Operations",
    skills: ["Revenue operations", "Sales workflows", "Field-sales operations", "Lifecycle design", "Capacity planning", "Process mapping", "Customer acquisition", "Decision support"]
  },
  {
    number: "06",
    title: "Platforms & Delivery",
    skills: ["Vercel", "Google Cloud", "GitHub", "GitHub Actions", "Supabase", "Mautic", "HubSpot", "Deployment validation"]
  }
];

const evidence = [
  { capability: "Transactional workflows and PostgreSQL", project: "FieldOS", href: "/projects/fieldos" },
  { capability: "Data modeling, scoring, and decision support", project: "Market Recovery Intelligence", href: "/projects/market-recovery" },
  { capability: "AI processing and coaching automation", project: "AI Call Quality & Coaching", href: "/projects/ai-call-quality" },
  { capability: "Python and geospatial data processing", project: "Fiber Service Area Mapping", href: "/projects/fiber-mapping" },
  { capability: "SEO, AEO, and content architecture", project: "SEO & AEO Content Platform", href: "/projects/seo-aeo" }
];

const certifications = [
  {
    title: "HubSpot Revenue Operations Certified",
    issuer: "HubSpot Academy",
    dates: "Issued August 2026 · Expires September 2028",
    credential: "tjjhc09y",
    href: "https://app-na2.hubspot.com/academy/achievements/tjjhc09y/en/1/kasey-pelchy/hubspot-revenue-operations-certified"
  },
  {
    title: "Inbound Certified",
    issuer: "HubSpot Academy",
    dates: "Issued August 2026 · Expires September 2028",
    credential: "2zrjdrg8",
    href: "https://app-na2.hubspot.com/academy/achievements/2zrjdrg8/en/1/kasey-pelchy/inbound-certified"
  }
];

export default function SkillsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="eyebrow">Skills & Certifications</p>
          <h1>Capabilities backed by working systems.</h1>
          <p>My strongest work happens where business context, process design, data, and technical execution meet. This page is a concise index; the project case studies show how the capabilities are applied.</p>
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
            <h2>Skills connected to projects.</h2>
            <p>Each capability below links to a public-safe case study that demonstrates the architecture, workflow, and problem-solving behind it.</p>
          </div>
          <div className="evidence-list">
            {evidence.map((item, index) => (
              <Link href={item.href} key={item.capability}>
                <span>0{index + 1}</span>
                <strong>{item.capability}</strong>
                <p>{item.project}</p>
                <i>View project →</i>
              </Link>
            ))}
          </div>
        </section>

        <section className="certification-section">
          <div className="section-heading">
            <p className="eyebrow">Verified learning</p>
            <h2>Certifications.</h2>
          </div>
          <div className="certification-grid">
            {certifications.map((certification) => (
              <a href={certification.href} target="_blank" rel="noreferrer" key={certification.title}>
                <div className="cert-mark">H</div>
                <div>
                  <span>{certification.issuer}</span>
                  <h3>{certification.title}</h3>
                  <p>{certification.dates}</p>
                  <small>Credential ID {certification.credential}</small>
                </div>
                <b>Verify ↗</b>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
