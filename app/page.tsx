import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Systems thinking · Software · Data · Automation · AI · Growth</p>
            <h1>I turn messy business workflows into <span>clear, usable systems.</span></h1>
            <p className="hero-lede">I design and build operational platforms that connect people, process, data, and existing software. The portfolio is organized around reusable business patterns so the work is understandable beyond the industry where each system was first built.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">Explore system patterns</Link>
              <Link className="button secondary" href="/cwlwm-systems">Cwlwm Systems</Link>
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

      <section className="method-strip">
        <div className="container method-inner">
          <p className="eyebrow">My default process</p>
          <div className="method-flow"><span>Problem</span><i>→</i><span>Workflow</span><i>→</i><span>Data</span><i>→</i><span>System</span><i>→</i><span>Validate</span><i>→</i><span>Improve</span></div>
        </div>
      </section>
    </>
  );
}
