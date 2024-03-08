import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 8088,
    host: '0.0.0.0',
    open: true,
    hmr: true, //热更新
  },
})
