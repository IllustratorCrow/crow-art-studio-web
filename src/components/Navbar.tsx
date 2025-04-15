import { Link, useLocation } from "react-router-dom";
import { Bird } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-crow-light" : "text-crow-text";
  };

  return (
    <nav className="fixed top-0 w-full bg-black/25 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/" className="text-2xl font-title flex items-center gap-2 text-crow-text">
            <Bird className="w-8 h-8 text-crow-light" />
            Ilustrator <span className="text-crow-light">Crow</span>
          </Link>
          <div className="flex flex-wrap items-center gap-6 md:gap-8 font-body">
            <Link 
              to="/" 
              className={`${isActive("/")} hover:text-crow-light transition-colors`}
            >
              Inicio
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="flex items-center">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${isActive("/proyectos")} hover:text-crow-light transition-colors bg-transparent hover:bg-transparent/10 p-0 h-auto`}>
                    Proyectos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/25 backdrop-blur-sm">
                    <ul className="w-48 p-2">
                      <li>
                        <Link to="/proyectos/mares-creativos" className="block px-4 py-2 hover:bg-crow-dark/10 rounded-md">
                          Mares Creativos
                        </Link>
                      </li>
                      <li>
                        <Link to="/proyectos/vida-besaya" className="block px-4 py-2 hover:bg-crow-dark/10 rounded-md">
                          La Vida del Besaya
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList className="flex items-center">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`${isActive("/servicios")} hover:text-crow-light transition-colors bg-transparent hover:bg-transparent/10 p-0 h-auto`}>
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-black/25 backdrop-blur-sm">
                    <ul className="w-48 p-2">
                      <li>
                        <Link to="/servicios/diseno-grafico" className="block px-4 py-2 hover:bg-crow-dark/10 rounded-md">
                          Diseño Gráfico
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicios/ilustracion" className="block px-4 py-2 hover:bg-crow-dark/10 rounded-md">
                          Ilustración
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicios/productos" className="block px-4 py-2 hover:bg-crow-dark/10 rounded-md">
                          Diseño de Productos
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicios/editorial" className="block px-4 py-2 hover:bg-crow-dark/10 rounded-md">
                          Servicios Editoriales
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
