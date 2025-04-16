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
          <NavigationMenuList className="flex space-x-4">
            {/* Inicio */}
            <NavigationMenuItem>
              <Link to="/" className="text-white">
                Inicio
              </Link>
            </NavigationMenuItem>

            {/* Proyectos */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-2 p-4 bg-black/75 rounded-lg shadow-lg min-w-[200px]">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/proyectos"
                      className="block text-white font-bold"
                    >
                      Ver todos los proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/mares-creativos"
                      className="block text-white"
                    >
                      Mares Creativos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/proyectos/lavida-del-besaya"
                      className="block text-white"
                    >
                      La vida del Besaya
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Servicios */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute mt-2 p-4 bg-black/75 rounded-lg shadow-lg min-w-[200px]">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/servicios"
                      className="block text-white font-bold"
                    >
                      Ver todos los servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-grafico"
                      className="block text-white"
                    >
                      Diseño Gráfico
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/ilustracion"
                      className="block text-white"
                    >
                      Ilustración
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/diseno-productos"
                      className="block text-white"
                    >
                      Diseño de Productos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/servicios-editoriales"
                      className="block text-white"
                    >
                      Servicios Editoriales
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <Link to="/contacto" className="text-white">
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