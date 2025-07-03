import React, { createContext, useContext, useState } from "react";
import { JobType } from "@/components/MarketPlaceComponents/JobCard";

interface JobContextType {
  jobs: JobType[];
  addJob: (job: Omit<JobType, "id">) => void;
  getFilteredJobs: (skills: string[]) => JobType[];
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Mock initial jobs
const initialJobs: JobType[] = [
  {
    id: "1",
    title: "Senior UX Designer",
    company: "Dribbble",
    location: "Remote",
    salary: "$70k-$90k",
    type: "Full Time",
    daysRemaining: 4,
    skills: ["UI/UX", "Figma", "Adobe XD", "User Research"],
    description:
      "We are looking for a Senior UX Designer to join our team and help create amazing user experiences.",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$120k-$150k",
    type: "Full Time",
    daysRemaining: 7,
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS"],
    description:
      "Join our team to build and maintain our web applications using React and TypeScript.",
  },
  {
    id: "3",
    title: "Affiliate Marketing Manager",
    company: "Amazon",
    location: "Remote",
    salary: "$80k-$100k",
    type: "Full Time",
    daysRemaining: 5,
    skills: [
      "Affiliate Marketing",
      "SEO",
      "Digital Marketing",
      "Content Strategy",
    ],
    description:
      "Help manage our affiliate marketing programs and increase our reach.",
  },
  {
    id: "4",
    title: "Web Developer",
    company: "Facebook",
    location: "Menlo Park, CA",
    salary: "$100k-$130k",
    type: "Full Time",
    daysRemaining: 3,
    skills: ["Web Development", "JavaScript", "React", "Node.js"],
    description: "Build and maintain web applications for our platform.",
  },
  {
    id: "5",
    title: "Marketing Assistant",
    company: "Twitter",
    location: "Remote",
    salary: "$50k-$65k",
    type: "Part Time",
    daysRemaining: 6,
    skills: ["Digital Marketing", "Social Media", "Content Creation"],
    description:
      "Assist our marketing team with social media management and content creation.",
  },
];

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [jobs, setJobs] = useState<JobType[]>(initialJobs);

  const addJob = (job: Omit<JobType, "id">) => {
    const newJob = {
      ...job,
      id: (jobs.length + 1).toString(),
    };
    setJobs([...jobs, newJob]);
  };

  const getFilteredJobs = (userSkills: string[]): JobType[] => {
    // If no skills, return all jobs
    if (!userSkills || userSkills.length === 0) {
      return jobs;
    }

    // Filter jobs based on at least one matching skill
    return jobs.filter((job) =>
      job.skills.some((skill) =>
        userSkills.some(
          (userSkill) =>
            skill.toLowerCase().includes(userSkill.toLowerCase()) ||
            userSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, getFilteredJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
