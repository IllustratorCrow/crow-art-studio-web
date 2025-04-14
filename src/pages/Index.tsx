
import { Link } from "react-router-dom";
import { ArrowRight, Brush, PaintBucket, Palette } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      title: "Diseño Editorial",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
      description: "Diseño de libros y revistas"
    },
    {
      title: "Ilustración Digital",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
      description: "Arte conceptual y personajes"
    },
    {
      title: "Branding",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
      description: "Identidad visual corporativa"
    }
  ];

  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Ilustración",
      description: "Creación de ilustraciones únicas y personalizadas"
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Diseño Gráfico",
      description: "Diseño de marca, editorial y publicitario"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Arte Digital",
      description: "Creación de arte digital y manipulación de imágenes"
    }
  ];

  return (
    <div className="pt-16">
      {/* Banner */}
      <section className="bg-crow-dark text-crow-text min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Damos vida a tus ideas con <span className="text-crow-light">diseño e ilustración</span>
            </h1>
            <p className="text-xl mb-8 text-crow-medium">
              Creamos diseños únicos e ilustraciones cautivadoras que cuentan tu historia
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors"
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
          <h2 className="text-3xl font-bold text-crow-text mb-12">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-crow-dark/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-crow-light mb-2">{project.title}</h3>
                  <p className="text-crow-text">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-crow-text mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-crow-dark/30 backdrop-blur-sm rounded-lg text-center hover:bg-crow-dark/50 transition-colors"
              >
                <div className="text-crow-light mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-crow-light mb-2">{service.title}</h3>
                <p className="text-crow-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
