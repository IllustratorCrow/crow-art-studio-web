
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VidaBesaya = () => {
  return (
    <div className="pt-16">
      <section className="bg-crow-dark text-crow-text min-h-[40vh] flex items-center">
        <div className="container mx-auto px-4">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-crow-light mb-4 hover:text-crow-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
          <h1 className="text-4xl font-title mb-4">La Vida del Besaya</h1>
          <p className="text-xl text-crow-medium font-body max-w-2xl">Paneles e Infografías</p>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <img src="https://i.imgur.com/SLAscDB.jpeg" alt="La Vida del Besaya" className="w-full max-w-4xl mx-auto rounded-lg shadow-xl mb-8" />
          <div className="max-w-4xl mx-auto text-crow-text font-body">
            <p className="mb-4">Contenido del proyecto La Vida del Besaya...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VidaBesaya;
