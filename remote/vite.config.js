import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: "remote_app",
    filename: "remoteEntry.js",
    exposes: {
      "./components/Button": "./src/components/Button",
      "./store": "./src/store"
    },
    shared: ["react", "react-dom", "jotai"]
  })],
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  }
})
