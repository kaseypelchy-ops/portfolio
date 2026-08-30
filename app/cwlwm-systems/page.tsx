import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cwlwm Systems",
  description: "Cwlwm Systems builds practical software, data, automation, AI, and marketing-operations systems that connect fragmented work."
};

const services = [
  {
    number: "01",
    title: "Operational Software",
    description: "Purpose-built internal tools, workflow applications, dashboards, and interfaces designed around how the work actually happens.",
    items: ["Internal applications", "Workflow design", "Role-based tools", "System integrations"]
  },
  {
    number: "02",
    title: "Data & Decision Systems",
    description: "Structured data models, pipelines, scoring logic, reporting, and analytical layers that turn scattered records into usable evidence.",
    items: ["Data modeling", "PostgreSQL and SQL", "Operational analytics", "Scoring and prioritization"]
  },
  {
    number: "03",
    title: "Automation & AI",
    description: "Reliable automations and AI-assisted workflows with validation, retries, monitoring, and clear human decision points.",
    items: ["Process automation", "LLM workflows", "Notifications", "Asynchronous processing"]
  },
  {
    number: "04",
    title: "Marketing & Revenue Operations",
    description: "Connected acquisition, content, sales, lifecycle, and measurement systems that reduce handoff friction and improve visibility.",
    items: ["Marketing technology", "Revenue operations", "SEO and AEO systems", "Lifecycle workflows"]
  }
];

const process = [
  { number: "01", title: "Understand", copy: "Clarify the problem, users, decisions, constraints, and current points of friction." },
  { number: "02", title: "Map", copy: "Define the workflow, source of truth, data relationships, and failure boundaries." },
  { number: "03", title: "Build", copy: "Create the smallest reliable system that materially improves the work." },
  { number: "04", title: "Validate", copy: "Test the system against real use, edge cases, changing inputs, and measurable outcomes." }
];

const proof = [
  { title: "FieldOS", description: "Address-centered field-sales operations and installation-capacity workflows.", href: "/projects/fieldos" },
  { title: "Market Recovery Intelligence", description: "Market scoring, prioritization, investigation, and outcome measurement.", href: "/projects/market-recovery" },
  { title: "AI Call Quality & Coaching", description: "Structured AI evaluation connected to coaching and management workflows.", href: "/projects/ai-call-quality" }
];

export default function CwlwmSystemsPage() {
  return (
    <>
      <section className="cwlwm-hero">
        <div className="container cwlwm-hero-grid">
          <div>
            <p className="eyebrow">Independent systems studio · Pennsylvania</p>
            <h1>Connect the work. <span>Remove the friction.</span></h1>
            <p className="cwlwm-lede">Cwlwm Systems designs and builds practical software, data, automation, AI, and marketing-operations systems for organizations whose work has outgrown spreadsheets, manual handoffs, or disconnected tools.</p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:cwlwmsystems@gmail.com?subject=Cwlwm%20Systems%20project%20inquiry">Start a conversation</a>
              <Link className="button secondary" href="/projects">See working examples</Link>
            </div>
          </div>

          <div className="cwlwm-brand-card" aria-label="Cwlwm Systems brand mark">
            <Image
              src="/cwlwm-systems-logo.png"
              alt="Cwlwm Systems"
              width={1917}
              height={505}
              className="cwlwm-logo"
              priority
            />
            <p><b>Cwlwm</b> · “KULL-um” · knot, tie, bond</p>
          </div>
        </div>
      </section>

      <section className="page-section cwlwm-services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What Cwlwm Systems builds</p>
            <h2>Practical systems around real operations.</h2>
            <p>The goal is not more technology. It is a clearer workflow, trustworthy information, less repetitive work, and a system people can actually use.</p>
          </div>
          <div className="cwlwm-service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section cwlwm-fit-section">
        <div className="container cwlwm-fit-grid">
          <div className="section-heading">
            <p className="eyebrow">A good fit when</p>
            <h2>The process works—but the pieces do not.</h2>
          </div>
          <div className="cwlwm-fit-list">
            <div><span>01</span><p>Important work depends on spreadsheets, inboxes, or repeated manual entry.</p></div>
            <div><span>02</span><p>Teams use multiple tools, but information and ownership break between them.</p></div>
            <div><span>03</span><p>Leadership needs trustworthy operational visibility rather than another static report.</p></div>
            <div><span>04</span><p>An off-the-shelf product almost fits, but cannot support the real workflow.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section cwlwm-process-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Working approach</p>
            <h2>From operational problem to useful system.</h2>
          </div>
          <div className="cwlwm-process-grid">
            {process.map((step) => (
              <article key={step.title}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section cwlwm-proof-section">
        <div className="container">
          <div className="section-heading split">
            <div><p className="eyebrow">Evidence of the approach</p><h2>Selected public-safe case studies.</h2></div>
            <Link href="/projects" className="text-link">View all projects →</Link>
          </div>
          <div className="cwlwm-proof-grid">
            {proof.map((item) => (
              <Link href={item.href} key={item.title}><span>Case study</span><h3>{item.title}</h3><p>{item.description}</p><b>Explore project →</b></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cwlwm-cta">
        <div className="container cwlwm-cta-inner">
          <div className="cwlwm-cta-copy">
            <div className="cwlwm-cta-brand">
              <Image src="/cwlwm-knot.png" alt="" width={514} height={505} aria-hidden="true" />
              <p className="eyebrow">Cwlwm Systems</p>
            </div>
            <h2>Have a process that needs a better system?</h2>
          </div>
          <a className="button primary" href="mailto:cwlwmsystems@gmail.com?subject=Cwlwm%20Systems%20project%20inquiry">cwlwmsystems@gmail.com ↗</a>
        </div>
      </section>
    </>
  );
}
