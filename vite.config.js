import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// WAJIB: harus sama dengan nama repo. URL = https://chairill17.github.io/undangan-digital/
const repoName = 'undangan-digital'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
})
