
import ServiceLayout from "@/components/ServiceLayout";

const EditorialService = () => {
  return (
    <ServiceLayout
      title="Servicios Editoriales"
      description="Transformamos contenido en publicaciones atractivas y profesionales."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Libros y Revistas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Diseño de portadas</li>
            <li>Maquetación interior</li>
            <li>Diseño editorial</li>
          </ul>
        </div>
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Catálogos</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Catálogos de productos</li>
            <li>Memorias corporativas</li>
            <li>Folletos informativos</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default EditorialService;
