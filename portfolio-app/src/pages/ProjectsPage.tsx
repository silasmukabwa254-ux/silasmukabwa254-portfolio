import { featuredProjects } from '../data'
import { ProjectCard } from '../components/cards'

export function ProjectsPage() {
  return (
    <section className="section container">
      <h1 className="h2">Projects</h1>
      <p className="p">A mix of practical demos and planned tools I’m building as I learn.</p>
      <div className="grid">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

