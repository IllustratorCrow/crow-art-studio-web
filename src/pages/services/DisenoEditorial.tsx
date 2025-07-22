import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const editorialProjects = [
  {
    id: 1,
    title: "Aquí aún no hay nada!",
    description: "Recuerda que esta página aún está sin terminar! Ten paciencia. :)",
    image: "https://i.imgur.com/Zz1JpiE.jpeg",
  },
];

const otrosFormatos = [
  {
    id: 1,
    title: "Aquí aún no hay nada!",
    description: "Recuerda que esta página aún está sin terminar! Ten paciencia. :)",
    image: "https://i.imgur.com/Zz1JpiE.jpeg",
  },
];

const GallerySlider = ({ projects, onImageClick }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    if (startIndex + visibleCount < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="text-crow-light disabled:opacity-30"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          disabled={startIndex + visibleCount >= projects.length}
          className="text-crow-light disabled:opacity-30"
        >
          <ChevronRight size={32} />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60"
          >
            <img
              src={project.image}
              alt={project.title}
              onClick={() => onImageClick(project.image)}
              className="w-full h-64 object-cover cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
              <h3 className="text-xl font-title text-crow-light">{project.title}</h3>
              <p className="text-sm text-crow-text font-body">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DisenoEditorial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <div className="pt-16 bg-crow-dark text-white min-h-screen">
      <Helmet>
        <title>Diseño Editorial | Maquetación y publicaciones | IllustratorCrow</title>
        <meta
          name="description"
          content="Servicios de diseño editorial: maquetación profesional de libros, portadas, revistas y catálogos. Proyectos visuales pensados para impresionar y comunicar con claridad."
        />
        <meta
          name="keywords"
          content="diseño editorial, maquetación, libros, portadas, catálogos, revistas, diseño gráfico, cantabria"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="IllustratorCrow" />
      </Helmet>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-crow-dark rounded-xl shadow-2xl p-4 max-w-sm w-full mx-4">
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

      {/* Título */}
      <section className="container mx-auto px-4">
        <div className="relative mb-12">
          <img
            src="https://i.imgur.com/SLAscDB.jpeg"
            alt="Diseño Editorial - Portada"
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover object-center rounded-lg shadow-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
            <div className="w-full lg:w-1/2 p-4 sm:p-6">
              <p className="text-4xl font-title mb-8">Servicios de Diseño Editorial</p>
              <p className="text-lg text-crow-text font-body leading-relaxed">
                Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Proyectos Editoriales */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Proyectos Editoriales</h2>
          <GallerySlider projects={editorialProjects} onImageClick={openModal} />
        </div>
      </section>

      {/* Galería Otros formatos */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-primary to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Otros formatos editoriales</h2>
          <GallerySlider projects={otrosFormatos} onImageClick={openModal} />
        </div>
      </section>
    </div>
  );
};

export default DisenoEditorial;
