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
import { useNavigate } from "react-router-dom";

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
      <MarketplaceHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Affiliate Marketing Hub</h1>
          <p className="text-gray-600">
            Discover affiliate programs and marketing opportunities
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Available Programs
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {affiliatePrograms.length}
              </div>
              <p className="text-xs text-muted-foreground">Active programs</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Marketing Jobs
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{affiliateJobs.length}</div>
              <p className="text-xs text-muted-foreground">
                Available positions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Commission
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25%</div>
              <p className="text-xs text-muted-foreground">Average rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Earners</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5k+</div>
              <p className="text-xs text-muted-foreground">Monthly potential</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="programs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="programs">Affiliate Programs</TabsTrigger>
            <TabsTrigger value="jobs">Marketing Jobs</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search affiliate programs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="capitalize"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

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
                        <CardTitle className="text-lg">
                          {program.title}
                        </CardTitle>
                        <CardDescription>{program.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{program.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      {program.description}
                    </p>

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
                        <Badge
                          className={getDifficultyColor(program.difficulty)}
                        >
                          {program.difficulty}
                        </Badge>
                      </div>

                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Requirements:</span>
                        <p>{program.requirements.join(", ")}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Join Program</Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Affiliate Marketing Jobs</CardTitle>
                <CardDescription>
                  Job opportunities in affiliate and digital marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                {affiliateJobs.length > 0 ? (
                  <div className="space-y-6">
                    {affiliateJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      No affiliate marketing jobs available at the moment.
                    </p>
                    <Button onClick={() => navigate("/jobs")}>
                      Browse All Jobs
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started Guide</CardTitle>
                  <CardDescription>
                    Essential steps for affiliate marketing success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Choose your niche and target audience</li>
                    <li>• Build a website or blog</li>
                    <li>• Create valuable content</li>
                    <li>• Join relevant affiliate programs</li>
                    <li>• Track and optimize performance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Best Practices</CardTitle>
                  <CardDescription>
                    Tips for maximizing your affiliate earnings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Disclose affiliate relationships</li>
                    <li>• Focus on products you genuinely recommend</li>
                    <li>• Use multiple traffic sources</li>
                    <li>• Test different promotional strategies</li>
                    <li>• Build an email list</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketplaceAffiliate;
