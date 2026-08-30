import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card accent-${project.accent}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-arrow">↗</span>
      </div>
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <p className="project-implementation">Built example: <strong>{project.implementationName}</strong></p>
      <div className="chip-row">
        {project.applications.slice(0, 3).map((item) => <span className="chip" key={item}>{item}</span>)}
      </div>
    </Link>
  );
}
