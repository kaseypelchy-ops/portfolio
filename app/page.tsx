import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Business Systems · HubSpot · RevOps · Software · Data · Automation</p>
            <h1>I turn messy business workflows into <span>clear, usable systems.</span></h1>
            <p className="hero-lede">I work in HubSpot support and Revenue Operations at protocol80, building on an established background in business software, marketing operations, data, and integrations. I translate process problems into practical CRM configuration, automation, and custom systems.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">Explore system patterns</Link>
              <a className="button secondary" href="https://cwlwmsystems.vercel.app" target="_blank" rel="noreferrer">Visit Cwlwm Systems ↗</a>
            </div>
          </div>

          <div className="hero-system" aria-label="Business problems to reusable systems">
            <div className="system-label">BUSINESS PROBLEM</div>
            <div className="system-line" />
            <div className="system-node">Workflow</div>
            <div className="system-node">Data + rules</div>
            <div className="system-node">System architecture</div>
            <div className="system-node bright">Reusable operating system</div>
            <div className="system-line" />
            <div className="system-label">BETTER BUSINESS DECISION</div>
          </div>
        </div>
      </section>

      <section className="capability-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What I build</p>
            <h2>Systems that sit between business needs and technical execution.</h2>
            <p>The specific industry can change. The underlying problems are often the same: fragmented workflows, weak handoffs, scattered data, repetitive work, and limited visibility.</p>
          </div>
          <div className="capability-grid">
            <article><span>01</span><h3>Operational Platforms</h3><p>Custom workflows, internal tools, distributed-team systems, scheduling, lifecycle tracking, and role-based operations.</p></article>
            <article><span>02</span><h3>Decision Intelligence</h3><p>Data models, scoring, prioritization, reporting, baselines, and systems that turn evidence into a clearer next action.</p></article>
            <article><span>03</span><h3>Automation & AI</h3><p>Structured AI workflows, asynchronous processing, notifications, retries, validation, and human decision points.</p></article>
            <article><span>04</span><h3>Growth & Revenue Systems</h3><p>Search intelligence, lifecycle operations, acquisition workflows, content systems, attribution, and revenue-process integration.</p></article>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="section-heading split">
            <div><p className="eyebrow">Selected systems</p><h2>Reusable business patterns proven through real builds.</h2></div>
            <Link href="/projects" className="text-link">View all systems →</Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Recent work</p>
            <h2>CRM implementation and business applications.</h2>
            <p>Alongside the engineering case studies, my newer work includes HubSpot onboarding and configuration, cross-system automation, and independent client-facing websites and applications.</p>
          </div>
          <div className="capability-grid">
            <article><span>01</span><h3>HubSpot &amp; RevOps delivery</h3><p>Guided onboarding, sales-process mapping, CRM properties and pipelines, record layouts, workflow troubleshooting, migration planning, and integration support. Client configurations are not published.</p></article>
            <article><span>02</span><h3>Automotive storefront &amp; inventory</h3><p>Next.js storefront architecture with vehicle-fitment data, SKU and supplier records, database migrations, CSV imports, and a protected staff workspace. <a href="https://github.com/kaseypelchy-ops/olson-tenglund" target="_blank" rel="noreferrer">View repository ↗</a></p></article>
            <article><span>03</span><h3>Regional business website</h3><p>A responsive informational site for Olson &amp; Tenglund across three Pennsylvania store locations, supported by local-search and business-presence work. <a href="https://github.com/kaseypelchy-ops/olson-tenglund-info" target="_blank" rel="noreferrer">View repository ↗</a></p></article>
            <article><span>04</span><h3>Independent client projects</h3><p>Web and operational systems through Cwlwm Systems, including community-oriented work and an active church-website codebase. <a href="https://github.com/kaseypelchy-ops/church-website" target="_blank" rel="noreferrer">Church repo ↗</a></p></article>
          </div>
        </div>
      </section>

      <section className="method-strip">
        <div className="container method-inner">
          <p className="eyebrow">My default process</p>
          <div className="method-flow"><span>Problem</span><i>→</i><span>Workflow</span><i>→</i><span>Data</span><i>→</i><span>System</span><i>→</i><span>Validate</span><i>→</i><span>Improve</span></div>
        </div>
      </section>
    </>
  );
}
