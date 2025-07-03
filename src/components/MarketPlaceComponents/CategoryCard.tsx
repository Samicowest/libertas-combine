
import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
}

const CategoryCard = ({ icon, title, count }: CategoryCardProps) => {
  return (
    <div className="job-category">
      <div className="text-primary">{icon}</div>
      <div className="flex-grow">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{count} opportunities</p>
      </div>
    </div>
  );
};

export default CategoryCard;
