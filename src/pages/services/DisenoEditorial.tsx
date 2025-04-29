import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
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

const otrosFormatos = [
  {
    id: 1,
    title: "* Memoria Anual *",
    description: "(Página aún en desarrollo)",
    image: "https://i.imgur.com/EXAMPLE_IMAGE_1.jpg",
  },
  {
    id: 2,
    title: "* Informe Corporativo *",
    description: "(Página aún en desarrollo)",
    image: "https://i.imgur.com/EXAMPLE_IMAGE_2.jpg",
  },
  {
    id: 3,
    title: "* Dossier *",
    description: "(Página aún en desarrollo)",
    image: "https://i.imgur.com/EXAMPLE_IMAGE_3.jpg",
  },
];

const DisenoEditorial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16 bg-crow-dark text-white min-h-screen relative">
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div
            className="relative bg-crow-dark rounded-xl shadow-2xl p-4 w-full max-w-screen-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-crow-light hover:text-white transition"
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="w-full max-h-[80vh] h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}

      {/* Volver */}
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
            src="https://i.imgur.com/SLAscDB.jpeg"
            alt="Diseño Editorial - Portada"
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover object-center rounded-lg shadow-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
            <div className="w-full md:w-1/2 p-4 sm:p-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-title mb-4 sm:mb-6">
                Servicios de Diseño Editorial
              </p>
              <p className="text-base sm:text-lg text-crow-text font-body leading-relaxed max-w-prose">
                Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Editoriales */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-10 sm:mb-12">
            Proyectos Editoriales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {editorialProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60 cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                  <h3 className="text-lg sm:text-xl font-title text-crow-light">{project.title}</h3>
                  <p className="text-sm text-crow-text font-body">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Otros formatos */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-primary to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-10 sm:mb-12">
            Otros formatos editoriales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otrosFormatos.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60 cursor-pointer"
                onClick={() => openModal(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                  <h3 className="text-lg sm:text-xl font-title text-crow-light">{project.title}</h3>
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

export default DisenoEditorial;
