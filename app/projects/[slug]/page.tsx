import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDemo } from "@/components/ProjectDemo";
import { PerspectiveToggle } from "@/components/PerspectiveToggle";
import { ProjectFlywheel } from "@/components/ProjectFlywheel";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className={`project-hero accent-${project.accent}`}>
        <div className="container">
          <div className="project-kicker"><span>{project.number}</span><p>{project.eyebrow}</p></div>
          <h1>{project.title}</h1>
          <p className="project-summary">{project.summary}</p>
          <div className="implementation-pill"><span>Built example</span><strong>{project.implementationName}</strong></div>
          <div className="project-links">
            <a className="button primary" href={project.github} target="_blank" rel="noreferrer">GitHub technical showcase ↗</a>
            {project.liveDemo && <a className="button secondary" href={project.liveDemo} target="_blank" rel="noreferrer">Existing live demo ↗</a>}
          </div>
        </div>
      </section>

      <section className="page-section project-pattern-section">
        <div className="container project-pattern-grid">
          <div>
            <p className="eyebrow">Reusable system pattern</p>
            <h2>{project.systemPattern}</h2>
          </div>
          <div>
            <p className="eyebrow">Where this can apply</p>
            <div className="application-cloud">{project.applications.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="page-section compact-top"><div className="container"><PerspectiveToggle business={project.businessProblem} engineering={project.engineeringView} /></div></section>

      <section className="page-section business-value-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Business value</p>
            <h2>What this kind of system changes.</h2>
            <p>The implementation details vary by organization. The value pattern is reusable.</p>
          </div>
          <div className="business-value-grid">
            {project.businessValue.map((item, index) => (
              <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section flywheel-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">How the system compounds</p>
            <h2>{project.flywheel.title}</h2>
            <p>{project.flywheel.description}</p>
          </div>
          <ProjectFlywheel flywheel={project.flywheel} accent={project.accent} />
        </div>
      </section>

      <section className="page-section demo-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">See the pattern</p>
            <h2>Interactive generalized reconstruction.</h2>
            <p>This demo uses fictional data and intentionally generalized rules so the underlying workflow can be understood without exposing a specific organization&apos;s systems or data.</p>
          </div>
          <ProjectDemo slug={project.slug} />
        </div>
      </section>

      <section className="page-section">
        <div className="container two-column">
          <div><p className="eyebrow">Selected engineering work</p><h2>What sits beneath the business workflow.</h2></div>
          <div className="work-list">{project.engineeringWork.map((item) => <div key={item}><span>↳</span>{item}</div>)}</div>
        </div>
      </section>

      <section className="stack-section"><div className="container"><p className="eyebrow">Technology used in the built example</p><div className="stack-cloud">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    </>
  );
}
