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
    <nav className="fixed top-0 left-0 w-full h-16 bg-black/25 backdrop-blur-sm z-50">
      {/* Contenedor interno */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-title flex items-center gap-2 text-white">
          <img src={logoclaro} alt="Illustrator Crow Logo" className="w-6 h-6" />
          Illustrator <span className="text-crow-light">Crow</span>
        </Link>

        {/* Menú de navegación */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {/* Inicio */}
            <NavigationMenuItem>
              <Link to="/" className="text-base font-bold text-white">
                Inicio
              </Link>
            </NavigationMenuItem>

            {/* Proyectos */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base text-white">
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-3 p-4 bg-black/25 rounded-lg shadow-none min-w-[200px] border-none">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/proyectos"
                      className="block text-base font-bold text-white"
                    >
                      Mis proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/mares-creativos"
                      className="block text-base text-white"
                    >
                      Mares Creativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/vida-besaya"
                      className="block text-base text-white"
                    >
                      La vida del Besaya
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Servicios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base text-white">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-3 p-4 bg-black/25 rounded-lg shadow-none min-w-[200px] border-none">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/servicios"
                      className="block text-base font-bold text-white"
                    >
                      Mis servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-publicitario"
                      className="block text-base text-white"
                    >
                      Diseño Publicitario
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/ilustracion"
                      className="block text-base text-white"
                    >
                      Ilustración
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/identidad-visual"
                      className="block text-base text-white"
                    >
                      Identidad Visual
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-editorial"
                      className="block text-base text-white"
                    >
                      Diseño Editorial
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <Link to="/contacto" className="text-base font-bold text-white">
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