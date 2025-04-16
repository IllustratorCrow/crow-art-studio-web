import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Permite conexiones desde cualquier dirección IP
    port: 8080, // Puerto para el servidor de desarrollo
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Activa componentTagger solo en desarrollo
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias para importaciones más limpias
    },
  },
  base: './', // Ruta base para GitHub Pages (necesario si usas un subdirectorio)
  build: {
    outDir: 'docs', // Carpeta de salida actualizada a `docs`
    emptyOutDir: true, // Limpia la carpeta de salida antes de construir
  },
}));
