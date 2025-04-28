import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";

const ilustracionProjects = [
  {
    id: 1,
    title: "Retratos de Mascotas",
    description: " ",
    image: "https://i.imgur.com/dZRF4rl.jpeg",
  },
  {
    id: 2,
    title: "Arte Conceptual",
    description: " ",
    image: "https://i.imgur.com/Zz1JpiE.jpeg",
  },
  {
    id: 3,
    title: "Diseño de Personajes",
    description: " ",
    image: "https://i.imgur.com/LIepNmg.jpeg",
  },
];

const otrosFormatos = [
  {
    id: 1,
    title: "Aquí aún no hay nada!",
    description: " ",
    image: "https://i.imgur.com/Zz1JpiE.jpeg",
  },
  {
    id: 2,
    title: "Aquí aún no hay nada!",
    description: " ",
    image: "https://i.imgur.com/Zz1JpiE.jpeg",
  },
  {
    id: 3,
    title: "Aquí aún no hay nada!",
    description: " ",
    image: "https://i.imgur.com/Zz1JpiE.jpeg",
  },
];

const Ilustracion = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16 bg-crow-dark text-white min-h-screen">
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

      {/* Portada */}
      <section className="container mx-auto px-4">
        <div className="relative mb-12">
          <img
            src="https://i.imgur.com/TGCcuJN.jpeg"
            alt="Ilustración - Portada"
            className="w-full h-[60vh] object-cover object-[30%_50%] rounded-lg shadow-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
            <div className="w-full md:w-1/2 p-6">
              <p className="text-4xl font-title mb-8">Servicios de Ilustración</p>
              <p className="text-lg text-crow-text font-body leading-relaxed">
                Ilustraciones personalizadas adaptadas a tus necesidades: conceptos únicos, personajes, escenas y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Ilustraciones */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Ilustraciones Digitales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ilustracionProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => openModal(project.image)}
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
      </section>

      {/* Otros formatos */}
      <section className="py-20 bg-gradient-to-b from-crow-primary to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-title text-crow-text mb-12">Medios Tradicionales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otrosFormatos.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform bg-crow-dark/60"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => openModal(project.image)}
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
      </section>
    </div>
  );
};

export default Ilustracion;
