import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-crow-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-crow-dark/80 z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: 'url("https://i.imgur.com/Zz1JpiE.jpeg")' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 py-12 max-w-2xl z-10"
      >
        <h1 className="text-7xl lg:text-8xl font-title text-crow-light mb-6">404</h1>
        <p className="text-2xl text-crow-medium mb-8">
          Página no encontrada
        </p>
        <p className="text-crow-text mb-10">
          Lo sentimos, no hemos podido encontrar la página que buscas.
        </p>
        <Link
          to="/"
          className="inline-block bg-crow-primary hover:bg-crow-medium text-crow-text px-6 py-3 rounded-lg transition-colors font-semibold"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
