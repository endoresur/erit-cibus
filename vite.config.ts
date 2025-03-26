import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "app": path.resolve(__dirname, "src/app"),
      "styles": path.resolve(__dirname, "src/styles"),
      "assets": path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "styles/index.scss" as *;`,
      },
    },
  }
})
