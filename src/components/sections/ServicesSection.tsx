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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-purple-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-transparent hover:border-purple-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
