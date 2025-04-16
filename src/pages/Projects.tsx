
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Diseño Editorial",
      category: "Editorial",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png"
    },
    {
      title: "Ilustración Digital",
      category: "Ilustración",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png"
    },
    {
      title: "Branding Corporativo",
      category: "Branding",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png"
    },
    {
      title: "Arte Conceptual",
      category: "Ilustración",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png"
    },
    {
      title: "Diseño de Packaging",
      category: "Diseño",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png"
    },
    {
      title: "Ilustración Editorial",
      category: "Ilustración",
      image: "public/lovable-uploads/18f79205-6f9f-4a6c-acb3-5f62877ab3aa.png"
    }
  ];

  return (
    <div className="pt-16">
      {/* Introducción */}
      <section className="bg-crow-dark text-crow-text py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">
            Nuestro <span className="text-crow-light">Portfolio</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-crow-medium animate-fade-in">
            Explora nuestra colección de proyectos de diseño e ilustración. Cada pieza cuenta una historia única.
          </p>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-crow-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-crow-text p-6">
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
