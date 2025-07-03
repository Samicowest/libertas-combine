import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior UX Designer",
    company: "Upwork",
    location: "Australia",
    salary: "$70k-$90k",
    type: "Full Time",
    contract: "Contract Rate",
    daysRemaining: 5,
    logo: "U",
    logoColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Apple",
    location: "China",
    salary: "$100K-$150K",
    type: "Full Time",
    daysRemaining: 4,
    logo: "A",
    logoColor: "bg-gray-800",
  },
  {
    id: 3,
    title: "Junior Graphic Designer",
    company: "Figma",
    location: "Canada",
    salary: "$50K-$70K",
    type: "Full Time",
    daysRemaining: 3,
    logo: "F",
    logoColor: "bg-purple-500",
  },
  {
    id: 4,
    title: "Product Designer",
    company: "United States",
    location: "United States",
    salary: "$110K-$140K",
    type: "Full Time",
    daysRemaining: 4,
    logo: "P",
    logoColor: "bg-red-500",
  },
  {
    id: 5,
    title: "Marketing Officer",
    company: "Germany",
    location: "Germany",
    salary: "$50K-$60K",
    type: "Internship",
    daysRemaining: 4,
    logo: "M",
    logoColor: "bg-blue-500",
  },
  {
    id: 6,
    title: "Interaction Designer",
    company: "Google",
    location: "France",
    salary: "$80K-$100K",
    type: "Full Time",
    daysRemaining: 4,
    logo: "G",
    logoColor: "bg-gray-200",
  },
];

const MarketplaceFeaturedJobs = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured jobs</h2>
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

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 ${job.logoColor} rounded-md flex items-center justify-center text-white font-bold`}
                  >
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{job.title}</h3>
                    {job.contract && (
                      <span className="text-xs text-primaryMarketplace font-medium">
                        {job.contract}
                      </span>
                    )}
                    <div className="flex space-x-3 text-sm text-gray-500 mt-1">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.salary}</span>
                      <span>•</span>
                      <span className="text-gray-400">
                        {job.daysRemaining} Days remaining
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-primaryMarketplace">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                  <Link to={`/apply/${job.id}`}>
                    <Button
                      variant="outline"
                      className="border-primaryMarketplace text-primaryMarketplace hover:bg-primaryMarketplace hover:text-white"
                    >
                      Apply Now
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
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFeaturedJobs;
