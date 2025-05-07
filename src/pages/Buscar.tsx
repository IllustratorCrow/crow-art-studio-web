import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { contenidoBuscable } from "@/data/contenidoBuscable";
import { Search } from "lucide-react";

const Buscar = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState<{ title: string; url: string }[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("query")?.toLowerCase() || "";
    setQuery(q);

    const filtrados = contenidoBuscable.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.keywords?.some((kw) => kw.toLowerCase().includes(q))
    );

    setResultados(filtrados);
  }, [location.search]);

  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("https://i.imgur.com/Zz1JpiE.jpeg")' }}
    >
      {/* Capa oscura con blur */}
      <div className="absolute inset-0 bg-crow-dark/80 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-title text-crow-light mb-12 text-center drop-shadow-lg">
          Resultados de búsqueda
        </h1>

        {resultados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resultados.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="group p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-crow-light bg-crow-primary/70 p-2 rounded-full">
                    <Search className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-title text-crow-light group-hover:underline">
                    {item.title}
                  </h2>
                </div>
                <p className="text-crow-light/80 text-sm font-body">
                  Ver más detalles
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center mt-16 text-crow-light">
            <p className="text-xl">No se encontraron resultados para "{query}"</p>
            <p className="text-sm mt-2 text-crow-light/70">Prueba con otras palabras clave</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Buscar;
