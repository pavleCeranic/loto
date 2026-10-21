import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  // imagetools smanjuje i pretvara slike iz foldera `projekti/` u WebP pri buildu
  plugins: [react(), imagetools()],
})
