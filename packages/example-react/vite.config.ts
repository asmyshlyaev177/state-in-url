import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: './dist',
    emptyOutDir: true
  }
})
