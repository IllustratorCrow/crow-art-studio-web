
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DesignService from "./pages/services/DesignService";
import IllustrationService from "./pages/services/IllustrationService";
import ProductService from "./pages/services/ProductService";
import EditorialService from "./pages/services/EditorialService";
import MaresCreativos from "./pages/projects/MaresCreativos";
import VidaBesaya from "./pages/projects/VidaBesaya";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/mares-creativos" element={<MaresCreativos />} />
          <Route path="/proyectos/vida-besaya" element={<VidaBesaya />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/diseno-grafico" element={<DesignService />} />
          <Route path="/servicios/ilustracion" element={<IllustrationService />} />
          <Route path="/servicios/productos" element={<ProductService />} />
          <Route path="/servicios/editorial" element={<EditorialService />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
