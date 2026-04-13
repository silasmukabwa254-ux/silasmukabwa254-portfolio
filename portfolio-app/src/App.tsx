import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import type { Theme } from './data'
import { SiteLayout } from './components/SiteLayout'
import { CommunityPage } from './pages/CommunityPage'
import { ContactPage } from './pages/ContactPage'
import { DemosPage } from './pages/DemosPage'
import { HomePage } from './pages/HomePage'
import { LabsPage } from './pages/LabsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { WriteupsPage } from './pages/WriteupsPage'

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
    <Routes>
      <Route
        element={<SiteLayout theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />}
      >
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="writeups" element={<WriteupsPage />} />
        <Route path="labs" element={<LabsPage />} />
        <Route path="community" element={<CommunityPage theme={theme} />} />
        <Route path="demos" element={<DemosPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
