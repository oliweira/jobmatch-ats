import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jobmatch-ats/', // Substitua "jobmatch-ats" pelo nome exato do seu repositório no GitHub
})
