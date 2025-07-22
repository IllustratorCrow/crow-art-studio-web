import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Capitulo1 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-crow-dark text-white">
      <Helmet>
        <title>Capítulo 1: El Arte Prehistórico | Historia del Arte | IllustratorCrow</title>
        <meta
          name="description"
          content="Descubre el origen de la expresión artística humana a través del arte prehistórico: pintura rupestre, escultura, arquitectura megalítica y más."
        />
        <meta
          name="keywords"
          content="arte prehistórico, historia del arte, arte rupestre, megalitos, venus paleolítica, altamira, ilustración histórica, cantabria"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="IllustratorCrow" />
      </Helmet>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Aquí va tu Navbar */}
      </nav>

      <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 mt-20">
        {/* Título y banner */}
        <section className="py-0">
          <Link
            to="/blogs/historia-del-arte"
            className="inline-flex items-center gap-2 text-crow-light mb-6 sm:mb-8 hover:text-crow-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Historia del Arte
          </Link>

          <h1 className="text-3xl sm:text-4xl font-title mb-8">Capítulo 1: El Arte Prehistórico</h1>

          <div className="relative rounded-lg overflow-hidden shadow-xl mb-12">
            <img
              src="https://reydekish.com/wp-content/uploads/2015/09/grotta-chauvet-orso1.jpg"
              alt="Arte Prehistórico"
              className="w-full h-[50vh] md:h-[60vh] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
              <div className="w-full md:w-1/2 p-4 sm:p-6">
                <p className="text-base sm:text-lg text-crow-text font-body leading-relaxed">
                  Texto de la cabecera
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido detallado con degradado */}
        <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary rounded-xl">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Subtitulo</h2>
              <p className="text-base sm:text-lg text-crow-text leading-relaxed">
                Texto normal
              </p>
            </div>

            <div className="space-y-12">
              <h2 className="text-2xl font-semibold">Subtitulo</h2>

              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <img
                  src="https://i.imgur.com/Q6YOm4v.jpeg"
                  alt="Altamira"
                  className="w-full md:w-1/2 rounded-lg shadow-xl object-cover"
                />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Subtitulo</h3>
                  <p className="text-base sm:text-lg text-crow-text leading-relaxed mb-4">
                    Texto con imagen a la izquierda
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
                <img
                  src="https://i.imgur.com/AV7Nnkn.jpeg"
                  alt="Venus de Willendorf"
                  className="w-full md:w-1/2 rounded-lg shadow-xl object-cover"
                />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Subtitulo</h3>
                  <p className="text-base sm:text-lg text-crow-text leading-relaxed">
                    Texto con imagen a la derecha
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Escultura prehistórica</h3>
                <p className="text-base sm:text-lg text-crow-text leading-relaxed mb-4">
                  Relieves en hueso, piedra o arcilla, con figuras humanas y animales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Arquitectura megalítica</h3>
                <p className="text-base sm:text-lg text-crow-text leading-relaxed mb-4">
                  Construcciones con grandes bloques de piedra para fines rituales o funerarios.
                </p>
                <img
                  src="https://i.imgur.com/0eJ9mCT.jpeg"
                  alt="Stonehenge"
                  className="rounded-lg shadow-xl mb-4 w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Técnicas y materiales</h2>
              <p className="text-base sm:text-lg text-crow-text leading-relaxed">
                Se usaban pigmentos naturales, fibras vegetales como pinceles, y técnicas como el soplado de pigmentos o la incisión directa sobre piedra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Interpretaciones</h2>
              <ul className="list-disc pl-6 text-base sm:text-lg text-crow-text leading-relaxed space-y-2">
                <li>Magia simpática: cazar lo representado.</li>
                <li>Ritos de paso o chamanismo.</li>
                <li>Simbolismo de género.</li>
                <li>Lenguaje simbólico complejo.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Importancia y legado</h2>
              <p className="text-base sm:text-lg text-crow-text leading-relaxed">
                El arte prehistórico es el primer testimonio de la necesidad humana de expresar ideas y emociones. Su legado continúa inspirando y conectando con nuestros orígenes creativos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Capitulo1;
