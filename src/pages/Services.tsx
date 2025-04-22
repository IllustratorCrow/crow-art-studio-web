import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Diseño Publicitario",
      description: "Creación de carteles, flyers, banners y otros materiales promocionales para potenciar tu mensaje y captar la atención de tu audiencia.",
      features: [
        "Carteles y posters",
        "Flyers y folletos",
        "Banners digitales",
        "Material promocional",
        "Campañas publicitarias"
      ],
      path: "/servicios/diseno-publicitario"
    },
    {
      title: "Ilustración",
      description: "Creación de ilustraciones personalizadas para medios digitales y tradicionales, dando vida a tus ideas con un toque artístico único.",
      features: [
        "Ilustración digital",
        "Arte conceptual",
        "Ilustración editorial",
        "Personajes",
        "Estilo personalizado"
      ],
      path: "/servicios/ilustracion"
    },
    {
      title: "Identidad Visual",
      description: "Diseño de logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable.",
      features: [
        "Logotipos",
        "Manual de identidad",
        "Papelería corporativa", 
        "Aplicaciones de marca",
        "Branding integral"
      ],
      path: "/servicios/identidad-visual"
    },
    {
      title: "Diseño Editorial",
      description: "Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad.",
      features: [
        "Maquetación de libros",
        "Diseño de portadas",
        "Revistas y catálogos",
        "Informes y documentos",
        "Publicaciones digitales"
      ],
      path: "/servicios/diseno-editorial"
    }
  ];

  return (
    <div className="pt-0">
      {/* Introducción */}
      <section className="bg-crow-dark text-crow-text py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            Nuestros <span className="text-crow-light">Servicios</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-crow-medium">
            Ofrecemos soluciones creativas personalizadas para dar vida a tus proyectos
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-crow-dark/30 backdrop-blur-sm rounded-lg p-8 transition-all hover:shadow-lg hover:bg-crow-dark/50"
              >
                <h3 className="text-2xl font-bold text-crow-light mb-4">{service.title}</h3>
                <p className="text-crow-text mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-crow-text">
                      <Check className="w-5 h-5 text-crow-light mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 bg-crow-light/10 hover:bg-crow-light/20 px-4 py-2 rounded-lg transition-colors font-body text-crow-light"
                >
                  Ver más detalles
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;