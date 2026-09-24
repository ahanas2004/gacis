import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('leaflet')) {
              return 'vendor-leaflet';
            }
            return 'vendor';
          }
          if (id.includes('/components/Home/')) {
            return 'components-home';
          }
          if (id.includes('/components/NetworkMap/')) {
            return 'components-network';
          }
          if (id.includes('/components/Services/')) {
            return 'components-services';
          }
          if (id.includes('/data/locations.js')) {
            return 'data-locations';
          }
          if (id.includes('/data/services.js')) {
            return 'data-services';
          }
          if (id.includes('/data/articles.js')) {
            return 'data-articles';
          }
          if (id.includes('/data/industries.js')) {
            return 'data-industries';
          }
          if (id.includes('/data/routeCalculationEngine.js')) {
            return 'data-routeEngine';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          if (/\.(mp4|webm|ogg)$/.test(assetInfo.name)) {
            return `assets/video/[name]-[hash].${ext}`;
          }
          return `assets/[ext]/[name]-[hash].${ext}`;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['leaflet'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
})