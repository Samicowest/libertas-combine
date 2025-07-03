import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MarketplaceHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Marketplace</span>
          </Link>
          <nav className="hidden md:ml-8 md:flex md:space-x-6">
            <Link to="/" className=" px-1 text-sm font-medium text-gray-900">
              Home
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-primary text-sm font-medium hover:underline"
          >
            Sign In
          </Link>
          <Button className="bg-primaryMarketplace hover:bg-primaryMarketplace/90">
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
