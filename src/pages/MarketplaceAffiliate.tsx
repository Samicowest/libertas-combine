import React, { useEffect, useState } from "react";

import { useJobs } from "@/context/JobContext";
import MarketplaceHeader from "@/components/MarketPlaceComponents/MarketplaceHeader";
import JobCard from "@/components/MarketPlaceComponents/JobCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Search,
  Filter,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Mock affiliate programs data
const affiliatePrograms = [
  {
    id: "1",
    title: "Amazon Associates",
    company: "Amazon",
    commission: "1-10%",
    category: "E-commerce",
    description: "Earn commissions by promoting Amazon products",
    minPayout: "$10",
    cookieDuration: "24 hours",
    rating: 4.5,
    requirements: ["Website/Blog", "Valid traffic"],
    difficulty: "Beginner",
  },
  {
    id: "2",
    title: "ClickBank Marketplace",
    company: "ClickBank",
    commission: "10-75%",
    category: "Digital Products",
    description: "Promote digital products and earn high commissions",
    minPayout: "$10",
    cookieDuration: "60 days",
    rating: 4.2,
    requirements: ["Marketing experience", "Social media presence"],
    difficulty: "Intermediate",
  },
  {
    id: "3",
    title: "Shopify Affiliate Program",
    company: "Shopify",
    commission: "$58-$2000",
    category: "SaaS",
    description: "Refer new merchants to Shopify",
    minPayout: "$25",
    cookieDuration: "30 days",
    rating: 4.7,
    requirements: ["Business audience", "Content creation"],
    difficulty: "Intermediate",
  },
  {
    id: "4",
    title: "HubSpot Affiliate",
    company: "HubSpot",
    commission: "15-30%",
    category: "Marketing Tools",
    description: "Promote HubSpot's marketing and sales software",
    minPayout: "$50",
    cookieDuration: "90 days",
    rating: 4.6,
    requirements: ["Marketing knowledge", "B2B audience"],
    difficulty: "Advanced",
  },
  {
    id: "5",
    title: "Coursera Partners",
    company: "Coursera",
    commission: "10-45%",
    category: "Education",
    description: "Earn by promoting online courses and specializations",
    minPayout: "$20",
    cookieDuration: "30 days",
    rating: 4.4,
    requirements: ["Educational content", "Student audience"],
    difficulty: "Beginner",
  },
];

const MarketplaceAffiliate = () => {
  const { jobs, getFilteredJobs } = useJobs();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter affiliate marketing jobs
  const affiliateJobs = jobs.filter((job) =>
    job.skills.some(
      (skill) =>
        skill.toLowerCase().includes("affiliate") ||
        skill.toLowerCase().includes("marketing") ||
        skill.toLowerCase().includes("digital marketing")
    )
  );

  // Filter programs based on search and category
  const filteredPrograms = affiliatePrograms.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...Array.from(new Set(affiliatePrograms.map((p) => p.category))),
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Affiliate Marketing
          </h2>
          <Link
            to="/"
            className="text-primaryMarketplace flex items-center text-sm font-medium hover:underline"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <div className="space-y-6">
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-primaryMarketplace">
                        {program.title}
                      </CardTitle>
                      <CardDescription>{program.company}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-primaryMarketplace"
                    >
                      {program.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-green-600">
                        Commission:
                      </span>
                      <p>{program.commission}</p>
                    </div>
                    <div>
                      <span className="font-medium">Min Payout:</span>
                      <p>{program.minPayout}</p>
                    </div>
                    <div>
                      <span className="font-medium">Cookie:</span>
                      <p>{program.cookieDuration}</p>
                    </div>
                    <div>
                      <span className="font-medium">Rating:</span>
                      <p>⭐ {program.rating}/5</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Difficulty:</span>
                      <Badge className={getDifficultyColor(program.difficulty)}>
                        {program.difficulty}
                      </Badge>
                    </div>

                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Requirements:</span>
                      <p>{program.requirements.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primaryMarketplace">
                      Join Program
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceAffiliate;
