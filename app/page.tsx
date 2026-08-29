import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Marketing technology · Software · Data · Automation · AI</p>
            <h1>I build systems that turn operational problems into <span>usable software and data.</span></h1>
            <p className="hero-lede">I work across marketing, operations, software engineering, data, automation, AI, and analytics — usually building the system when the process I need does not already exist.</p>
            <div className="hero-actions">
              <Link className="button primary" href="/projects">Explore projects</Link>
              <Link className="button secondary" href="/about">How I work</Link>
            </div>
          </div>

          <div className="hero-system" aria-label="Business problems to engineering systems">
            <div className="system-label">BUSINESS PROBLEM</div>
            <div className="system-line" />
            <div className="system-node">Workflow</div>
            <div className="system-node">Data model</div>
            <div className="system-node">Architecture</div>
            <div className="system-node bright">Working system</div>
            <div className="system-line" />
            <div className="system-label">OPERATIONAL DECISION</div>
          </div>
        </div>
      </section>

      <section className="capability-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What I work across</p>
            <h2>Business context with technical execution.</h2>
          </div>
          <div className="capability-grid">
            <article><span>01</span><h3>Software Engineering</h3><p>Full-stack applications, APIs, transactional workflows, internal tools, and operational software.</p></article>
            <article><span>02</span><h3>Data & Analytics</h3><p>PostgreSQL, data modeling, scoring systems, reporting, analytics, and decision-support logic.</p></article>
            <article><span>03</span><h3>Automation & AI</h3><p>LLM pipelines, asynchronous processing, notifications, retries, workflow automation, and monitoring.</p></article>
            <article><span>04</span><h3>Marketing Technology</h3><p>Field sales, market intelligence, SEO/AEO, search operations, customer acquisition, and cross-system integration.</p></article>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="section-heading split">
            <div><p className="eyebrow">Selected work</p><h2>Systems built around real operational problems.</h2></div>
            <Link href="/projects" className="text-link">View all projects →</Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="method-strip">
        <div className="container method-inner">
          <p className="eyebrow">My default process</p>
          <div className="method-flow"><span>Problem</span><i>→</i><span>Workflow</span><i>→</i><span>Data</span><i>→</i><span>Build</span><i>→</i><span>Validate</span><i>→</i><span>Decision</span></div>
        </div>
      </section>
    </>
  );
}
