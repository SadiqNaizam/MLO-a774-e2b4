import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header'; // Relative path for project components

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const handleMenuToggle = () => {
    // In a real application, this would typically manage the state of a sidebar or navigation drawer.
    // For example: setIsSidebarOpen(prevState => !prevState);
    // This console.log is for demonstration purposes.
    console.log("Menu toggle clicked. Navigation handling can be implemented here.");
  };

  return (
    <div className={cn("flex min-h-screen flex-col bg-background text-foreground", className)}>
      <Header onMenuToggleClick={handleMenuToggle} />
      <main className="flex-1"> {/* Ensures main content area fills available vertical space */}
        <div 
          className="mx-auto w-full max-w-screen-md p-6 flex flex-col gap-6"
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
