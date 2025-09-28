import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-dr-lamara/',   // 👈 اسم الريبو
  plugins: [react()],
})

