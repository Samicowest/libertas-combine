
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1a1b3a] via-[#2d1b69] to-[#1a1b3a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-24 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">TEAM</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-300">Meet our exceptional leadership team</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 animate-pulse"></div>
                  <span className="text-white text-2xl sm:text-3xl font-bold relative z-10">{member.image}</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-300 blur-md"></div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">{member.role}</p>
              
              <div className="flex justify-center space-x-4">
                <button className="text-gray-400 hover:text-purple-400 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-purple-400 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-white/10">
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
