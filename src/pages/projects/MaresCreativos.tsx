import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MaresCreativos = () => {
  const projectImages = [
    {
      image: "https://i.imgur.com/Y5QhRa5.jpeg",
      title: "",
      description: "Totebag | Illustración de Ballena"
    },
    {
      image: "https://i.imgur.com/3l6KQN2.jpeg",
      title: "",
      description: "Packaging | Illustración de Sardina de dos cabezas"
    },
    {
      image: "https://i.imgur.com/5LIdjKD.jpeg",
      title: "",
      description: "Taza | Illustración de Tiburón ballena"
    },
    {
      image: "https://i.imgur.com/e44WMIP.jpeg",
      title: "",
      description: "Gorro de pesca | Illustración de pulpo y de cangrejo"
    }
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

          <h1 className="text-3xl sm:text-4xl font-title mb-8">Mares Creativos</h1>

          <div className="relative rounded-lg overflow-hidden shadow-xl mb-12">
            <img
              src="https://i.imgur.com/pgCqphb.jpeg"
              alt="Mares Creativos - Portada"
              className="w-full h-[50vh] md:h-[60vh] object-cover object-[30%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
              <div className="w-full md:w-1/2 p-4 sm:p-6">
                <p className="text-base sm:text-lg text-crow-text font-body leading-relaxed">
                  Mares Creativos es una propuesta académica desarrollada como parte de mi proyecto de fin de grado en la escuela de diseño.<br />Consiste en una línea de merchandising diseñada para el Museo Marítimo del Cantábrico, con el objetivo de actualizar y ampliar la oferta de productos en la tienda de recuerdos del museo.
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
                El proyecto se basa en siete ilustraciones originales inspiradas en especies del mar Cantábrico y en otras formas de vida marina más universales, incluyendo la característica sardina de dos cabezas que se encuentra entre los objetos de la exposición. Cada ilustración ha sido cuidadosamente creada para reflejar no solo la belleza estética de la fauna y flora marina, sino también para transmitir un mensaje de conservación y respeto hacia los ecosistemas marinos en general.
              </p>

              {/* Slider reemplazando el carrusel */}
              <div className="mx-auto max-w-3xl relative">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  autoplay={{ delay: 5000 }}
                  loop
                  className="rounded-xl overflow-hidden h-[28rem]"
                >
                  {projectImages.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                          <h3 className="text-xl font-title text-crow-light">{item.title}</h3>
                          <p className="text-sm text-crow-text">{item.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Flechas personalizadas */}
                <style>
                  {`
                    .swiper-button-next,
                    .swiper-button-prev {
                      color: white;
                      top: 50%;
                      transform: translateY(-50%);
                      width: 2rem;
                      height: 2rem;
                    }
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                      font-size: 1.5rem;
                      font-weight: bold;
                    }
                  `}
                </style>
              </div>

              <p className="text-base sm:text-lg text-crow-text font-body leading-relaxed">
                Las ilustraciones de Mares Creativos combinan un estilo de líneas limpias y detalles expresivos con una paleta de colores vibrante que evoca la diversidad del océano, utilizando tonos como azules profundos y turquesas brillantes para capturar su esencia. Diseñadas para ser versátiles, estas piezas mantienen su impacto visual y funcionalidad al adaptarse a diferentes formatos, desde tazas y bolsas hasta packaging, demostrando cómo el arte puede integrarse en objetos cotidianos sin perder su identidad ni calidad artística.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MaresCreativos;
