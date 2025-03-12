import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      include: '**/*.jsx',
    }),
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
