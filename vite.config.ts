import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'



// https://vite.dev/config/
import path from "path";
// import tailwindcss from '@tailwindcss';

export default defineConfig({
  plugins: [ react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: "window", // Polyfill `global` as `window`
  },
});

