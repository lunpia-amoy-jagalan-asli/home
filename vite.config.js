import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/lunpia-amoy-jagalan-asli/',
  base: '/home/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //     pure_funcs: ['console.log', 'console.info', 'console.debug'],
    //   },
    //   mangle: {
    //     toplevel: true,
    //   },
    // },
    minify: true, 
    cssMinify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // compact: true,
      },
    },
    // target: 'es2015',
    // target: 'modules',
  },
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true
  }
})