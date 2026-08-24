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
          <div className="project-links">
            <a className="button primary" href={project.github} target="_blank" rel="noreferrer">GitHub technical showcase ↗</a>
            {project.liveDemo && <a className="button secondary" href={project.liveDemo} target="_blank" rel="noreferrer">Existing live demo ↗</a>}
          </div>
        </div>
      </section>

      <section className="page-section compact-top"><div className="container"><PerspectiveToggle business={project.businessProblem} engineering={project.engineeringView} /></div></section>

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
            <p className="eyebrow">Try the concept</p>
            <h2>Interactive public-safe reconstruction.</h2>
            <p>This demo uses fictional data and intentionally generalized rules. It demonstrates the workflow rather than connecting to production systems.</p>
          </div>
          <ProjectDemo slug={project.slug} />
        </div>
      </section>

      <section className="page-section">
        <div className="container two-column">
          <div><p className="eyebrow">Selected engineering work</p><h2>What I worked through.</h2></div>
          <div className="work-list">{project.engineeringWork.map((item) => <div key={item}><span>↳</span>{item}</div>)}</div>
        </div>
      </section>

      <section className="stack-section"><div className="container"><p className="eyebrow">Technology</p><div className="stack-cloud">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    </>
  );
}
