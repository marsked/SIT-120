import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    base: '/SIT-120/',
    plugins: [vue()],
    // poduction deployment to GitHub repo
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      
      }
    },
   /* publicPath: process.env.NODE_ENV === 'production'
    ? '/SIT-120/'
    : '/'
  }, */
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}})