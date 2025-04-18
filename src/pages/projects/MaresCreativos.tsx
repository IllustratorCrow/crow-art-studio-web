import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MaresCreativos = () => {
  const projectImages = [
    {
      src: "https://i.imgur.com/Y5QhRa5.jpeg",
      alt: "Mares Creativos - Bolsa"
    },
    {
      src: "https://i.imgur.com/3l6KQN2.jpeg",
      alt: "Mares Creativos - Caja"
    },
    {
      src: "https://i.imgur.com/5LIdjKD.jpeg",
      alt: "Mares Creativos - Taza"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-crow-dark text-white"> {/* Fondo morado */}
      {/* Barra de navegación */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Aquí va tu Navbar */}
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8 mt-16"> {/* Margen superior para evitar superposición */}
        {/* Título y descripción */}
        <section className="py-0">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-crow-light mb-4 hover:text-crow-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
          <h1 className="text-4xl font-title mb-8">Mares Creativos</h1>
          <div className="relative">
            <img 
              src="https://i.imgur.com/pgCqphb.jpeg" 
              alt="Mares Creativos - Portada"
              className="w-full h-[60vh] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
              <div className="w-full md:w-1/2 p-6">
                <p className="text-lg text-crow-text font-body leading-relaxed">
                  Mares Creativos es una propuesta académica desarrollada como parte de mi proyecto de fin de grado en la escuela de diseño. Consiste en una línea de merchandising conceptual diseñada para el Museo Marítimo del Cantábrico, con el objetivo de conectar a los visitantes con la riqueza y diversidad de la vida marina a través del arte y el diseño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles del proyecto */}
        <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <p className="text-lg text-crow-text font-body leading-relaxed">
                El proyecto se basa en siete ilustraciones originales inspiradas en especies del mar Cantábrico y en otras formas de vida marina más universales, incluyendo la característica sardina de dos cabezas que se encuentra entre los objetos de la exposición. Cada ilustración ha sido cuidadosamente creada para reflejar no solo la belleza estética de la fauna y flora marina, sino también para transmitir un mensaje de conservación y respeto hacia los ecosistemas marinos en general.
              </p>

              <div className="w-full max-w-3xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {projectImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full aspect-video object-cover rounded-lg shadow-xl"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <p className="text-lg text-crow-text font-body leading-relaxed">
                Las ilustraciones de Mares Creativos combinan un estilo de líneas limpias y detalles expresivos con una paleta de colores vibrante que evoca la diversidad del océano, utilizando tonos como azules profundos y turquesas brillantes para capturar su esencia. Diseñadas para ser versátiles, estas piezas mantienen su impacto visual y funcionalidad al adaptarse a diferentes formatos, desde tazas y bolsas hasta empaques, demostrando cómo el arte puede integrarse en objetos cotidianos sin perder su identidad ni calidad artística.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MaresCreativos;