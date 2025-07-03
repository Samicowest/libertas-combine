import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MarketplaceHeroSection = () => {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find a job that suits
              <br />
              your interest & skills
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">
              Discover thousands of job opportunities with all the information
              you need. Start your journey to a better career today.
            </p>

            <Button className="mt-4 bg-primaryMarketplace hover:bg-primaryMarketplace/90 text-white px-8">
              Find Job
            </Button>

            <div className="mt-4 text-sm text-gray-500">
              <span className="font-medium">Suggestions:</span>{" "}
              <span className="text-gray-600">
                Designer, Programming, Digital Marketing, Video, Animation
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/hero1.jpg"
              alt="Job Search Illustration"
              className="max-h-96 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHeroSection;
