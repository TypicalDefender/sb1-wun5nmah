import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [mdx(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  // Enable optimizations for better performance
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      // Improve chunking strategy
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion']
          }
        }
      }
    },
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});