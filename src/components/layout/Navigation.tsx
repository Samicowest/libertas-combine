import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Research", id: "research" },
    { name: "Projects", id: "services" },
    { name: "Ventures", id: "ventures" },
    { name: "About", id: "about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        hasScrolled
          ? "bg-[#1a1b3a]/95 backdrop-blur-md shadow-lg border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <div className="overflow-hidden w-[200px] h-auto">
              <img
                className="object-cover w-full h-full"
                src={Logo}
                alt="logo"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              <Link
                to="/earn"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 relative group"
              >
                Earn
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
              <Link
                to="/market"
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 relative group"
              >
                Market
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1b3a]/95 backdrop-blur-md animate-fade-in border-b border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/earn"
              className="text-white hover:text-purple-300 hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Earn
            </Link>
            <Link
              to="/market"
              className="text-white hover:text-purple-300 hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Market
            </Link>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="text-white hover:text-purple-300 hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
