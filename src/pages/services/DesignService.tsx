
import ServiceLayout from "@/components/ServiceLayout";

const DesignService = () => {
  return (
    <ServiceLayout
      title="Diseño Gráfico"
      description="Creamos identidades visuales que conectan con tu audiencia y destacan en el mercado."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Identidad Corporativa</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Diseño de logotipos</li>
            <li>Manual de marca</li>
            <li>Papelería corporativa</li>
          </ul>
        </div>
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Diseño para Redes</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Posts para redes sociales</li>
            <li>Historias y carruseles</li>
            <li>Banners publicitarios</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DesignService;
