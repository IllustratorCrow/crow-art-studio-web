
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
  },
  {
    title: "Diseño Editorial",
    category: "Editorial",
    description: "Publicaciones y catálogos diseñados para diferentes clientes.",
    image: "https://i.imgur.com/yd2i87o.jpeg",
    path: "/servicios/diseno-editorial",
  },
  {
    title: "Ilustración Digital",
    category: "Ilustración",
    description: "Encargos de ilustración para publicaciones, branding y proyectos personales.",
    image: "https://i.imgur.com/jLYCY2S.jpeg",
    path: "/servicios/ilustracion",
  },
  {
    title: "Branding Corporativo",
    category: "Branding",
    description: "Diseño de logotipos, identidad visual y aplicaciones en papelería.",
    image: "https://i.imgur.com/rV8pbaq.jpeg",
    path: "/servicios/identidad-visual",
  },
  {
    title: "Arte Conceptual",
    category: "Ilustración",
    description: "Conceptualización de personajes, escenarios y productos.",
    image: "https://i.imgur.com/K7jq4fL.jpeg",
    path: "/servicios/ilustracion",
  },
];

const Projects = () => (
  <div className="pt-16 bg-crow-dark text-white min-h-screen">
    {/* Introducción */}
    <section className="bg-crow-dark text-crow-text py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-title mb-6">
          Mis <span className="text-crow-light">Proyectos</span>
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-crow-medium font-body">
          Explora una selección de proyectos realizados en diferentes áreas del diseño y la ilustración. Cada trabajo resalta una faceta creativa distinta, adaptada a las necesidades de cada cliente.
        </p>
      </div>
    </section>
    {/* Galería de Proyectos */}
    <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-title text-crow-text mb-12">Galería de Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <p className="text-sm text-crow-text font-body mb-1">{project.category}</p>
                <p className="text-xs text-crow-medium font-body">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
