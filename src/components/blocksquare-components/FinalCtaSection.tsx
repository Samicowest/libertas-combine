import { Button } from "@/components/ui/button";
import LearnEarnButton from "@/components/ui/LearnEarnButton";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import { useState } from "react";

const FinalCtaSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    console.log("Navigating to properties page...");
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-blocksquare-blue to-blocksquare-darkBlue text-white text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='20' cy='20' r='2' fill='rgba(255,255,255,0.1)'/><circle cx='80' cy='30' r='1.5' fill='rgba(255,255,255,0.1)'/><circle cx='60' cy='70' r='2.5' fill='rgba(255,255,255,0.1)'/><circle cx='30' cy='80' r='1' fill='rgba(255,255,255,0.1)'/></svg>")`,
        }}
      ></div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10">
        <ScrollAnimationWrapper>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-10">
            Don't Just Dream of Wealth. Build It.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
            <a
              href="https://marketplace.oceanpoint.fi/oceanpoint/auth/sign-up?referralCode=4684081497c715e0a69ef3447b34631f1aee50001b966c374528e468f50b4000"
              className="relative overflow-hidden text-blocksquare-blue bg-slate-200  hover:bg-slate-400  px-4 py-2 md:px-6 md:py-3  rounded-lg font-montserrat font-semibold text-md md:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Explore Properties Now!
              {isClicked && (
                <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-white/30 rounded-full animate-ripple -translate-x-1/2 -translate-y-1/2"></span>
              )}
            </a>

            <LearnEarnButton />
          </div>

          <a
            href="#"
            className="text-blocksquare-lightBlue hover:text-white transition-colors duration-300 text-sm underline-offset-4 hover:underline"
          >
            Learn How Real Estate Tokenization Works
          </a>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default FinalCtaSection;
