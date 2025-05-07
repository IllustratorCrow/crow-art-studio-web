import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const chapters = [
  {
    title: "01 - Arte Prehistórico",
    path: "/blogs/historia-del-arte/CAMBIAR",
  },
  // Puedes seguir añadiendo más capítulos
];

const HistoriaDelArteIndex = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577049090931-f8ae58117bdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
    >
      <div className="absolute inset-0 bg-crow-dark/80 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-title text-crow-light mb-12 text-center drop-shadow-lg">
          Historia del Arte
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chapters.map((chapter, index) => (
            <Link
              key={index}
              to={chapter.path}
              className="group p-6 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-crow-light bg-crow-primary/70 p-2 rounded-full">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-title text-crow-light group-hover:underline">
                  {chapter.title}
                </h2>
              </div>
              <p className="text-crow-light/80 text-sm font-body">
                Leer más sobre el capítulo {index + 1}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoriaDelArteIndex;
