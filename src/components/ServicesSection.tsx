
import React from 'react';
import { Building, Users, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "ASSET DEVELOPMENT WITH BLOCKCHAIN",
      description: "We provide institutional and individual investors superior transparency and accessibility."
    },
    {
      icon: Users,
      title: "PERSONNEL DEVELOPMENT AND TRAINING",
      description: "We improve recruiting and social in a way that enhances your company's human capabilities."
    },
    {
      icon: BarChart3,
      title: "FINANCIAL ANALYTICS AND SOFTWARE",
      description: "We deliver informational services for financial markets, efficient prediction and analytics."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
