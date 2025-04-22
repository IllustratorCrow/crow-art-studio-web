import ServiceLayout from "@/components/ServiceLayout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const editorialProjects = [
  {
    id: 1,
    title: "Libro Ilustrado",
    description: "Diseño y maquetación de libro temático para editorial local.",
    image: "https://i.imgur.com/yd2i87o.jpeg",
  },
  {
    id: 2,
    title: "Revista Cultural",
    description: "Diseño de portada y maquetación de revista mensual.",
    image: "https://i.imgur.com/jLYCY2S.jpeg",
  },
  {
    id: 3,
    title: "Catálogo de Productos",
    description: "Formato atractivo para catálogo de empresa nacional.",
    image: "https://i.imgur.com/rV8pbaq.jpeg",
  },
];

const DisenoEditorial = () => {
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
          <h1 className="text-4xl font-title mb-4">Diseño Editorial</h1>
          <p className="text-xl text-crow-medium font-body max-w-2xl">
            Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad.
          </p>
        </div>
      </section>

      {/* Galería Editorial */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Proyectos Editoriales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorialProjects.map((project) => (
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
        title="Diseño Editorial"
        description="Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Libros y Revistas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño de portadas</li>
              <li>Maquetación interior</li>
              <li>Diseño de colecciones</li>
              <li>Revistas y publicaciones periódicas</li>
              <li>Diagramación de contenidos</li>
            </ul>
          </div>
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Materiales Corporativos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Catálogos de productos</li>
              <li>Memorias y reportes anuales</li>
              <li>Folletos y dossiers</li>
              <li>Publicaciones digitales</li>
              <li>Informes y presentaciones</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </div>
  );
};

export default DisenoEditorial;
