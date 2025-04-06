import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true,
      include: '**/*.jsx',
    }),
    tailwindcss(),
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
