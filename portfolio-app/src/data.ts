export type Theme = 'light' | 'dark'

export type Link = { label: string; href: string }

export type Project = {
  title: string
  subtitle: string
  tags: string[]
  highlights: string[]
  links: Link[]
  status?: 'active' | 'planned'
}

export type Writeup = {
  title: string
  summary: string
  bullets: string[]
  tags: string[]
}

export const featuredProjects: Project[] = [
  {
    title: 'Web Crypto demos (SHA-256, integrity, input safety)',
    subtitle: 'Security fundamentals with safe rendering and browser-native crypto.',
    tags: ['Web Crypto', 'Secure UI', 'Input safety'],
    highlights: [
      'SHA-256 text hashing + copy flow',
      'Client-side file integrity hashing',
      'Terminal simulation avoids HTML injection (XSS-safe output)',
    ],
    links: [{ label: 'Live demos', href: '/demos' }],
    status: 'active',
  },
  {
    title: 'Home lab notes (Networking + Linux)',
    subtitle: 'Short, clear notes that show how I think and what I practice.',
    tags: ['TCP/IP', 'DNS', 'Linux'],
    highlights: ['Packet capture workflow', 'Common ports + services', 'Linux permissions + processes'],
    links: [{ label: 'Read writeups', href: '/writeups' }],
    status: 'planned',
  },
  {
    title: 'Recon report generator (planned)',
    subtitle: 'A small tool that turns scan output into a clean, shareable report.',
    tags: ['Recon', 'Reporting', 'Automation'],
    highlights: ['Structured output', 'Sanitized inputs', 'Clear findings + next steps'],
    links: [{ label: 'Add project', href: '/contact' }],
    status: 'planned',
  },
  {
    title: 'Log parsing mini-SIEM (planned)',
    subtitle: 'Parse auth logs, detect brute force patterns, and summarize incidents.',
    tags: ['Detection', 'Logs', 'Python'],
    highlights: ['Rule-based detection', 'Readable timelines', 'Actionable summaries'],
    links: [{ label: 'Add project', href: '/contact' }],
    status: 'planned',
  },
]

export const writeups: Writeup[] = [
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

