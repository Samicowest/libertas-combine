
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Chief Executive",
      image: "JS"
    },
    {
      name: "Sarah Johnson", 
      role: "Technology and Innovation Director",
      image: "SJ"
    },
    {
      name: "Michael Brown",
      role: "Chief Finance Officer",
      image: "MB"
    }
  ];

  return (
    <section className="py-20 bg-[#1a1b3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">TEAM</h2>
          <p className="text-xl text-gray-300">Meet our exceptional leadership team</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-3xl font-bold">{member.image}</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              
              <div className="flex justify-center space-x-4">
                <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
