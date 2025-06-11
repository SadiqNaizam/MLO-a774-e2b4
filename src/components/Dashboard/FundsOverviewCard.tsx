import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, DollarSign } from 'lucide-react';

interface FundsOverviewCardProps {
  totalBalance: number;
  currencySymbol?: string;
  accountCount: number;
  onQuickTransferClick?: () => void;
  className?: string;
}

const FundsOverviewCard: React.FC<FundsOverviewCardProps> = ({
  totalBalance,
  currencySymbol = '£',
  accountCount,
  onQuickTransferClick,
  className,
}) => {
  const displayBalance = `${currencySymbol}${totalBalance.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <Card className={cn(
      "w-full bg-primary text-primary-foreground shadow-lg",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-4 px-4 sm:px-6">
        <CardTitle className="text-lg font-semibold text-primary-foreground">
          Total Available Funds
        </CardTitle>
        <DollarSign className="h-6 w-6 text-primary-foreground/80" />
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-4 pt-0 space-y-3">
        <div className="text-5xl font-bold text-primary-foreground">
          {displayBalance}
        </div>
        <p className="text-sm text-primary-foreground/90">
          Across {accountCount} {accountCount === 1 ? 'account' : 'accounts'}
        </p>
        <Button
          variant="default" 
          className="w-full bg-card text-primary hover:bg-card/90 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:ring-white py-3 text-base font-medium"
          onClick={onQuickTransferClick || (() => console.log('Quick Transfer clicked'))}
        >
          <ArrowRightLeft className="mr-2 h-5 w-5" />
          Quick Transfer
        </Button>
      </CardContent>
    </Card>
  );
};

export default FundsOverviewCard;
