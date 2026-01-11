import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // ← Change from './' to '/'
	build: {
		target: 'es2020',  // modern but safe for most browsers
		minify: false,     // temporary: disable minify to rule out terser issues
		sourcemap: true    // helps debugging
	}  
})