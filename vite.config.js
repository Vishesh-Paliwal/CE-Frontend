import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: 'CE-Frontend',  // Replace 'your-repository-name' with your GitHub repo name
})
