import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'cobrix',
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      overlay: true
    }
  },
  css: {
    postcss: false
  },
  optimizeDeps: {
    include: ['cookie', 'react-router-dom']
  },
  build: {
    assetsInlineLimit: 0, // Disable asset inlining
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  },
  resolve: {
    alias: {
      '@assets': '/src/assets'
    }
  }
})
