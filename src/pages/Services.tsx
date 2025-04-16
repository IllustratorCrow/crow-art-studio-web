import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Diseño Gráfico",
      description: "Creamos diseños impactantes que comunican tu mensaje de manera efectiva",
      features: [
        "Identidad de marca",
        "Diseño editorial",
        "Material publicitario",
        "Diseño de packaging",
        "Diseño web"
      ]
    },
    {
      title: "Ilustración",
      description: "Damos vida a tus ideas a través de ilustraciones únicas y personalizadas",
      features: [
        "Ilustración digital",
        "Arte conceptual",
        "Ilustración editorial",
        "Personajes",
        "Storyboards"
      ]
    },
    {
      title: "Arte Digital",
      description: "Transformamos conceptos en arte digital cautivador",
      features: [
        "Manipulación de imágenes",
        "Composición digital",
        "Efectos especiales",
        "Retoque fotográfico",
        "Animación básica"
      ]
    }
  ];

  return (
    <div className="pt-16">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-crow-dark/30 backdrop-blur-sm rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-crow-light mb-4">{service.title}</h3>
                <p className="text-crow-text mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-crow-text">
                      <Check className="w-5 h-5 text-crow-light mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;