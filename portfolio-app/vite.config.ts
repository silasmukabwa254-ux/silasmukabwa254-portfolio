import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // For GitHub Pages: https://<user>.github.io/<repo>/
  base: mode === 'production' ? '/silasmukabwa254-portfolio/' : '/',
}))
