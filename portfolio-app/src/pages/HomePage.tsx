import { Link } from 'react-router-dom'
import { featuredProjects } from '../data'
import { InfoCard, ProjectCard } from '../components/cards'

export function HomePage() {
  return (
    <>
      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="badge">Cybersecurity • ICT Student</p>
          <h1 className="h1">Silas Mukabwa — building secure systems with strong fundamentals.</h1>
          <p className="lede">
            I focus on practical security: web app safety, Linux, networking, and small tools that demonstrate real-world
            thinking.
          </p>
          <div className="hero-cta">
            <Link className="btn" to="/projects">
              Featured work
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
            <a className="btn btn-ghost" href="https://github.com/silasmukabwa254-ux" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Quick highlights">
          <div className="kpi">
            <div className="kpi-label">Focus areas</div>
            <div className="kpi-value">AppSec • Linux • Networking</div>
          </div>
          <div className="kpi">
            <div className="kpi-label">Currently learning</div>
            <div className="kpi-value">TCP/IP • DNS • HTTP • labs</div>
          </div>
          <div className="kpi">
            <div className="kpi-label">Available for</div>
            <div className="kpi-value">Internships • Junior roles</div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="h2">About</h2>
        <p className="p">
          I’m a cybersecurity-focused ICT student who likes building small, clear tools and writeups that demonstrate real
          skills. I care about safe output, good threat models, and being able to explain decisions.
        </p>
      </section>

      <section className="section container">
        <h2 className="h2">What I bring</h2>
        <div className="grid">
          <InfoCard
            title="Secure-by-default mindset"
            lines={['Prefer safe output over sanitizing later', 'Threat model before building features']}
          />
          <InfoCard
            title="Hands-on fundamentals"
            lines={['Networking concepts (TCP/IP, DNS, HTTP)', 'Linux basics + repeatable workflows']}
          />
          <InfoCard
            title="Developer-friendly communication"
            lines={['Readable diffs and clean structure', 'Writeups that explain “why” clearly']}
          />
          <InfoCard title="Practical learning pace" lines={['Small projects shipped regularly', 'Focus on correctness + clarity']} />
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <h2 className="h2">Featured work</h2>
            <p className="p">A clean overview that a developer or recruiter can scan quickly.</p>
          </div>
          <Link className="btn btn-ghost" to="/projects">
            View all
          </Link>
        </div>
        <div className="grid">
          {featuredProjects.slice(0, 4).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}

