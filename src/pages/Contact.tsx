
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulación de envío exitoso
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
      variant: "default",
    });
    
    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="pt-16">
      {/* Introducción */}
      <section className="bg-crow-dark text-crow-text py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">
            Ponte en <span className="text-crow-light">Contacto</span>
          </h1>
          <p className="text-xl max-w-2xl mb-8 text-crow-medium animate-fade-in">
            Cuéntanos sobre tu proyecto y cómo podemos ayudarte a hacerlo realidad
          </p>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Información de contacto */}
            <div className="bg-crow-dark/30 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-bold text-crow-light mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-crow-light w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-crow-text">Email</h3>
                    <p className="text-crow-medium">info@ilustratorcrow.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-crow-light w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-crow-text">Teléfono</h3>
                    <p className="text-crow-medium">+34 600 123 456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-crow-light w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-crow-text">Dirección</h3>
                    <p className="text-crow-medium">Calle Imaginaria 123, Barcelona, España</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulario */}
            <div className="bg-crow-dark/30 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-bold text-crow-light mb-6">Envíanos un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-crow-text mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-crow-dark/50 border border-crow-medium/30 rounded-md text-crow-text focus:outline-none focus:border-crow-light"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-crow-text mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-crow-dark/50 border border-crow-medium/30 rounded-md text-crow-text focus:outline-none focus:border-crow-light"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-crow-text mb-2">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-crow-dark/50 border border-crow-medium/30 rounded-md text-crow-text focus:outline-none focus:border-crow-light"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-crow-text mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-crow-dark/50 border border-crow-medium/30 rounded-md text-crow-text focus:outline-none focus:border-crow-light"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors text-crow-text"
                >
                  Enviar Mensaje
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
