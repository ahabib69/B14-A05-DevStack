import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// yeah this is the usual setup, nothing fancy
export default defineConfig({
  plugins: [react()],
  // if you ever need to mess with the port or open the browser automatically:
  // server: {
  //   port: 5173,
  //   open: true,
  // },
})