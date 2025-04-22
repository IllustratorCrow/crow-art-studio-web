import { Link } from "react-router-dom";
import { ArrowRight, Brush, PaintBucket, Palette, Package, BookOpen } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      title: "Mares Creativos",
      image: "https://i.imgur.com/pgCqphb.jpeg",
      description: "Línea de merchandising diseñada para el Museo Marítimo del Cantábrico.",
      path: "/proyectos/mares-creativos",
    },
    {
      title: "La Vida del Besaya",
      image: "https://i.imgur.com/SLAscDB.jpeg",
      description: "Paneles e Infografías sobre la historia, fauna y flora de la Senda Fluvial del Besaya.",
      path: "/proyectos/vida-besaya",
    },
  ];

  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Diseño Publicitario",
      description: "Creación de carteles, flyers, banners y otros materiales promocionales para potenciar tu mensaje y captar la atención de tu audiencia.",
      path: "/servicios/diseno-publicitario",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Ilustración",
      description: "Creación de ilustraciones personalizadas para medios digitales y tradicionales, dando vida a tus ideas con un toque artístico único.",
      path: "/servicios/ilustracion",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Identidad Visual",
      description: "Diseño de logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable.",
      path: "/servicios/identidad-visual",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Diseño Editorial",
      description: "Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad.",
      path: "/servicios/diseno-editorial",
    },
  ];

  return (
    <div className="relative">
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
              <span className="text-crow-light">Diseño Gráfico</span> con mirada artística
            </h1>
            <p className="text-xl mb-8 text-crow-medium font-body">
              En Illustrator Crow, creo diseños que equilibran funcionalidad y arte. Desde ilustraciones únicas hasta estrategias visuales efectivas, cada proyecto está diseñado para destacar y generar resultados.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors font-body"
            >
              Trabajemos juntos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados - Galería */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                to={project.path}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                  <h3 className="text-xl font-title text-crow-light">{project.title}</h3>
                  <p className="text-sm text-crow-text font-body">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">¿Qué ofrezco?</h2>
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