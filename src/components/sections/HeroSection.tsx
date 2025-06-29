import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroSlides = [
    {
      title: "Congratulations you have found freedom",
      subtitle: `Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers" Article 19, universal declaration of human rights`,
      image: "/hero1.png",
    },
    {
      title: "We All Deserve Assets",
      subtitle: `Discover Research, platforms and communities for the development and access to Web Assets.`,
      image: "/hero2.png",
    },
    {
      title: "Spread the Word",
      subtitle: `Get Involved with Libertas Alpha directly: create value, become a partner in research and develop solutions.`,
      image: "/hero3.jpg",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#1a1b3a] via-[#2d1b69] to-[#1a1b3a] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-purple-400/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-400/10 rounded-full blur-md animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <Carousel className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full h-screen">
                <div
                  className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>
                </div>

                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="relative group">
                    <img
                      src={slide.image}
                      alt="Team collaboration"
                      className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-xl"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
