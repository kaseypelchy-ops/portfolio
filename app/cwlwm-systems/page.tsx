import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Cwlwm Systems",
  description: "Cwlwm Systems designs custom operational software that connects people, processes, data, automation, AI, and existing business tools."
};

const services = [
  {
    number: "01",
    title: "Operational Platforms",
    description: "Purpose-built software for workflows that have outgrown spreadsheets, forms, inboxes, or a patchwork of SaaS tools.",
    items: ["Internal applications", "Field operations", "Workflow design", "Role-based tools", "System integrations"]
  },
  {
    number: "02",
    title: "Data & Decision Intelligence",
    description: "Systems that organize fragmented operational data and turn it into prioritization, measurement, reporting, and clearer decisions.",
    items: ["Data modeling", "Operational analytics", "Scoring", "Prioritization", "Measurement baselines"]
  },
  {
    number: "03",
    title: "Automation & AI",
    description: "Reliable automations and AI-assisted workflows built with validation, retries, monitoring, structured outputs, and clear human control points.",
    items: ["Process automation", "LLM workflows", "Notifications", "Async processing", "Quality controls"]
  },
  {
    number: "04",
    title: "Growth & Revenue Systems",
    description: "Connected systems across acquisition, search, content, sales, customer lifecycle, attribution, and revenue operations.",
    items: ["Search intelligence", "RevOps", "Lifecycle workflows", "Marketing technology", "Measurement"]
  }
];

const process = [
  { number: "01", title: "Understand", copy: "Clarify the business problem, users, decisions, constraints, and where work currently breaks." },
  { number: "02", title: "Map", copy: "Define the workflow, source of truth, data relationships, handoffs, and failure boundaries." },
  { number: "03", title: "Build", copy: "Create the smallest reliable system that materially improves the real work." },
  { number: "04", title: "Validate", copy: "Test against real use, edge cases, changing inputs, adoption, and measurable business outcomes." }
];

const problemPatterns = [
  "Important work depends on spreadsheets, inboxes, forms, or repeated manual entry.",
  "Teams already have software, but the handoffs between tools are where work breaks.",
  "Leadership has reports but not a trustworthy operational view of what is happening now.",
  "An off-the-shelf product handles 80% of the workflow but the missing 20% creates most of the friction.",
  "The business has enough data to make better decisions, but it is scattered across systems or difficult to interpret.",
  "AI or automation could help, but the process needs controls, validation, and integration before it can be trusted."
];

export default function CwlwmSystemsPage() {
  return (
    <>
      <section className="cwlwm-hero">
        <div className="container cwlwm-hero-grid">
          <div>
            <p className="eyebrow">Independent systems studio · Pennsylvania</p>
            <h1>We build the systems <span>between the systems.</span></h1>
            <p className="cwlwm-lede">Cwlwm Systems designs custom operational software that connects your people, processes, data, and existing tools — replacing fragmented workflows with systems built around how your business actually operates.</p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:cwlwmsystems@gmail.com?subject=Cwlwm%20Systems%20project%20inquiry">Start a conversation</a>
              <Link className="button secondary" href="/projects">See system patterns</Link>
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
            <h2>Custom operating systems for the parts of the business that do not fit neatly into one tool.</h2>
            <p>The goal is not more technology. It is fewer handoff failures, less repetitive work, clearer ownership, trustworthy information, and a system people can actually use.</p>
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
            <h2>The business works, but the workflow between the pieces does not.</h2>
            <p>Cwlwm is most useful when the problem crosses teams, software, data, and business rules rather than fitting inside a single feature request.</p>
          </div>
          <div className="cwlwm-fit-list">
            {problemPatterns.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}
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
            <div>
              <p className="eyebrow">Reusable systems, proven in real operations</p>
              <h2>See the pattern first. Then see the implementation.</h2>
            </div>
            <Link href="/projects" className="text-link">View all systems →</Link>
          </div>
          <div className="cwlwm-proof-grid cwlwm-proof-grid-all">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <span>System pattern</span>
                <h3>{project.title}</h3>
                <p>{project.systemPattern}</p>
                <small>Built example: {project.implementationName}</small>
                <b>Explore case study →</b>
              </Link>
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
            <h2>Have a process that needs a better system around it?</h2>
          </div>
          <a className="button primary" href="mailto:cwlwmsystems@gmail.com?subject=Cwlwm%20Systems%20project%20inquiry">cwlwmsystems@gmail.com ↗</a>
        </div>
      </section>
    </>
  );
}
