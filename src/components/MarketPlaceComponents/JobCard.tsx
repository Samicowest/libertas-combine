
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";

export interface JobType {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  daysRemaining: number;
  logo?: string;
  skills: string[];
  description: string;
}

interface JobCardProps {
  job: JobType;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="job-card flex flex-col md:flex-row gap-4">
      <div className="flex-shrink-0">
        {job.logo ? (
          <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 object-contain" />
        ) : (
          <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary font-bold">
            {job.company.charAt(0)}
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-medium">{job.title}</h3>
          <div className="flex items-center gap-2">
            <Badge variant={job.type === "Full Time" ? "default" : "outline"}>{job.type}</Badge>
            <button className="text-gray-400 hover:text-primary">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-y-2 text-sm text-gray-500 mb-3">
          <div className="w-full md:w-auto md:mr-4">{job.company}</div>
          <div className="w-full md:w-auto md:mr-4">{job.location}</div>
          <div className="w-full md:w-auto md:mr-4">{job.salary}</div>
          <div className="w-full md:w-auto text-primary">{job.daysRemaining} days remaining</div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="secondary">+{job.skills.length - 3} more</Badge>
          )}
        </div>
        
        <div className="flex justify-end mt-auto">
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
