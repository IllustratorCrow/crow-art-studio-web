
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Try to import the componentTagger, but handle the case where it might not be available
let componentTagger;
try {
  componentTagger = require("lovable-tagger").componentTagger;
} catch (e) {
  // If the package is not available, provide a fallback
  componentTagger = () => null;
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './', // Aseguramos rutas relativas
  build: {
    outDir: 'docs',
    emptyOutDir: false, // Cambiado a false para no borrar archivos importantes como CNAME
  },
}));
