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
          <img src={logoclaro} alt="Illustrator Crow Logo" className="w-8 h-8" />
          Illustrator <span className="text-crow-light">Crow</span>
        </Link>

        {/* Menú de navegación */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Inicio */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-gray-300 bg-transparent">
                Inicio
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            {/* Proyectos */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-gray-300 bg-transparent">
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/75 rounded-lg p-2 mt-2">
                <ul className="space-y-2">
                  <li>
                    <Link to="/proyectos/mares-creativos" className="text-white hover:text-gray-300 block">
                      Mares Creativos
                    </Link>
                  </li>
                  <li>
                    <Link to="/proyectos/lavida-del-besaya" className="text-white hover:text-gray-300 block">
                      La vida del Besaya
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Servicios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-gray-300 bg-transparent">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/75 rounded-lg p-2 mt-2">
                <ul className="space-y-2">
                  <li>
                    <Link to="/servicios/diseno-grafico" className="text-white hover:text-gray-300 block">
                      Diseño Gráfico
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/ilustracion" className="text-white hover:text-gray-300 block">
                      Ilustración
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/diseno-productos" className="text-white hover:text-gray-300 block">
                      Diseño de Productos
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/servicios-editoriales" className="text-white hover:text-gray-300 block">
                      Servicios Editoriales
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-gray-300 bg-transparent">
                Contacto
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/75 rounded-lg p-2 mt-2">
                <ul className="space-y-2">
                  <li>
                    <Link to="/contacto" className="text-white hover:text-gray-300 block">
                      Información de contacto
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;