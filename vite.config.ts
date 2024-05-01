import { defineConfig } from 'vite'
import { resolve } from "path";
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Severance UI",
      fileName: "severance-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [Vue()],
})
