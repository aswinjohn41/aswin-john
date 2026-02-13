import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Added React plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This is the fix for custom domains
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', 
      },
    },
  },
})