/* src/pages/Contact.tsx */
import { useState } from "react";
import {
  Send,
  Mail,
  Instagram,
  Link as LinkIcon,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:illustratorcrow@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;

    toast({
      title: "Abriendo tu cliente de correo…",
      description:
        "Si no se abre automáticamente, verifica que tengas un cliente configurado.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-0">
      {/* Banner */}
      <section
        className="bg-crow-dark text-crow-text min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url("https://i.imgur.com/Zz1JpiE.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-crow-dark/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl font-title mb-6">
              Hablemos de tu <span className="text-crow-light">Proyecto</span>
            </h1>
            <p className="text-xl mb-8 text-crow-medium font-body">
              Estoy deseando saber más sobre tus ideas y cómo puedo ayudarte a
              darles vida.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors font-body"
            >
              Escríbeme
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Formulario + info */}
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-crow-dark/30 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-crow-light mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-crow-light w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-crow-text">Email</h4>
                    <a
                      href="mailto:illustratorcrow@gmail.com"
                      className="text-crow-medium hover:text-crow-light transition-colors"
                    >
                      illustratorcrow@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <Instagram className="text-crow-light w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-crow-text">Instagram</h4>
                    <a
                      href="https://instagram.com/illustrator_crow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crow-medium hover:text-crow-light transition-colors"
                    >
                      @illustrator_crow
                    </a>
                  </div>
                </div>

                {/* Linktree */}
                <div className="flex items-start">
                  <LinkIcon className="text-crow-light w-5 h-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-crow-text">Linktree</h4>
                    <a
                      href="https://linktr.ee/illustratorcrow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crow-medium hover:text-crow-light transition-colors"
                    >
                      linktr.ee/illustratorcrow
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-crow-dark/30 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-crow-light mb-6">
                Envíame un Mensaje
              </h3>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-crow-text mb-2">
                    Nombre
                  </label>
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
                  <label htmlFor="email" className="block text-crow-text mb-2">
                    Email
                  </label>
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
                  <label
                    htmlFor="subject"
                    className="block text-crow-text mb-2"
                  >
                    Asunto
                  </label>
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
                  <label
                    htmlFor="message"
                    className="block text-crow-text mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-crow-dark/50 border border-crow-medium/30 rounded-md text-crow-text focus:outline-none focus:border-crow-light"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-crow-primary hover:bg-crow-medium px-6 py-3 rounded-lg transition-colors text-crow-text"
                >
                  Enviar Mensaje
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
