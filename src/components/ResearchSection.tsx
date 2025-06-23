
import React from 'react';

const ResearchSection = () => {
  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-white/3 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/3 rounded-full blur-md animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">Latest Research Posts</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-6 lg:mb-8"></div>
        <p className="text-lg sm:text-xl text-purple-100 mb-8 sm:mb-12 max-w-3xl mx-auto">
          Discover cutting-edge research and insights from our team of experts
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group border border-white/10"
              style={{ animationDelay: `${item * 0.1}s` }}
            >
              <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-white/20 to-white/10 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white/70 font-medium">Research Image {item}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Research Post {item}</h3>
              <p className="text-purple-100 mb-4 text-sm sm:text-base">
                Exploring innovative solutions and methodologies in our field of expertise.
              </p>
              <button className="text-purple-200 hover:text-white transition-colors duration-200 font-semibold group-hover:translate-x-1 transform transition-transform">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
