import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './',
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 3000,
    allowedHosts: ['sumit-patel-portfolio.onrender.com']
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: ['sumit-patel-portfolio.onrender.com']
  }
})
