import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/users":"http://localhost:8000",
      "/videos":"http://localhost:8000",

    }
  },
  plugins: [react()],
})
