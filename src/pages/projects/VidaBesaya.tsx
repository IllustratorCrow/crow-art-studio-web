import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VidaBesaya = () => {
  const projectImages = [
    {
      src: "https://i.imgur.com/SLAscDB.jpeg",
      alt: "La Vida del Besaya - Panel 1",
    },
    {
      src: "https://i.imgur.com/XYZ1234.jpeg", // Reemplaza con una imagen real
      alt: "La Vida del Besaya - Panel 2",
    },
    {
      src: "https://i.imgur.com/ABCD567.jpeg", // Reemplaza con una imagen real
      alt: "La Vida del Besaya - Panel 3",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-crow-dark text-white">
      {/* Barra de navegación */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Aquí va tu Navbar */}
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        {/* Título y descripción */}
        <section className="py-0">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-crow-light mb-4 hover:text-crow-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
          <h1 className="text-4xl font-title mb-8">La Vida del Besaya</h1>
          <div className="relative">
            <img
  src="https://i.imgur.com/SLAscDB.jpeg"
  alt="La Vida del Besaya - Portada"
  className="w-full h-[60vh] object-cover object-[30%_15%] rounded-lg shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
              <div className="w-full md:w-1/2 p-6">
                <p className="text-lg text-crow-text font-body leading-relaxed">
                  La Vida del Besaya es un proyecto dedicado a explorar la riqueza cultural y natural del río Besaya. A través de paneles informativos e infografías, se busca conectar a los visitantes con la historia, flora y fauna de esta región única.
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
                Este proyecto incluye una serie de ilustraciones y diseños que destacan la biodiversidad del entorno del Besaya. Desde las especies de aves migratorias hasta los ecosistemas fluviales, cada panel está diseñado para educar y concienciar sobre la importancia de preservar este patrimonio natural.
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
                Además de los paneles físicos, el proyecto también incluye materiales digitales interactivos que permiten a los usuarios explorar el contenido de manera más profunda. Estos recursos están diseñados para ser accesibles tanto en dispositivos móviles como en pantallas grandes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VidaBesaya;