import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import logoclaro from "../assets/logoclaro.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";

const navItemBase =
  "text-base font-bold px-3 py-2 rounded transition-colors duration-200";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navbarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLFormElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?query=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  // Cierra dropdowns y búsqueda al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        navbarRef.current &&
        !navbarRef.current.contains(target) &&
        searchRef.current &&
        !searchRef.current.contains(target)
      ) {
        setActiveDropdown(null);
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra todo al cambiar de ruta
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setShowSearch(false);
  }, [pathname]);

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full h-16 bg-crow-dark/95 shadow-lg z-50 border-b border-crow-medium/30"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 font-title text-2xl tracking-tight text-crow-text hover:opacity-90 transition-opacity"
          >
            <img
              src={logoclaro}
              alt="Illustrator Crow Logo"
              className="w-6 h-6 drop-shadow-md"
            />
            Illustrator <span className="text-crow-light">Crow</span>
          </Link>

          {/* Menú + búsqueda + hamburguesa */}
          <div className="flex items-center gap-4">
            {/* Menú navegación */}
            <NavigationMenu className="hidden sm:block relative">
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`${navItemBase} ${
                      pathname === "/"
                        ? "bg-crow-light/10 text-crow-light"
                        : "text-crow-text hover:bg-crow-light/10"
                    }`}
                  >
                    Inicio
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <button
                    onClick={() => toggleDropdown("proyectos")}
                    className="px-3 py-2 rounded text-base font-bold text-crow-text hover:text-crow-light/90 hover:bg-crow-light/10 transition"
                  >
                    Proyectos
                  </button>
                  {activeDropdown === "proyectos" && (
                    <div className="absolute right-0 mt-3 p-3 bg-crow-dark/95 rounded-lg shadow-lg min-w-[210px] border border-crow-medium/30 z-40">
                      <ul className="space-y-0.5">
                        <li>
                          <Link
                            to="/proyectos"
                            className="block font-bold text-crow-light py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Mis proyectos
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/proyectos/mares-creativos"
                            className="block text-crow-text py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Mares Creativos
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/proyectos/vida-besaya"
                            className="block text-crow-text py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            La vida del Besaya
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <button
                    onClick={() => toggleDropdown("servicios")}
                    className="px-3 py-2 rounded text-base font-bold text-crow-text hover:text-crow-light/90 hover:bg-crow-light/10 transition"
                  >
                    Servicios
                  </button>
                  {activeDropdown === "servicios" && (
                    <div className="absolute right-0 mt-3 p-3 bg-crow-dark/95 rounded-lg shadow-lg min-w-[210px] border border-crow-medium/30 z-40">
                      <ul className="space-y-0.5">
                        <li>
                          <Link
                            to="/servicios"
                            className="block font-bold text-crow-light py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Mis servicios
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/servicios/diseno-publicitario"
                            className="block text-crow-text py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Diseño Publicitario
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/servicios/ilustracion"
                            className="block text-crow-text py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Ilustración
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/servicios/identidad-visual"
                            className="block text-crow-text py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Identidad Visual
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/servicios/diseno-editorial"
                            className="block text-crow-text py-1 px-2 rounded hover:bg-crow-light/10 transition"
                          >
                            Diseño Editorial
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </NavigationMenuItem>

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

            {/* Botones de búsqueda y menú hamburguesa */}
            <div className="flex items-center gap-3">
              <button
                className="text-crow-text hover:text-crow-light transition"
                onClick={() => setShowSearch((prev) => !prev)}
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                className="sm:hidden text-crow-text text-3xl focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="sm:hidden bg-crow-dark/95 border-t border-crow-medium/30 px-4 py-2 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-crow-text py-2 hover:bg-crow-light/10 rounded"
            >
              Inicio
            </Link>
            <Link
              to="/proyectos"
              onClick={() => setIsMenuOpen(false)}
              className="block text-crow-text py-2 hover:bg-crow-light/10 rounded"
            >
              Proyectos
            </Link>
            <Link
              to="/servicios"
              onClick={() => setIsMenuOpen(false)}
              className="block text-crow-text py-2 hover:bg-crow-light/10 rounded"
            >
              Servicios
            </Link>
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-crow-text py-2 hover:bg-crow-light/10 rounded"
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>

      {/* Barra de búsqueda */}
      {showSearch && (
        <form
          ref={searchRef}
          onSubmit={handleSearch}
          className="fixed top-16 left-0 w-full bg-crow-dark border-b border-crow-medium/30 shadow-lg z-40"
        >
          <div className="container mx-auto px-4 py-2 flex justify-center">
            <div className="flex items-center gap-2 bg-crow-dark border border-crow-light/30 rounded-full px-3 py-1 shadow-md w-full max-w-md">
              <Search className="w-4 h-4 text-crow-medium" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm text-crow-text placeholder:text-crow-medium focus:outline-none w-full"
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Navbar;
