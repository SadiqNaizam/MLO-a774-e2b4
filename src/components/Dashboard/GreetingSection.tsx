import React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface GreetingSectionProps {
  userName: string;
  className?: string;
}

const GreetingSection: React.FC<GreetingSectionProps> = ({ userName, className }) => {
  const currentDate = format(new Date(), "d MMMM yyyy"); // e.g., 11 June 2025

  return (
    <div className={cn("py-4", className)}>
      <h1 className="text-4xl font-bold text-primaryText">
        Welcome back, {userName}!
      </h1>
      <p className="text-md text-secondaryText mt-2">
        Here's your financial overview for today, {currentDate}.
      </p>
    </div>
  );
};

export default GreetingSection;
