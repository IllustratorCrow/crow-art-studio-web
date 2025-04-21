
import ServiceLayout from "@/components/ServiceLayout";

const ProductService = () => {
  return (
    <ServiceLayout
      title="Diseño de Productos"
      description="Creamos diseños únicos para productos que destacan en el mercado."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-crow-text font-body">
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Merchandising</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Diseño para camisetas</li>
            <li>Diseño para tazas</li>
            <li>Diseño para accesorios</li>
          </ul>
        </div>
        <div className="bg-crow-dark/30 p-6 rounded-lg">
          <h3 className="text-xl font-title text-crow-light mb-4">Packaging</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Diseño de empaques</li>
            <li>Etiquetas de productos</li>
            <li>Cajas personalizadas</li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ProductService;
