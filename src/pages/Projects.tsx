
import { Link } from "react-router-dom";

const projects = [
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
  }
];

const Projects = () => (
  <div className="pt-16 bg-crow-dark text-white min-h-screen">
    {/* Banner portada */}
    <section className="relative mb-12">
      <img
        src="https://i.imgur.com/Zwlo1YT.jpeg"
        alt="Portada Mis Proyectos"
        className="w-full h-[60vh] object-cover object-center rounded-b-3xl shadow-xl"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center rounded-b-3xl">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl md:text-5xl font-title mb-6">Mis <span className="text-crow-light">proyectos</span></h1>
          <p className="text-xl mb-8 text-white font-body">
            Aquí podrás encontrar un catálogo con mis proyectos personales.
            Aún hay mucho trabajo por delante, visita la página de nuevo para ir viendo las novedades!
          </p>
        </div>
      </div>
    </section>
    {/* Galería de Proyectos */}
    <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-title text-crow-text mb-12">Galería de proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <h3 className="text-xl font-title text-crow-light">{project.title}</h3>
                <p className="text-sm text-crow-text font-body mb-1">{project.category}</p>
                <p className="text-xs text-white font-body">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
