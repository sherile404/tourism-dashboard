import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Allows access from the network
    port: 5173,
  },
  preview: {
    host: true, // Allows access from the network during preview
    port: 5173,
  },
})


