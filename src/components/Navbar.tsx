
import { Link, useLocation } from "react-router-dom";
import logoclaro from "../assets/logoclaro.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

const navItemBase =
  "text-base font-bold px-3 py-2 rounded transition-colors duration-200";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-crow-dark/95 shadow-lg z-50 border-b border-crow-medium/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
        {/* Logo y título */}
        <Link
          to="/"
          className="flex items-center gap-3 font-title text-2xl tracking-tight text-crow-text hover:opacity-90 transition-opacity"
        >
          <img src={logoclaro} alt="Illustrator Crow Logo" className="w-6 h-6 drop-shadow-md" />
          Illustrator <span className="text-crow-light">Crow</span>
        </Link>

        {/* Navegación */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            {/* Inicio */}
            <NavigationMenuItem>
              <Link
                to="/"
                className={`${navItemBase} ${
                  pathname === "/" ? "bg-crow-light/10 text-crow-light" : "text-crow-text hover:bg-crow-light/10"
                }`}
              >
                Inicio
              </Link>
            </NavigationMenuItem>

            {/* Proyectos */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-3 py-2 rounded text-base font-bold text-crow-text hover:text-crow-light/90 hover:bg-crow-light/10 transition">
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-3 p-3 bg-crow-dark/95 rounded-lg shadow-lg min-w-[210px] border border-crow-medium/30">
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/proyectos"
                      className="block font-bold text-crow-light py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Mis proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/mares-creativos"
                      className="block text-crow-text py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Mares Creativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/vida-besaya"
                      className="block text-crow-text py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      La vida del Besaya
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Servicios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-3 py-2 rounded text-base font-bold text-crow-text hover:text-crow-light/90 hover:bg-crow-light/10 transition">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-3 p-3 bg-crow-dark/95 rounded-lg shadow-lg min-w-[210px] border border-crow-medium/30">
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/servicios"
                      className="block font-bold text-crow-light py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Mis servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-publicitario"
                      className="block text-crow-text py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Diseño Publicitario
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/ilustracion"
                      className="block text-crow-text py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Ilustración
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/identidad-visual"
                      className="block text-crow-text py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Identidad Visual
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-editorial"
                      className="block text-crow-text py-2 px-2 rounded hover:bg-crow-light/10 transition"
                    >
                      Diseño Editorial
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <Link
                to="/contacto"
                className={`${navItemBase} ${
                  pathname === "/contacto"
                    ? "bg-crow-light/10 text-crow-light"
                    : "text-crow-text hover:bg-crow-light/10"
                }`}
              >
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
