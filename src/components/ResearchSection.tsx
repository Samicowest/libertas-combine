
import React from 'react';

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Latest Research Posts</h2>
        <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
          Discover cutting-edge research and insights from our team of experts
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-full h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white/70">Research Image {item}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Research Post {item}</h3>
              <p className="text-purple-100 mb-4">
                Exploring innovative solutions and methodologies in our field of expertise.
              </p>
              <button className="text-purple-200 hover:text-white transition-colors duration-200 font-semibold">
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
