import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// ts->js->es5
// 自动引入ElementPlus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      views: path.resolve(__dirname, 'src/views'),
      interface: path.resolve(__dirname, 'src/interface')
    }
  }
})
