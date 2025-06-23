
import React from 'react';
import { ExternalLink } from 'lucide-react';

const VenturesSection = () => {
  const ventures = [
    {
      name: "LIBERTA MV1",
      description: "Innovative blockchain initiative for decentralized applications and smart contracts.",
      category: "Blockchain"
    },
    {
      name: "Liberta Estate",
      description: "Real estate development focused on sustainable and eco-friendly properties.",
      category: "Real Estate"
    },
    {
      name: "Trader+",
      description: "Advanced trading platform with AI-powered analytics and market insights.",
      category: "Fintech"
    }
  ];

  return (
    <section id="ventures" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">VENTURES</h2>
          <p className="text-xl text-gray-600">Explore our innovative ventures and partnerships</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-6 flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                <span className="text-purple-600 font-bold text-lg">{venture.name}</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{venture.name}</h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {venture.category}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{venture.description}</p>
                
                <button className="bg-[#1a1b3a] hover:bg-[#2d1b69] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
