import { Link } from "react-router-dom";
import { ArrowRight, Brush, PaintBucket, Palette, Package, BookOpen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const featuredProjects = [
    {
      title: "Mares Creativos",
      image: "https://i.imgur.com/pgCqphb.jpeg",
      description: "Diseño de productos",
      path: "/proyectos/mares-creativos"
    },
    {
      title: "La Vida del Besaya",
      image: "https://i.imgur.com/SLAscDB.jpeg",
      description: "Paneles e Infografías",
      path: "/proyectos/vida-besaya"
    }
  ];

  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Diseño Gráfico",
      description: "Identidad corporativa, cartelería, redes sociales.",
      path: "/servicios/diseno-grafico"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Ilustración",
      description: "Retratos, portadas de libros, arte conceptual.",
      path: "/servicios/ilustracion"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Diseño de Productos",
      description: "Tazas, camisetas, packaging.",
      path: "/servicios/productos"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Servicios Editoriales",
      description: "Portadas, maquetación, catálogos.",
      path: "/servicios/editorial"
    }
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <section 
        className="bg-crow-dark text-crow-text min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url("https://i.imgur.com/Zz1JpiE.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-crow-dark/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl font-title mb-6">
              Diseñamos para <span className="text-crow-light">destacar y conectar</span>
            </h1>
            <p className="text-xl mb-8 text-crow-medium font-body">
              Tu éxito comienza con una identidad visual sólida. Diseño gráfico funcional, ilustraciones impactantes y estrategias que generan resultados.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors font-body"
            >
              Iniciemos un proyecto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-title text-crow-text mb-12">Proyectos Destacados</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {featuredProjects.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="bg-crow-dark/50 backdrop-blur-sm rounded-lg overflow-hidden p-6">
                    <Link to={project.path}>
                      <div className="relative w-full aspect-video mb-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-title text-crow-light mb-2">{project.title}</h3>
                      <p className="text-crow-text font-body">{project.description}</p>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-title text-crow-text mb-12">¿Qué ofrezco?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-crow-dark/30 backdrop-blur-sm rounded-lg text-center hover:bg-crow-dark/50 transition-colors"
              >
                <div className="text-crow-light mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-title text-crow-light mb-2">{service.title}</h3>
                <p className="text-crow-text font-body mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 bg-crow-light/10 hover:bg-crow-light/20 px-4 py-2 rounded-lg transition-colors font-body text-crow-light"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
