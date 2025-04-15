
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MaresCreativos = () => {
  return (
    <div className="pt-16">
      <section className="bg-crow-dark text-crow-text min-h-[40vh] flex items-center">
        <div className="container mx-auto px-4">
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-crow-light mb-4 hover:text-crow-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
          <h1 className="text-4xl font-title mb-4">Mares Creativos</h1>
          <p className="text-xl text-crow-medium font-body max-w-2xl leading-relaxed">
            Mares Creativos es una propuesta académica desarrollada como parte de mi proyecto de fin de grado en la escuela de diseño. Consiste en una línea de merchandising conceptual diseñada para el Museo Marítimo del Cantábrico, con el objetivo de conectar a los visitantes con la riqueza y diversidad de la vida marina a través del arte y el diseño.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-lg text-crow-text font-body leading-relaxed mb-12">
              El proyecto se basa en siete ilustraciones originales inspiradas en especies del mar Cantábrico y en otras formas de vida marina más universales, incluyendo la característica sardina de dos cabezas que se encuentra entre los objetos de la exposición. Cada ilustración ha sido cuidadosamente creada para reflejar no solo la belleza estética de la fauna y flora marina, sino también para transmitir un mensaje de conservación y respeto hacia los ecosistemas marinos en general.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img src="https://i.imgur.com/Y5QhRa5.jpeg" alt="Mares Creativos - Bolsa" className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" />
              <img src="https://i.imgur.com/3l6KQN2.jpeg" alt="Mares Creativos - Caja" className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" />
              <img src="https://i.imgur.com/5LIdjKD.jpeg" alt="Mares Creativos - Taza" className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaresCreativos;
