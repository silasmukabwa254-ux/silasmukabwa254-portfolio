import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'

type Link = { label: string; href: string }
type Project = {
  title: string
  subtitle: string
  tags: string[]
  highlights: string[]
  links: Link[]
  status?: 'active' | 'planned'
}
type Writeup = {
  title: string
  summary: string
  bullets: string[]
  tags: string[]
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const featuredProjects: Project[] = [
    {
      title: 'Web Crypto demos (SHA-256, integrity, input safety)',
      subtitle: 'Security fundamentals with safe rendering and browser-native crypto.',
      tags: ['Web Crypto', 'Secure UI', 'Input safety'],
      highlights: [
        'SHA-256 text hashing + copy flow',
        'Client-side file integrity hashing',
        'Terminal simulation avoids HTML injection (XSS-safe output)',
      ],
      links: [{ label: 'Live demos', href: '#demos' }],
      status: 'active',
    },
    {
      title: 'Home lab notes (Networking + Linux)',
      subtitle: 'Short, clear notes that show how I think and what I practice.',
      tags: ['TCP/IP', 'DNS', 'Linux'],
      highlights: ['Packet capture workflow', 'Common ports + services', 'Linux permissions + processes'],
      links: [{ label: 'Read writeups', href: '#writeups' }],
      status: 'planned',
    },
    {
      title: 'Recon report generator (planned)',
      subtitle: 'A small tool that turns scan output into a clean, shareable report.',
      tags: ['Recon', 'Reporting', 'Automation'],
      highlights: ['Structured output', 'Sanitized inputs', 'Clear findings + next steps'],
      links: [{ label: 'Add project', href: '#contact' }],
      status: 'planned',
    },
    {
      title: 'Log parsing mini-SIEM (planned)',
      subtitle: 'Parse auth logs, detect brute force patterns, and summarize incidents.',
      tags: ['Detection', 'Logs', 'Python'],
      highlights: ['Rule-based detection', 'Readable timelines', 'Actionable summaries'],
      links: [{ label: 'Add project', href: '#contact' }],
      status: 'planned',
    },
  ]

  const writeups: Writeup[] = [
    {
      title: 'Hashing vs encryption',
      summary: 'A practical mental model: what each does, what it cannot do, and where people commonly confuse them.',
      bullets: ['One-way vs reversible', 'Integrity vs confidentiality', 'Where salts/keys fit in'],
      tags: ['Crypto basics'],
    },
    {
      title: 'Input validation & XSS prevention',
      summary: 'Why safe output beats “sanitizing everything”, and how to avoid DOM injection in UI features.',
      bullets: ['Prefer text nodes over innerHTML', 'Validate at boundaries', 'Escape only when you must'],
      tags: ['AppSec', 'XSS'],
    },
    {
      title: 'File integrity with SHA-256',
      summary: 'What a hash proves (and what it doesn’t), plus a simple verification workflow you can repeat.',
      bullets: ['Hash comparison workflow', 'Threat model: tampering', 'Limits: authenticity & trust'],
      tags: ['Integrity'],
    },
  ]

  return (
    <div className="page">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Silas Mukabwa home">
            Silas<span className="brand-dot">.dev</span>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#proof">Proof</a>
            <a href="#projects">Featured</a>
            <a href="#writeups">Writeups</a>
            <a href="#certs">Certs</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main id="content" className="main">
        <section className="hero container" id="top">
          <div className="hero-copy">
            <p className="badge">Cybersecurity • ICT Student</p>
            <h1 className="h1">
              Silas Mukabwa — building secure systems with strong fundamentals.
            </h1>
            <p className="lede">
              I focus on practical security: web app safety, Linux, networking, and small tools that demonstrate
              real-world thinking.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#projects">Featured work</a>
              <a className="btn btn-ghost" href="#contact">Contact</a>
              <a className="btn btn-ghost" href="https://github.com/silasmukabwa254-ux" target="_blank" rel="noreferrer">GitHub</a>
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

        <section className="section container" id="about">
          <h2 className="h2">About</h2>
          <p className="p">
            I’m a cybersecurity-focused ICT student who likes building small, clear tools and writeups that demonstrate
            real skills. I care about safe output, good threat models, and being able to explain decisions.
          </p>
        </section>

        <section className="section container" id="proof">
          <h2 className="h2">What I bring</h2>
          <div className="grid">
            <InfoCard title="Secure-by-default mindset" lines={['Prefer safe output over sanitizing later', 'Threat model before building features']} />
            <InfoCard title="Hands-on fundamentals" lines={['Networking concepts (TCP/IP, DNS, HTTP)', 'Linux basics + repeatable workflows']} />
            <InfoCard title="Developer-friendly communication" lines={['Readable diffs and clean structure', 'Writeups that explain “why” clearly']} />
            <InfoCard title="Practical learning pace" lines={['Small projects shipped regularly', 'Focus on correctness + clarity']} />
          </div>
        </section>

        <section className="section container" id="projects">
          <h2 className="h2">Featured work</h2>
          <p className="p">A clean overview that a developer or recruiter can scan quickly.</p>
          <div className="grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        <section className="section container" id="writeups">
          <h2 className="h2">Writeups</h2>
          <p className="p">Short posts that show security thinking and communication.</p>
          <div className="grid">
            {writeups.map((w) => (
              <WriteupCard key={w.title} writeup={w} />
            ))}
            <Card title="Learning log (ongoing)">TCP/IP, DNS, HTTP basics, plus labs and small scripts as I learn.</Card>
          </div>
        </section>

        <section className="section container" id="certs">
          <h2 className="h2">Certifications & labs</h2>
          <p className="p">
            Add proof links here (TryHackMe/HTB profiles, course certificates, or lab notes). This section is designed to
            evolve as you complete milestones.
          </p>
          <div className="chips" role="list" aria-label="Certs and labs">
            {['TryHackMe (add profile)', 'HTB Academy (add profile)', 'Google Cybersecurity (add certificate)', 'Home labs (notes)'].map(
              (t) => (
                <span className="chip" role="listitem" key={t}>
                  {t}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="section container" id="demos">
          <h2 className="h2">Interactive demos</h2>
          <p className="p">Small security-focused widgets that run entirely in your browser.</p>
          <div className="grid">
            <PasswordStrengthCard />
            <EmailValidatorCard />
            <Sha256Card />
            <FileIntegrityCard />
            <TerminalCard />
          </div>
        </section>

        <section className="section container" id="tools">
          <h2 className="h2">Tools & technologies</h2>
          <div className="chips" role="list">
            {['Linux (Learning)', 'Networking Fundamentals', 'Wireshark (Beginner)', 'Git & GitHub', 'Web Security Basics'].map(
              (t) => (
                <span className="chip" role="listitem" key={t}>
                  {t}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="section container" id="contact">
          <h2 className="h2">Contact</h2>
          <div className="contact">
            <a className="btn" href="mailto:silasmukabwa254@gmail.com">
              Email
            </a>
            <a className="btn btn-ghost" href="tel:+254769810785">
              Call
            </a>
            <a className="btn btn-ghost" href="https://github.com/silasmukabwa254-ux" target="_blank" rel="noreferrer">
              GitHub profile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Silas Mukabwa</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="card">
      <h3 className="h3">{title}</h3>
      <p className="p">{children}</p>
    </article>
  )
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <article className="card">
      <h3 className="h3">{title}</h3>
      <ul className="list">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3 className="h3">{project.title}</h3>
        {project.status && <span className={`pill ${project.status}`}>{project.status === 'active' ? 'Active' : 'Planned'}</span>}
      </div>
      <p className="p">{project.subtitle}</p>
      <div className="chips chips-tight" role="list" aria-label="Project tags">
        {project.tags.map((t) => (
          <span className="chip" role="listitem" key={t}>
            {t}
          </span>
        ))}
      </div>
      <ul className="list">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="row">
        {project.links.map((l) => (
          <a key={l.href + l.label} className="btn btn-ghost" href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </article>
  )
}

function WriteupCard({ writeup }: { writeup: Writeup }) {
  return (
    <article className="card">
      <h3 className="h3">{writeup.title}</h3>
      <p className="p">{writeup.summary}</p>
      <ul className="list">
        {writeup.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="chips chips-tight" role="list" aria-label="Writeup tags">
        {writeup.tags.map((t) => (
          <span className="chip" role="listitem" key={t}>
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

function PasswordStrengthCard() {
  const [password, setPassword] = useState('')
  const strength = useMemo(() => {
    let s = 0
    if (password.length >= 8) s++
    if (/[A-Z]/.test(password)) s++
    if (/[0-9]/.test(password)) s++
    if (/[^A-Za-z0-9]/.test(password)) s++
    return s
  }, [password])

  const { label, pct, color } = useMemo(() => {
    if (!password) return { label: '—', pct: 0, color: 'var(--danger)' }
    if (strength <= 2) return { label: 'Weak', pct: 33, color: 'var(--danger)' }
    if (strength === 3) return { label: 'Moderate', pct: 66, color: 'var(--warn)' }
    return { label: 'Strong', pct: 100, color: 'var(--ok)' }
  }, [password, strength])

  return (
    <article className="card">
      <h3 className="h3">Password strength checker</h3>
      <p className="p">Checks length, uppercase, numbers, and symbols.</p>
      <label className="field">
        <span className="sr-only">Password</span>
        <input
          className="input"
          type="password"
          value={password}
          placeholder="Enter a password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </label>
      <div className="meter" aria-label={`Strength: ${label}`}>
        <div className="meter-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <p className="muted">Strength: {label}</p>
    </article>
  )
}

function EmailValidatorCard() {
  const [email, setEmail] = useState('')
  const ok = useMemo(() => {
    if (!email) return null
    return /^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(email)
  }, [email])

  return (
    <article className="card">
      <h3 className="h3">Email format validator</h3>
      <p className="p">A quick format check (not deliverability).</p>
      <label className="field">
        <span className="sr-only">Email</span>
        <input
          className={`input ${ok === null ? '' : ok ? 'valid' : 'invalid'}`}
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
        />
      </label>
      {ok !== null && <p className={`muted ${ok ? 'ok' : 'danger'}`}>{ok ? 'Looks valid' : 'Invalid format'}</p>}
    </article>
  )
}

function Sha256Card() {
  const [text, setText] = useState('')
  const [hash, setHash] = useState('')
  const [copied, setCopied] = useState(false)

  async function generate() {
    if (!text) {
      setHash('')
      return
    }
    const data = new TextEncoder().encode(text)
    const buf = await crypto.subtle.digest('SHA-256', data)
    const hex = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
    setHash(hex)
    setCopied(false)
  }

  async function copy() {
    if (!hash) return
    await navigator.clipboard.writeText(hash)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <article className="card">
      <h3 className="h3">SHA-256 hash generator</h3>
      <p className="p">Uses the Web Crypto API.</p>
      <label className="field">
        <span className="sr-only">Text to hash</span>
        <input className="input" value={text} placeholder="Enter text" onChange={(e) => setText(e.target.value)} />
      </label>
      <div className="row">
        <button className="btn" type="button" onClick={generate}>
          Generate
        </button>
        <button className="btn btn-ghost" type="button" onClick={copy} disabled={!hash}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {hash && <pre className="code">{hash}</pre>}
    </article>
  )
}

function FileIntegrityCard() {
  const [hash, setHash] = useState('')
  const [name, setName] = useState('')

  async function onFile(file: File | null) {
    if (!file) {
      setHash('')
      setName('')
      return
    }
    setName(file.name)
    const buf = await file.arrayBuffer()
    const out = await crypto.subtle.digest('SHA-256', buf)
    const hex = Array.from(new Uint8Array(out))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
    setHash(hex)
  }

  return (
    <article className="card">
      <h3 className="h3">File integrity checker (SHA-256)</h3>
      <p className="p">Generate a hash for a local file (runs entirely in your browser).</p>
      <input className="input" type="file" onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
      {name && <p className="muted">File: {name}</p>}
      {hash && <pre className="code">{hash}</pre>}
    </article>
  )
}

function TerminalCard() {
  const [lines, setLines] = useState<Array<{ kind: 'in' | 'out'; text: string }>>([
    { kind: 'out', text: 'Welcome to SilasOS v1.0' },
    { kind: 'out', text: "Type 'help' to see available commands." },
  ])
  const [value, setValue] = useState('')
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  const respond = (cmd: string) => {
    switch (cmd) {
      case 'help':
        return 'Available commands: help, whoami, ls, clear'
      case 'whoami':
        return 'silas - aspiring cybersecurity analyst'
      case 'ls':
        return 'projects  security-tools  learning-log'
      default:
        return 'Command not found.'
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const cmd = value.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') {
      setLines([{ kind: 'out', text: 'Cleared.' }])
      setValue('')
      return
    }
    setLines((prev) => [...prev, { kind: 'in', text: cmd }, { kind: 'out', text: respond(cmd) }])
    setValue('')
  }

  return (
    <article className="card">
      <h3 className="h3">Linux terminal simulation</h3>
      <div className="terminal" role="region" aria-label="Terminal output">
        {lines.map((l, i) => (
          <div key={i} className={l.kind === 'in' ? 'term-in' : 'term-out'}>
            {l.kind === 'in' ? `> ${l.text}` : l.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form className="row" onSubmit={onSubmit}>
        <input className="input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter command" />
        <button className="btn" type="submit">
          Run
        </button>
      </form>
    </article>
  )
}

export default App
