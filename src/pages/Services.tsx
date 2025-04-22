
import { Link } from "react-router-dom";

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

const Services = () => (
  <div className="pt-16 bg-crow-dark text-white min-h-screen">
    {/* Introducción */}
    <section className="bg-crow-dark text-crow-text py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-title mb-8">
          Mis <span className="text-crow-light">Servicios</span>
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-crow-medium font-body">
          Descubre todas las áreas en las que puedo impulsar tu proyecto. Desde la conceptualización visual hasta la ejecución final, adapto cada solución a tus necesidades.
        </p>
      </div>
    </section>
    {/* Galería de Servicios */}
    <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-title text-crow-text mb-12">Áreas de especialidad</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform bg-crow-dark/60"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crow-dark/80 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-xl font-title text-crow-light mb-2">{service.title}</h3>
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
