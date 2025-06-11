import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import GreetingSection from '../components/Dashboard/GreetingSection';
import FundsOverviewCard from '../components/Dashboard/FundsOverviewCard';
import AccountDetailsCard from '../components/Dashboard/AccountDetailsCard';
import { CreditCard, PiggyBank, WalletCards } from 'lucide-react'; // Specific Lucide icons

// Define the structure for an account
interface Account {
  id: string;
  name: string;
  balance: number;
  icon: React.ElementType; // Type for Lucide icon components
  currencySymbol?: string; // Optional, defaults to '£' in AccountDetailsCard
}

// Dummy data for user accounts
// CRITICAL: Data defined directly in the component file as per requirements.
const DUMMY_ACCOUNTS_DATA: Account[] = [
  {
    id: 'acc-001',
    name: 'Everyday Current Account',
    balance: 12530.20,
    icon: WalletCards, // Using WalletCards for a more distinct current account icon
    currencySymbol: '£',
  },
  {
    id: 'acc-002',
    name: 'Super Saver Account',
    balance: 3250.30,
    icon: PiggyBank,
    currencySymbol: '£',
  },
  // Example of a third account for more variety
  {
    id: 'acc-003',
    name: 'Platinum Credit Card',
    balance: -450.75, // Negative balance for credit card
    icon: CreditCard,
    currencySymbol: '£',
  },
];

const IndexPage: React.FC = () => {
  const userName = "Sarah"; // User's name for greeting

  // Calculate total balance from all accounts
  const totalBalance = DUMMY_ACCOUNTS_DATA.reduce((sum, account) => sum + account.balance, 0);
  const accountCount = DUMMY_ACCOUNTS_DATA.length;

  const handleQuickTransfer = () => {
    // Placeholder for quick transfer functionality
    // In a real application, this would likely open a modal or navigate to a transfer page.
    console.log('Quick Transfer action initiated by user.');
  };

  return (
    <MainAppLayout>
      <GreetingSection userName={userName} />

      <FundsOverviewCard
        totalBalance={totalBalance}
        accountCount={accountCount}
        currencySymbol="£" // Explicitly passed, though '£' is default in component
        onQuickTransferClick={handleQuickTransfer}
      />

      {/* Section title for account list (optional, but good for structure) */}
      <h2 className="text-2xl font-semibold text-primaryText mt-4 mb-0">
        Your Accounts
      </h2>

      {/* List of AccountDetailsCard components */}
      {DUMMY_ACCOUNTS_DATA.map((account) => (
        <AccountDetailsCard
          key={account.id}
          accountName={account.name}
          balance={account.balance}
          currencySymbol={account.currencySymbol} // Pass symbol from data
          IconComponent={account.icon} // Pass the specific icon component
        />
      ))}
    </MainAppLayout>
  );
};

export default IndexPage;
