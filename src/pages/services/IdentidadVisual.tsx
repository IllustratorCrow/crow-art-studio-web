import ServiceLayout from "@/components/ServiceLayout";
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
      
      <section className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-title mb-4">Identidad Visual</h1>
          <p className="text-xl text-crow-medium font-body max-w-2xl">
            Diseño de logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable.
          </p>
        </div>
      </section>

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

      <ServiceLayout
        title="Identidad Visual"
        description="Diseño de logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Logotipos y Branding</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño de logotipos e isotipos</li>
              <li>Desarrollo de identidad corporativa</li>
              <li>Manuales de identidad visual</li>
              <li>Rediseño y actualización de marca</li>
              <li>Diseño de papelería corporativa</li>
            </ul>
          </div>
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Aplicaciones de marca</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño para merchandising</li>
              <li>Señalética corporativa</li>
              <li>Redes sociales y medios digitales</li>
              <li>Uniformes y vestuario</li>
              <li>Vehículos y elementos corporativos</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </div>
  );
};

export default IdentidadVisual;
