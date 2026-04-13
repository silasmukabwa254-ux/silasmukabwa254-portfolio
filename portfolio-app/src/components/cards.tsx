import { useEffect, useMemo, useRef, useState } from 'react'
import type { Project, Theme, Writeup } from '../data'

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="card">
      <h3 className="h3">{title}</h3>
      <p className="p">{children}</p>
    </article>
  )
}

export function InfoCard({ title, lines }: { title: string; lines: string[] }) {
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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3 className="h3">{project.title}</h3>
        {project.status && (
          <span className={`pill ${project.status}`}>{project.status === 'active' ? 'Active' : 'Planned'}</span>
        )}
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
          <a key={l.href + l.label} className="btn btn-ghost" href={`#${l.href}`}>
            {l.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export function WriteupCard({ writeup }: { writeup: Writeup }) {
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

export function Utterances({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return

    host.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('repo', 'silasmukabwa254-ux/silasmukabwa254-portfolio')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'guestbook')
    script.setAttribute('theme', theme === 'dark' ? 'github-dark' : 'github-light')

    host.appendChild(script)
  }, [theme])

  return <div ref={ref} className="utterances" />
}

export function PasswordStrengthCard() {
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

export function EmailValidatorCard() {
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

export function Sha256Card() {
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

export function FileIntegrityCard() {
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

export function TerminalCard() {
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

