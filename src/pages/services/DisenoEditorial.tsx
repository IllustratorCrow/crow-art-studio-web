
import ServiceLayout from "@/components/ServiceLayout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DisenoEditorial = () => {
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
        title="Diseño Editorial"
        description="Maquetación de libros, diseño de portadas, revistas y catálogos para dar forma visual a tus contenidos con estilo y profesionalidad."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Libros y Revistas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño de portadas</li>
              <li>Maquetación interior</li>
              <li>Diseño de colecciones</li>
              <li>Revistas y publicaciones periódicas</li>
              <li>Diagramación de contenidos</li>
            </ul>
          </div>
          <div className="bg-crow-dark/30 p-6 rounded-lg hover:bg-crow-dark/50 transition-colors">
            <h3 className="text-xl font-title text-crow-light mb-4">Materiales Corporativos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Catálogos de productos</li>
              <li>Memorias y reportes anuales</li>
              <li>Folletos y dossiers</li>
              <li>Publicaciones digitales</li>
              <li>Informes y presentaciones</li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </div>
  );
};

export default DisenoEditorial;
