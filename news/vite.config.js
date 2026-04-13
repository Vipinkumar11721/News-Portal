import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['bootstrap', 'react-icons', 'aos', 'sweetalert2'],
          forms: ['react-hook-form', '@hookform/resolvers', 'yup'],
          axios: ['axios']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
