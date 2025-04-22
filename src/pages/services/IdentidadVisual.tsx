
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const brandingProjects = [
  {
    id: 1,
    title: "Logotipo para Startup",
    description: "Logo minimalista para empresa tecnológica emergente.",
    image: "https://i.imgur.com/yd2i87o.jpeg",
  },
  {
    id: 2,
    title: "Manual Corporativo ONG",
    description: "Manual de identidad visual para ONG internacional.",
    image: "https://i.imgur.com/jLYCY2S.jpeg",
  },
  {
    id: 3,
    title: "Papelería Empresarial",
    description: "Diseños de tarjetas, sobres y documentos corporativos.",
    image: "https://i.imgur.com/rV8pbaq.jpeg",
  },
];

const otrasAplicaciones = [
  {
    id: 1,
    title: "* Merchandising *",
    description: "(Página aún en desarrollo)",
    image: "https://i.imgur.com/EXAMPLE_IMAGE_1.jpg",
  },
  {
    id: 2,
    title: "* Señalética *",
    description: "(Página aún en desarrollo)",
    image: "https://i.imgur.com/EXAMPLE_IMAGE_2.jpg",
  },
  {
    id: 3,
    title: "* Red social *",
    description: "(Página aún en desarrollo)",
    image: "https://i.imgur.com/EXAMPLE_IMAGE_3.jpg",
  },
];

const IdentidadVisual = () => {
  return (
    <div className="pt-16 bg-crow-dark text-white min-h-screen">
      <section className="py-8 container mx-auto px-4">
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 text-crow-light hover:text-crow-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a servicios
        </Link>
      </section>
      {/* Portada */}
      <section className="container mx-auto px-4">
        <div className="relative mb-12">
          <img
            src="https://i.imgur.com/pgCqphb.jpeg"
            alt="Identidad Visual - Portada"
            className="w-full h-[60vh] object-cover object-center rounded-lg shadow-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
            <div className="w-full md:w-1/2 p-6">
              <p className="text-4xl font-title mb-8">Servicios de Identidad Visual</p>
              <p className="text-lg text-crow-text font-body leading-relaxed">
                Diseño de logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Galería Branding */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Proyectos de Branding</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60"
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
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Otras aplicaciones */}
      <section className="py-20 bg-gradient-to-b from-crow-primary to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Otras aplicaciones de marca</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otrasAplicaciones.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdentidadVisual;
