import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react'; // Default icon

interface AccountDetailsCardProps {
  accountName: string;
  balance: number;
  currencySymbol?: string;
  IconComponent?: React.ElementType; // Allow passing specific Lucide icon component
  className?: string;
}

const AccountDetailsCard: React.FC<AccountDetailsCardProps> = ({
  accountName,
  balance,
  currencySymbol = '£',
  IconComponent = CreditCard, // Default to CreditCard
  className,
}) => {
  const displayBalance = `${currencySymbol}${balance.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <Card className={cn(
      "w-full bg-card text-card-foreground", 
      className
    )}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2 pt-4 px-4 sm:px-6">
        <CardTitle className="text-lg font-semibold text-primaryText">
          {accountName}
        </CardTitle>
        <IconComponent className="h-6 w-6 text-primary" />
      </CardHeader>
      <CardContent className="pt-0 pb-4 px-4 sm:px-6">
        <div className="text-3xl font-bold text-primaryText">
          {displayBalance}
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountDetailsCard;
