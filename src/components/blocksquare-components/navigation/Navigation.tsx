import { Button } from "@/components/ui/button";
import Logo from "/logo.png";
import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`fixed w-full px-4 py-3 flex justify-center items-center z-50 shadow-md transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${hasScrolled ? "bg-[#00d2be]" : "bg-transparent"}`}
    >
      <div className="w-full max-w-6xl flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          <div className="overflow-hidden w-[200px] h-auto">
            <img className="object-cover w-full h-full" src={Logo} alt="logo" />
          </div>
        </a>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Learn to Earn
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
