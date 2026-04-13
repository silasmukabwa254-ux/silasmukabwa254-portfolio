import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'

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
            <a href="#skills">Focus</a>
            <a href="#projects">Projects</a>
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
            <p className="badge">ICT Student • Cybersecurity track</p>
            <h1 className="h1">Silas Mukabwa</h1>
            <p className="lede">
              Building a strong foundation in web development, networking, and secure systems.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="https://github.com/silasmukabwa254-ux" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="Quick highlights">
            <div className="kpi">
              <div className="kpi-label">Interests</div>
              <div className="kpi-value">AppSec • Linux • Networking</div>
            </div>
            <div className="kpi">
              <div className="kpi-label">Currently learning</div>
              <div className="kpi-value">TCP/IP, DNS, HTTP, labs</div>
            </div>
            <div className="kpi">
              <div className="kpi-label">Location</div>
              <div className="kpi-value">Kenya (EAT)</div>
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <h2 className="h2">About</h2>
          <p className="p">
            I’m passionate about technology, cybersecurity, and building secure systems. I’m strengthening my foundation
            in web development and networking while practicing with small, practical tools.
          </p>
        </section>

        <section className="section container" id="skills">
          <h2 className="h2">Security interests</h2>
          <div className="grid">
            <Card title="Network Security Fundamentals">Core concepts, threat models, and safe defaults.</Card>
            <Card title="Linux Systems (Learning)">CLI basics, permissions, processes, and tooling.</Card>
            <Card title="Web App Security Basics">Input validation, safe rendering, and common pitfalls.</Card>
            <Card title="Git & Version Control">Clean history, readable diffs, and deployable builds.</Card>
          </div>
        </section>

        <section className="section container" id="projects">
          <h2 className="h2">Security projects (browser demos)</h2>
          <p className="p">
            These demos run client-side using the Web Crypto API and safe rendering. They’re meant to show fundamentals,
            not replace production tooling.
          </p>
          <div className="grid">
            <PasswordStrengthCard />
            <EmailValidatorCard />
            <Sha256Card />
            <FileIntegrityCard />
            <TerminalCard />
          </div>
        </section>

        <section className="section container" id="writeups">
          <h2 className="h2">Writeups</h2>
          <div className="grid">
            <Card title="Hashing vs encryption (quick notes)">
              Clear mental models, when to use each, and common mistakes.
            </Card>
            <Card title="Input validation & XSS prevention">
              Why safe output matters. This site avoids injecting user input as HTML in interactive widgets.
            </Card>
            <Card title="File integrity with SHA-256">
              What a hash proves (and what it doesn’t), plus a simple verification workflow.
            </Card>
            <Card title="Learning log (ongoing)">
              TCP/IP, DNS, HTTP basics, plus labs and small scripts as I learn.
            </Card>
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
