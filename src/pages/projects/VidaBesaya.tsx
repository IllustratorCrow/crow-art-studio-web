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
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Aquí va tu Navbar */}
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 mt-20">
        {/* Título y descripción */}
        <section className="py-0">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 text-crow-light mb-6 sm:mb-8 hover:text-crow-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>

          <h1 className="text-3xl sm:text-4xl font-title mb-8">La vida del Besaya</h1>

          <div className="relative rounded-lg overflow-hidden shadow-xl mb-12">
            <img 
              src="https://i.imgur.com/SLAscDB.jpeg" 
              alt="La vida del Besaya - Portada"
              className="w-full h-[50vh] md:h-[60vh] object-cover object-[30%_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
              <div className="w-full md:w-1/2 p-4 sm:p-6">
                <p className="text-base sm:text-lg text-crow-text font-body leading-relaxed">
                  La Vida del Besaya es un proyecto en desarrollo dedicado a explorar la riqueza cultural y natural de la senda fluvial del río Besaya. A través de paneles informativos e infografías visualmente atractivas, este proyecto busca conectar a los visitantes con la historia y el entorno que dan contexto a esta ruta. Además, ofrece un acercamiento accesible y fácil de entender sobre la flora, fauna y paisajes locales, destacando la importancia de su conservación y el valor que representan para la región.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles del proyecto */}
        <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary rounded-xl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <p className="text-base sm:text-lg text-crow-text font-body leading-relaxed">
                Proyecto aún en desarrollo.
              </p>

              {/* Carrusel opcional (si decides activarlo más adelante) */}
              {/* 
              <div className="w-full max-w-3xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {projectImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full aspect-[4/3] sm:aspect-video object-cover rounded-lg shadow-xl"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VidaBesaya;
