import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Zyre from "/team/zyre.jpeg";
import Samson from "/team/samson.jpeg";
import Nduka from "/team/nduka.jpg";
import Nwachukwu from "/team/nwachukwu.jpg";
import Gabe from "/team/gabe.jpeg";

interface dataType {
  image: string;
  name: string;
  role: string;
}

const teamMembers: dataType[] = [
  { image: Zyre, name: "Zyre", role: "Product Manager" },
  { image: Samson, name: "Ewuru Samson Uzoma", role: "Lead Web Developer" },

  {
    image: Nwachukwu,
    name: "Nwachukwu Victor",
    role: "Lead Designer and Public Relations",
  },
  { image: Gabe, name: "Jamike Gabeson", role: "Blocksquare Ambassador" },
  { image: Nduka, name: "Nduka Patience", role: "Language Translator" },
];
const TeamSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1a1b3a] via-[#2d1b69] to-[#1a1b3a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-24 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CONTRIBUTORS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-300">
            Meet our exceptional leadership team
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto z-40">
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-2 pt-4 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="text-center group h-full">
                  <div className="relative mb-6">
                    <div className=" w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 "></div>
                      <img
                        src={member.image}
                        alt={`${member.name} office`}
                        className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-300 blur-md"></div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 mb-3 text-sm sm:text-base font-semibold">
                    {member.role}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <button className="text-gray-400 hover:text-purple-400 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-white/10">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-purple-400 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-white/10">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 -left-12" />
          <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
