
import ServiceLayout from "@/components/ServiceLayout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const IdentidadVisual = () => {
  return (
    <div className="pt-16 mt-4">
      <section className="py-8 container mx-auto px-4">
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 text-crow-light hover:text-crow-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a servicios
        </Link>
      </section>
      
      <ServiceLayout
        title="Identidad Visual"
        description="Diseño de logotipos, branding integral, manuales de identidad y aplicaciones en merchandising para construir una imagen coherente y memorable."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Logotipos y Branding</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño de logotipos e isotipos</li>
              <li>Desarrollo de identidad corporativa</li>
              <li>Manuales de identidad visual</li>
              <li>Rediseño y actualización de marca</li>
              <li>Diseño de papelería corporativa</li>
            </ul>
          </div>
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Aplicaciones de marca</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño para merchandising</li>
              <li>Señalética corporativa</li>
              <li>Redes sociales y medios digitales</li>
              <li>Uniformes y vestuario</li>
              <li>Vehículos y elementos corporativos</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </div>
  );
};

export default IdentidadVisual;
