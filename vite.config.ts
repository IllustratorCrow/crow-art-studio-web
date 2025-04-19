import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/IllustratorCrow/', // ✅ RUTA BASE para GitHub Pages
  build: {
    outDir: 'docs',          // ✅ Publica directo en /docs
    emptyOutDir: true,
  },
}));
