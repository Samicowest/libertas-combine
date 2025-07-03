import React from "react";
import MarketplaceHeader from "@/components/MarketPlaceComponents/MarketplaceHeader";
import MarketplaceHeroSection from "@/components/MarketPlaceComponents/MarketplaceHeroSection";
import MarketplaceStatsSection from "@/components/MarketPlaceComponents/MarketplaceStatsSection";
import MarketplaceFeaturedJobs from "@/components/MarketPlaceComponents/MarketplaceFeaturedJobs";
import MarketplaceFooter from "@/components/MarketPlaceComponents/MarketplaceFooter";
import MarketplaceAffiliate from "./MarketplaceAffiliate";

const MarketPlace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketplaceHeader />
      <main className="flex-grow">
        <MarketplaceHeroSection />
        <MarketplaceFeaturedJobs />
        <MarketplaceAffiliate />
      </main>
      <MarketplaceFooter />
    </div>
  );
};

export default MarketPlace;
