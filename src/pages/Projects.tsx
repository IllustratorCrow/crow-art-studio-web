import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Diseño Editorial",
      category: "Editorial",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png", // Ruta corregida
    },
    {
      title: "Ilustración Digital",
      category: "Ilustración",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png", // Ruta corregida
    },
    {
      title: "Branding Corporativo",
      category: "Branding",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png", // Ruta corregida
    },
    {
      title: "Arte Conceptual",
      category: "Ilustración",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png", // Ruta corregida
    },
    {
      title: "Diseño de Packaging",
      category: "Diseño",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png", // Ruta corregida
    },
    {
      title: "Ilustración Editorial",
      category: "Ilustración",
      image: "/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png", // Ruta corregida
    },
  ];

  return (
    <div className="pt-0"> {/* Padding-top igual a la altura de la barra */}
      {/* Introducción */}
      <section className="bg-crow-dark text-crow-text py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            Nuestro <span className="text-crow-light">Portfolio</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-crow-medium">
            Explora nuestra colección de proyectos de diseño e ilustración.
          </p>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-crow-dark/80 flex flex-col justify-center items-center text-crow-text p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-crow-light">{project.category}</p>
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