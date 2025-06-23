
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "Analytical corporate media",
    "Personnel management",
    "Physical Development",
    "Rapid financing and analytics",
    "Security & Risk",
    "Technology and data",
    "Alternative programming solutions"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Our human ability are based on potential for engineering, 
              human resources, and analytics. Our agenda is to believe it 
              requires a social culture for risk management and technical 
              compliance to enable a social culture. We manage the ability 
              of many companies.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-[#1a1b3a] hover:bg-[#2d1b69] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Read More
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#1a1b3a] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">LOGO</span>
                    </div>
                    <p className="text-gray-600">Modern Office Building</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
