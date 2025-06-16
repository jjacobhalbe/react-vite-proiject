import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      include: '**/*.jsx',
    }),
    svgr(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
      clientPort: 5173,
    },
  },
})
