import { NavLink, Outlet } from 'react-router-dom'
import type { Theme } from '../data'

export function SiteLayout({
  theme,
  onToggleTheme,
}: {
  theme: Theme
  onToggleTheme: () => void
}) {
  return (
    <div className="page">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="header">
        <div className="container header-inner">
          <NavLink className="brand" to="/" aria-label="Silas Mukabwa home">
            Silas<span className="brand-dot">.dev</span>
          </NavLink>

          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/writeups">Writeups</NavLink>
            <NavLink to="/labs">Labs</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/demos">Demos</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <button type="button" className="btn btn-ghost" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main id="content" className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Silas Mukabwa</span>
          <NavLink to="/">Back to home</NavLink>
        </div>
      </footer>
    </div>
  )
}

