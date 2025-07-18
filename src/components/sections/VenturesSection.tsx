import React from "react";
import { ExternalLink } from "lucide-react";
import Venture1 from "/venture1.png";
import Venture2 from "/venture2.png";
import Venture3 from "/venture3.png";
const ventures = [
  {
    id: "1",
    name: "Micro Ventures Initiative ",
    industry: "Technology",
    companyId: "283h9hf",
    description:
      "Specialists in Micro Systems for social impact and sustainable revenue through Tokenization.",
    employeeCount: 5,
    location: "Imo State, Nigeria",
    imageUrl: Venture1,
    link: "https://medium.com/@libertasalpha_10290/introducing-micro-venture-initiative-mvi-tokenizing-sustainable-social-impact-72f9b67069bd",
  },
  {
    id: "2",
    name: "Libertas Estate ",
    industry: "Real Estate",
    companyId: "143h9hf",
    description:
      "Tokenizing Agricultural Real-estate for borderless investment and capital liberation without Land ownership complexities",
    employeeCount: 8,
    location: "Imo State, Nigeria",
    imageUrl: Venture2,
    link: "https://medium.com/@libertasalpha_10290/blockchain-technology-in-agricultural-real-estate-a-framework-for-enhanced-liquidity-and-089b6cd04029",
  },
  {
    id: "3",
    name: "Tradex",
    industry: "Trading",
    companyId: "133h9ff",
    description:
      "Decentralized signal execution consensus for analysts and Libertas Alpha partners: bridging Liquidity and expertise.",
    employeeCount: 10,
    location: "Imo State, Nigeria",
    imageUrl: Venture3,
    link: "https://medium.com/@libertasalpha_10290/building-the-future-inside-libertas-alphas-vision-driven-ecosystem-ca0d5dbe3b6c",
  },
];

const VenturesSection = () => {
  // const ventures = [
  //   {
  //     name: "LIBERTA MV1",
  //     description:
  //       "Innovative blockchain initiative for decentralized applications and smart contracts.",
  //     category: "Blockchain",
  //   },
  //   {
  //     name: "Liberta Estate",
  //     description:
  //       "Real estate development focused on sustainable and eco-friendly properties.",
  //     category: "Real Estate",
  //   },
  //   {
  //     name: "Trader+",
  //     description:
  //       "Advanced trading platform with AI-powered analytics and market insights.",
  //     category: "Fintech",
  //   },
  // ];
  const ventures = [
    {
      id: "1",
      name: "Micro Ventures Initiative ",
      industry: "Technology",
      companyId: "283h9hf",
      description:
        "Specialists in Micro Systems for social impact and sustainable revenue through Tokenization.",
      employeeCount: 5,
      location: "Imo State, Nigeria",
      imageUrl: Venture1,
      link: "https://medium.com/@libertasalpha_10290/introducing-micro-venture-initiative-mvi-tokenizing-sustainable-social-impact-72f9b67069bd",
    },
    {
      id: "2",
      name: "Libertas Estate ",
      industry: "Real Estate",
      companyId: "143h9hf",
      description:
        "Tokenizing Agricultural Real-estate for borderless investment and capital liberation without Land ownership complexities",
      employeeCount: 8,
      location: "Imo State, Nigeria",
      imageUrl: Venture2,
      link: "https://medium.com/@libertasalpha_10290/blockchain-technology-in-agricultural-real-estate-a-framework-for-enhanced-liquidity-and-089b6cd04029",
    },
    {
      id: "3",
      name: "Tradex",
      industry: "Trading",
      companyId: "133h9ff",
      description:
        "Decentralized signal execution consensus for analysts and Libertas Alpha partners: bridging Liquidity and expertise.",
      employeeCount: 10,
      location: "Imo State, Nigeria",
      imageUrl: Venture3,
      link: "https://medium.com/@libertasalpha_10290/building-the-future-inside-libertas-alphas-vision-driven-ecosystem-ca0d5dbe3b6c",
    },
  ];

  return (
    <section
      id="ventures"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            VENTURES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore our innovative ventures and partnerships
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-transparent hover:border-purple-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-purple-100 via-blue-100 to-purple-100 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>

                <img
                  src={venture.imageUrl}
                  alt={`${venture.name} office`}
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {venture.name}
                  </h3>
                  <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {venture.industry}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {venture.description}
                </p>

                <button className="bg-gradient-to-r from-[#1a1b3a] to-[#2d1b69] hover:from-[#2d1b69] hover:to-[#1a1b3a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group-hover:shadow-xl shadow-purple-500/25">
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
