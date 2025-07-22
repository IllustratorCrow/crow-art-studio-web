import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const ResultadosBusqueda = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [resultados, setResultados] = useState<string[]>([]);

  useEffect(() => {
    if (query) {
      const resultadosFalsos = [
        "Resultado 1 relacionado con " + query,
        "Resultado 2 para " + query,
        "Otra entrada sobre " + query,
      ];
      setResultados(resultadosFalsos);
    }
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Resultados de búsqueda: {query} | IllustratorCrow</title>
        <meta
          name="description"
          content={`Resultados encontrados para la búsqueda "${query}". Diseño gráfico, cartelería, ilustración y más.`}
        />
        <meta
          name="keywords"
          content={`búsqueda, resultados, ${query}, diseño gráfico, publicidad, cantabria, ilustración`}
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="author" content="IllustratorCrow" />
      </Helmet>

      <div className="container mx-auto mt-20 px-4 text-crow-text">
        <h1 className="text-2xl font-bold mb-4">
          Resultados para: <span className="text-crow-light">"{query}"</span>
        </h1>
        {resultados.length > 0 ? (
          <ul className="space-y-3">
            {resultados.map((item, index) => (
              <li
                key={index}
                className="bg-crow-dark p-4 rounded shadow border border-crow-medium/30"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-crow-medium">No se encontraron resultados.</p>
        )}
      </div>
    </>
  );
};

export default ResultadosBusqueda;
