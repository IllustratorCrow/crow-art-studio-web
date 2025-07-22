import { Link } from "react-router-dom";
import { ArrowRight, Brush, Palette, Package, BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Helmet } from 'react-helmet'
// Constante de SERVICIOS
const services = [
  {
    icon: <Brush className="w-8 h-8" />,
    title: "Diseño gráfico para publicidad",
    description: "Diseño de carteles, flyers y banners para comunicar tu mensaje con claridad, captar la atención y potenciar tu visibilidad.",
    path: "/servicios/diseno-publicitario",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Ilustración",
    description: "Ilustraciones digitales y tradicionales que transforman tus ideas en piezas únicas, perfectas para editoriales, marcas o proyectos personales.",
    path: "/servicios/ilustracion",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Branding e identidad visual para marcas",
    description: "Creación de logotipos, branding integral y manuales visuales que hacen que tu marca sea reconocible, coherente y profesional.",
    path: "/servicios/identidad-visual",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Maquetación editorial",
    description: "Maquetación de libros, portadas, revistas y catálogos con estilo y estructura, listos para impresión o publicación digital.",
    path: "/servicios/diseno-editorial",
  },
];

// Constante de NOVEDADES
const novedades = [
  {
    title: "Nuevas tarjetas de Illustrator Crow!",
    description: "El negocio por fin cuenta con tarjetas propias. :)",
    image: "https://i.imgur.com/ARBRWmC.jpeg",
  },
  {
    title: "Acciones de mejora de la empleabilidad",
    description: "He tenido el gusto de trabajar con el Ayuntamiento de Los Corrales de Buelna para hacer este cartel.",
    image: "https://i.imgur.com/eJFRLb6.jpeg",
  },
];

// Constante de PROYECTOS
const featuredProjects = [
  {
    title: "Mares Creativos",
    image: "https://i.imgur.com/pgCqphb.jpeg",
    description: "Línea de merchandising diseñada para el Museo Marítimo del Cantábrico.",
    path: "/proyectos/mares-creativos",
  },
  {
    title: "La Vida del Besaya",
    image: "https://i.imgur.com/SLAscDB.jpeg",
    description: "Paneles e Infografías sobre la historia, fauna y flora de la Senda Fluvial del Besaya.",
    path: "/proyectos/vida-besaya",
  },
];

// Constante de COLABORADORES
const colaboradores = [
  {
    name: "Gobierno de Cantabria",
    logo: "https://i.imgur.com/K3WVRN3.png",
    link: "https://www.cantabria.es/web/consejeria-de-industria#",
  },
  {
    name: "Lanzaderas de Empleo Cantabria",
    logo: "https://i.imgur.com/30HgIF9.png",
    link: "https://empleacantabria.es/lanzaderas-de-empleo",
  },
    {
    name: "Servicio Cantabro de Empleo",
    logo: "https://i.imgur.com/riAktDU.png",
    link: "https://empleacantabria.es",
  },
];


const Index = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Diseño Gráfico en Cantabria | IllustratorCrow</title>
        <meta
          name="description"
          content="Diseño gráfico freelance en Cantabria: publicidad, cartelería, identidad visual e ilustración. Servicios profesionales con un enfoque artístico y creativo."
        />
        <meta
          name="keywords"
          content="diseño, diseño gráfico, cantabria, publicidad, marketing, cartelería, identidad visual, ilustración"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="IllustratorCrow" />
      </Helmet>
      {/* Banner */}
      <section
        className="bg-crow-dark text-crow-text min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url("https://i.imgur.com/Zz1JpiE.jpeg")' }}
      >
        <div className="absolute inset-0 bg-crow-dark/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-title mb-6 leading-tight">
              <span className="text-crow-light">Diseño Gráfico</span> con mirada artística
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-crow-medium font-body">
              Soy diseñadora freelance con experiencia en diseño publicitario,<br /> branding visual e ilustración.<br /><br />
              Integro ilustración personalizada como parte del proceso creativo.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors font-body text-base sm:text-lg"
            >
              Hablemos de tu diseño!
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-8 sm:mb-12 text-center sm:text-left">
            ¿Qué ofrezco?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-crow-dark/30 backdrop-blur-sm rounded-lg text-center hover:bg-crow-dark/50 transition-colors"
              >
                <div className="text-crow-light mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-title text-crow-light mb-2">{service.title}</h3>
                <p className="text-crow-text font-body mb-4 text-sm sm:text-base">{service.description}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 bg-crow-light/10 hover:bg-crow-light/20 px-4 py-2 rounded-lg transition-colors font-body text-crow-light text-sm sm:text-base"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Novedades (Slider) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-primary to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-8 sm:mb-12 text-center sm:text-left">
            Novedades
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"></div>

          <div className="mx-auto max-w-3xl relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 5000 }}
              loop
              className="rounded-xl overflow-hidden h-[28rem]"
            >
              {novedades.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                      <h3 className="text-xl font-title text-crow-light">{item.title}</h3>
                      <p className="text-sm text-crow-text">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Flechas personalizadas */}
            <style>
              {`
                .swiper-button-next,
                .swiper-button-prev {
                  color: white;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 2rem;
                  height: 2rem;
                }
                .swiper-button-next::after,
                .swiper-button-prev::after {
                  font-size: 1.5rem;
                  font-weight: bold;
                }
              `}
            </style>
          </div>
        </div>
      </section>


      {/* Proyectos Destacados */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-8 sm:mb-12 text-center sm:text-left">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                to={project.path}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.01] transform transition-transform"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 sm:h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                  <h3 className="text-lg sm:text-xl font-title text-crow-light">{project.title}</h3>
                  <p className="text-sm text-crow-text font-body">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Series de Blogs */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-primary to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-8 sm:mb-12 text-center sm:text-left">
            Series de Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Link
              to="/blogs/historia-del-arte"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.01] transform transition-transform"
            >
              <img
                src="https://images.unsplash.com/photo-1577049090931-f8ae58117bdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Historia del Arte"
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-crow-dark/70 p-4">
                <h3 className="text-xl font-title text-crow-light">Historia del Arte</h3>
                <p className="text-sm text-crow-text">
                  Una serie que recorre las principales etapas del arte a lo largo de la historia.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Entes Colaboradores */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-crow-dark to-crow-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-title text-crow-text mb-8 text-center sm:text-left">
            Entes Colaboradores
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 items-center">
            {colaboradores.map((colaborador, index) => (
              <a
                key={index}
                href={colaborador.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full p-0 m-0"
              >
              <img
                src={colaborador.logo}
                alt={colaborador.name}
                className="h-[100px] object-contain mx-0 my-0"
              />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
