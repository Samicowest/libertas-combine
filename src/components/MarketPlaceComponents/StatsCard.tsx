
import React from "react";

interface StatsCardProps {
  icon: React.ReactNode;
  count: string;
  label: string;
}

const StatsCard = ({ icon, count, label }: StatsCardProps) => {
  return (
    <div className="stats-card">
      <div className="text-primary mb-2">{icon}</div>
      <div className="text-lg font-bold">{count}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

export default StatsCard;
