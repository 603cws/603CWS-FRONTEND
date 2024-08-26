import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg'], // Include more image types
  server: {
    open: true, // Automatically open the app in the browser on server start
    port: 5173, // Frontend is running on port 5173
    proxy: {
      '/api': {
        target: 'https://603-cws-backend.vercel.app', // Backend server address
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite: "localhost",
        cookiePathRewrite: "/",
      }
    }
  },
  build: {
    sourcemap: true, // Generate source maps for easier debugging
  }
})
