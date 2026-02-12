import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/aswin-john/', // Matches GitHub repo name for GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Explicit entry point - serves at /aswin-john/
      },
    },
  },
})

