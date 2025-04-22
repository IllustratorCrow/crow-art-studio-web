import { Link } from "react-router-dom";
import logoclaro from "../assets/logoclaro.png"; // Conservamos el logo claro
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-crow-dark/80 backdrop-blur-sm z-50 shadow-md">
      {/* Contenedor interno */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-title flex items-center gap-2 text-white">
          <img src={logoclaro} alt="Illustrator Crow Logo" className="w-8 h-8" />
          Illustrator <span className="text-crow-light">Crow</span>
        </Link>

        {/* Menú de navegación */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {/* Inicio */}
            <NavigationMenuItem>
              <Link to="/" className="text-base font-bold text-white hover:text-crow-light transition-colors">
                Inicio
              </Link>
            </NavigationMenuItem>

            {/* Proyectos */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base text-white hover:text-crow-light transition-colors">
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-3 p-4 bg-crow-dark/90 rounded-lg shadow-lg min-w-[220px] border border-crow-medium/30">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/proyectos"
                      className="block text-base font-bold text-crow-light hover:text-white transition-colors"
                    >
                      Mis proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/mares-creativos"
                      className="block text-base text-white hover:text-crow-light transition-colors"
                    >
                      Mares Creativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/vida-besaya"
                      className="block text-base text-white hover:text-crow-light transition-colors"
                    >
                      La vida del Besaya
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Servicios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base text-white hover:text-crow-light transition-colors">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-3 p-4 bg-crow-dark/90 rounded-lg shadow-lg min-w-[220px] border border-crow-medium/30">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/servicios"
                      className="block text-base font-bold text-crow-light hover:text-white transition-colors"
                    >
                      Mis servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-publicitario"
                      className="block text-base text-white hover:text-crow-light transition-colors"
                    >
                      Diseño Publicitario
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/ilustracion"
                      className="block text-base text-white hover:text-crow-light transition-colors"
                    >
                      Ilustración
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/identidad-visual"
                      className="block text-base text-white hover:text-crow-light transition-colors"
                    >
                      Identidad Visual
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-editorial"
                      className="block text-base text-white hover:text-crow-light transition-colors"
                    >
                      Diseño Editorial
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <Link to="/contacto" className="text-base font-bold text-white hover:text-crow-light transition-colors">
                Contacto
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;