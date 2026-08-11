import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' funciona tanto en GitHub Pages (proyecto) como en Vercel/Netlify.
// Si despliegas en GitHub Pages bajo un subdirectorio, puedes dejarlo así
// (rutas relativas) sin tener que tocar nada más.
export default defineConfig({
  plugins: [react()],
  base: './',
})
