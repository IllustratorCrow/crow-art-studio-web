import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Mares Creativos",
      category: "Merchandising",
      description: "Línea de merchandising diseñada para el Museo Marítimo del Cantábrico.",
      image: "https://i.imgur.com/pgCqphb.jpeg",
      path: "/proyectos/mares-creativos",
    },
    {
      title: "La Vida del Besaya",
      category: "Infografía",
      description: "Paneles e Infografías sobre la historia, fauna y flora de la Senda Fluvial del Besaya.",
      image: "https://i.imgur.com/SLAscDB.jpeg",
      path: "/proyectos/vida-besaya",
    },
  ];

  const otherProjects = [
    {
      title: "Diseño Editorial",
      category: "Editorial",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
    },
    {
      title: "Ilustración Digital",
      category: "Ilustración",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
    },
    {
      title: "Branding Corporativo",
      category: "Branding",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
    },
    {
      title: "Arte Conceptual",
      category: "Ilustración",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png",
    },
  ];

  return (
    <div className="pt-16 mt-4"> {/* Padding-top igual a la altura de la barra */}
      {/* Introducción */}
      <section className="bg-crow-dark text-crow-text py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-title mb-6">
            Mis <span className="text-crow-light">Proyectos</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-crow-medium font-body">
            Explora mi colección de proyectos de diseño e ilustración. Cada proyecto representa una combinación única de creatividad, técnica y visión artística.
          </p>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-title text-crow-text mb-12">Proyectos Destacados</h2>
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

      {/* Otros Proyectos */}
      <section className="py-20 bg-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-title text-crow-text mb-12">Otros Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg transition-all hover:shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-crow-dark/80 hover:bg-crow-dark/60 transition-colors flex flex-col justify-center items-center text-crow-text p-6">
                  <h3 className="text-xl font-title mb-2 text-crow-light">{project.title}</h3>
                  <p className="text-crow-medium">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;