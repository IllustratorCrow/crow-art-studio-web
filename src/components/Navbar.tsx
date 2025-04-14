
import { Link, useLocation } from "react-router-dom";
import { Bird } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-crow-light" : "text-crow-text";
  };

  return (
    <nav className="fixed top-0 w-full bg-crow-dark/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/" className="text-2xl font-title flex items-center gap-2 text-crow-text">
            <Bird className="w-8 h-8 text-crow-light" />
            Ilustrator <span className="text-crow-light">Crow</span>
          </Link>
          <div className="flex flex-wrap gap-6 md:gap-8 font-body">
            <Link 
              to="/" 
              className={`${isActive("/")} hover:text-crow-light transition-colors`}
            >
              Inicio
            </Link>
            <Link 
              to="/proyectos" 
              className={`${isActive("/proyectos")} hover:text-crow-light transition-colors`}
            >
              Proyectos
            </Link>
            <Link 
              to="/servicios" 
              className={`${isActive("/servicios")} hover:text-crow-light transition-colors`}
            >
              Servicios
            </Link>
            <Link 
              to="/contacto" 
              className={`${isActive("/contacto")} hover:text-crow-light transition-colors`}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
