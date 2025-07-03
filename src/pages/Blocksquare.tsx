import { Hero } from "@/components/blocksquare-components/hero/Hero";
import { ProofProgress } from "@/components/blocksquare-components/proof-progress/ProofProgress";
import { DiscoverBlocksquare } from "@/components/blocksquare-components/discover/DiscoverBlocksquare";
import { GuessWhat } from "@/components/blocksquare-components/guess-what/GuessWhat";
import FaqSection from "@/components/blocksquare-components/FaqSection";
import FinalCtaSection from "@/components/blocksquare-components/FinalCtaSection";
import Footer from "@/components/blocksquare-components/Footer";
import Navigation from "@/components/blocksquare-components/navigation/Navigation";

const Blocksquare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <GuessWhat />
      <DiscoverBlocksquare />
      <ProofProgress />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Blocksquare;
