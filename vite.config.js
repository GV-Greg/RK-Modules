import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ghPages } from "vite-plugin-gh-pages"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RK-Modules/',
  plugins: [vue(), vueJsx(), ghPages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})