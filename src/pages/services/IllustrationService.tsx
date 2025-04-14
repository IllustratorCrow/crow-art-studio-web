
import ServiceLayout from "@/components/ServiceLayout";

const IllustrationService = () => {
  return (
    <ServiceLayout
      title="Ilustración"
      description="Damos vida a tus ideas a través de ilustraciones únicas y personalizadas."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Retratos</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Retratos digitales</li>
            <li>Caricaturas</li>
            <li>Ilustraciones de mascotas</li>
          </ul>
        </div>
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Arte Editorial</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Portadas de libros</li>
            <li>Ilustraciones interiores</li>
            <li>Arte conceptual</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default IllustrationService;
