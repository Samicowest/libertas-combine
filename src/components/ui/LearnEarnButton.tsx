
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface LearnEarnButtonProps {
  className?: string;
}

const LearnEarnButton = ({ className }: LearnEarnButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    console.log('Navigating to Learn to Earn program...');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-red-400 to-orange-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2",
        className
      )}
    >
      <span className="text-base">🎓</span>
      Learn to Earn
      {isClicked && (
        <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-white/30 rounded-full animate-ripple -translate-x-1/2 -translate-y-1/2"></span>
      )}
    </button>
  );
};

export default LearnEarnButton;
