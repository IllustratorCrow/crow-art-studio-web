
import { Link } from "react-router-dom";

// Galería de servicios
const services = [
  {
    title: "Diseño Publicitario",
    description: "Carteles, flyers, banners y otros materiales promocionales para potenciar tu mensaje y captar la atención de tu audiencia.",
    image: "https://i.imgur.com/yd2i87o.jpeg",
    path: "/servicios/diseno-publicitario",
  },
  {
    title: "Ilustración",
    description: "Ilustraciones personalizadas para medios digitales y tradicionales, dando vida a tus ideas con un toque artístico único.",
    image: "https://i.imgur.com/jLYCY2S.jpeg",
    path: "/servicios/ilustracion",
  },
  {
    title: "Identidad Visual",
    description: "Logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable.",
    image: "https://i.imgur.com/rV8pbaq.jpeg",
    path: "/servicios/identidad-visual",
  },
  {
    title: "Diseño Editorial",
    description: "Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad.",
    image: "https://i.imgur.com/SLAscDB.jpeg",
    path: "/servicios/diseno-editorial",
  },
];

// Últimos trabajos destacados
const lastWorks = [
  {
    title: "Mares Creativos",
    description: "Línea de merchandising diseñada para el Museo Marítimo del Cantábrico.",
    image: "https://i.imgur.com/pgCqphb.jpeg",
    path: "/proyectos/mares-creativos",
  },
  {
    title: "La Vida del Besaya",
    description: "Paneles e Infografías sobre la historia, fauna y flora de la Senda Fluvial del Besaya.",
    image: "https://i.imgur.com/SLAscDB.jpeg",
    path: "/proyectos/vida-besaya",
  },
  {
    title: "Diseño Editorial",
    description: "Publicaciones y catálogos diseñados para diferentes clientes.",
    image: "https://i.imgur.com/yd2i87o.jpeg",
    path: "/servicios/diseno-editorial",
  },
  {
    title: "Ilustración Digital",
    description: "Encargos de ilustración para publicaciones, branding y proyectos personales.",
    image: "https://i.imgur.com/jLYCY2S.jpeg",
    path: "/servicios/ilustracion",
  },
];

const Services = () => (
  <div className="pt-16 bg-crow-dark text-white min-h-screen">
    {/* Banner portada */}
    <section className="relative mb-12">
      <img
        src="https://i.imgur.com/K7jq4fL.jpeg"
        alt="Portada Mis Servicios"
        className="w-full h-[60vh] object-cover object-[30%_50%] rounded-b-3xl shadow-xl"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center rounded-b-3xl">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl md:text-5xl font-title mb-6">Mis <span className="text-crow-light">servicios</span></h1>
          <p className="text-xl max-w-2xl text-white font-body">
            Descubre todas las áreas en las que puedo impulsar tu proyecto. Desde la conceptualización visual hasta la ejecución final, adapto cada solución a tus necesidades.
          </p>
        </div>
      </div>
    </section>
    {/* Últimos trabajos */}
    <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-title text-crow-text mb-12">Últimos trabajos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {lastWorks.map((project, index) => (
            <Link
              key={index}
              to={project.path}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-crow-dark/60 hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                <h3 className="text-xl font-title text-white">{project.title}</h3>
                <p className="text-sm text-crow-white font-body">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    {/* Galería de Servicios */}
    <section className="py-20 bg-gradient-to-b from-crow-primary to-crow-dark animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-title text-crow-text mb-12">Áreas de especialidad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-crow-dark/60 hover:scale-105 transition-transform"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crow-dark/80 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-xl font-title text-white mb-2">{service.title}</h3>
                <p className="text-sm text-crow-text font-body">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
