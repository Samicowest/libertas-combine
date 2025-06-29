import React from "react";
import { CheckCircle } from "lucide-react";
import Img1 from "/aboutus.png";
const AboutSection = () => {
  const features = [
    "Analytical corporate media",
    "Personnel management",
    "Physical Development",
    "Rapid financing and analytics",
    "Security & Risk",
    "Technology and data",
    "Alternative programming solutions",
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-gradient-to-tl from-blue-100 to-purple-100 rounded-full opacity-20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our human ability are based on potential for engineering, human
              resources, and analytics. Our agenda is to believe it requires a
              social culture for risk management and technical compliance to
              enable a social culture. We manage the ability of many companies.
            </p>

            <div className="space-y-3 lg:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-[#1a1b3a] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#1a1b3a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-500/25">
              Read More
            </button>
          </div>

          <div className="relative lg:order-last">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-xl group">
              <div className="bg-white p-4 sm:p-6 rounded-lg">
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={Img1}
                    alt="about us"
                    className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
