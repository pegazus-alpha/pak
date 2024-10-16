import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    logLevel: 'silent', // Pour masquer les logs excessifs
    target: 'esnext', // Tu peux ajuster selon ta version de Node
  },
  plugins: [react()],
})
