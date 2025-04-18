
import { ReactNode } from "react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const ServiceLayout = ({ title, description, children }: ServiceLayoutProps) => {
  return (
    <div className="pt-16">
      <section className="bg-crow-dark text-crow-text min-h-[40vh] flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-title mb-4">{title}</h1>
          <p className="text-xl text-crow-medium font-body max-w-2xl">{description}</p>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-crow-dark to-crow-primary">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
