import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: https://<user>.github.io/<repo>/
  base: '/silasmukabwa254-portfolio/',
})
