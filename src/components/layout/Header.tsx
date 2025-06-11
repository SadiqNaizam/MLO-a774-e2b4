import React from 'react';
import { Landmark, Menu as MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
  onMenuToggleClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onMenuToggleClick }) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-card px-6",
        className
      )}
    >
      <a href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md" aria-label="AuraBank Home">
        <Landmark className="h-7 w-7 text-primary" />
        <span className="text-xl font-bold text-primary">AuraBank</span>
      </a>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuToggleClick}
        aria-label="Toggle navigation menu"
        className="text-primaryText"
      >
        <MenuIcon className="h-6 w-6" />
      </Button>
    </header>
  );
};

export default Header;
