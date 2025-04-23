
// src/App.tsx
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import MaresCreativos from "./pages/projects/MaresCreativos";
import VidaBesaya from "./pages/projects/VidaBesaya";

import Services from "./pages/Services";
import DisenoPublicitario from "./pages/services/DisenoPublicitario";
import Ilustracion from "./pages/services/Ilustracion";
import IdentidadVisual from "./pages/services/IdentidadVisual";
import DisenoEditorial from "./pages/services/DisenoEditorial";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css"; // Importamos App.css para asegurarnos de que se apliquen los estilos

// Create a queryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter> {/* Cambiado a HashRouter para mejor compatibilidad con GitHub Pages */}
        <Navbar />
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/mares-creativos" element={<MaresCreativos />} />
          <Route path="/proyectos/vida-besaya" element={<VidaBesaya />} />
          <Route path="/servicios" element={<Services />} />

          {/* Rutas de servicios */}
          <Route path="/servicios/diseno-publicitario" element={<DisenoPublicitario />} />
          <Route path="/servicios/ilustracion" element={<Ilustracion />} />
          <Route path="/servicios/identidad-visual" element={<IdentidadVisual />} />
          <Route path="/servicios/diseno-editorial" element={<DisenoEditorial />} />

          {/* Otras rutas */}
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
