import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DisenoGrafico = () => {
  // Datos de las imágenes de Cartelería
  const carteleriaProjects = [
    {
      id: 1,
      title: "Acciones de mejora de la Empleabilidad",
      description:
        "Diseñado para la Agencia de Desarrollo Local de Los Corrales de Buelna, este cartel promueve cursos gratuitos de empleabilidad.",
      image: "https://i.imgur.com/yd2i87o.jpeg",
    },
    {
      id: 2,
      title: "Electric Pulse Fest",
      description:
        "Creado a modo de ejercicio para promocionar un festival ficticio de música electrónica, este cartel comunica la esencia vibrante y futurista del evento.",
      image: "https://i.imgur.com/jLYCY2S.jpeg",
    },
    {
      id: 3,
      title: "Brew & Bloom",
      description:
        "Diseñado a modo de ejercicio para promover la próxima apertura de un café ficticio, este cartel transmite una atmósfera acogedora y moderna.",
      image: "https://i.imgur.com/rV8pbaq.jpeg",
    },
  ];

  // Datos de las imágenes de Publicidad
  const publicidadProjects = [
    {
      id: 1,
      title: "* Ejemplo Flyer *",
      description:
        "(Página aún en desarrollo)",
      image: "https://i.imgur.com/EXAMPLE_IMAGE_1.jpg", // Reemplaza con tu imagen
    },
    {
      id: 2,
      title: "* Ejemplo Triptico *",
      description:
        "(Página aún en desarrollo)",
      image: "https://i.imgur.com/EXAMPLE_IMAGE_2.jpg", // Reemplaza con tu imagen
    },
    {
      id: 3,
      title: "* Ejemplo Infografía *",
      description:
        "(Página aún en desarrollo)",
      image: "https://i.imgur.com/EXAMPLE_IMAGE_3.jpg", // Reemplaza con tu imagen
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-crow-dark text-white">
      {/* Barra de navegación */}
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Aquí va tu Navbar */}
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        {/* Título y descripción */}
        <section className="py-0">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-crow-light mb-4 hover:text-crow-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          <div className="relative">
            <img
              src="https://i.imgur.com/K7jq4fL.jpeg"
              alt="Diseño Gráfico - Portada"
              className="w-full h-[60vh] object-cover object-[30%_50%] rounded-lg shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crow-dark/90 to-transparent flex items-center">
              <div className="w-full md:w-1/2 p-6">
                <p className="text-4xl font-title mb-8">Servicios de Diseño Gráfico</p>
                <p className="text-lg text-crow-text font-body leading-relaxed">
                  Diseño gráfico adaptado a tus necesidades: logotipos, papelería, cartelería y más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Cartelería */}
        <section className="py-16 bg-gradient-to-b from-crow-dark to-crow-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Título */}
              <p className="text-4xl text-crow-text font-title leading-relaxed mb-8">
                Proyectos de Cartelería
              </p>
              {/* Galería de imágenes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {carteleriaProjects.map((project) => (
                  <div
                    key={project.id}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                  >
                    {/* Degradado */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/0"></div>

                    {/* Contenido */}
                    <div className="relative z-10 p-8 space-y-6">
                      {/* Imagen */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[305px] object-cover rounded-lg mb-6"
                      />
                      {/* Título */}
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {/* Descripción */}
                      <p className="text-base font-body">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Publicidad */}
        <section className="py-16 bg-gradient-to-b from-crow-primary to-crow-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Título */}
              <p className="text-4xl text-crow-text font-title leading-relaxed mb-8">
                Otros formatos publicitarios
              </p>
              {/* Galería de imágenes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {publicidadProjects.map((project) => (
                  <div
                    key={project.id}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                  >
                    {/* Degradado */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/0"></div>

                    {/* Contenido */}
                    <div className="relative z-10 p-8 space-y-6">
                      {/* Imagen */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[330px] object-cover rounded-lg mb-6"
                      />
                      {/* Título */}
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {/* Descripción */}
                      <p className="text-base font-body">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DisenoGrafico;