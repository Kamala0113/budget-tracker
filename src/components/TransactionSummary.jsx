import React from 'react';
import { useTransactions } from '../context/Transactions.jsx';
import Balance from './Balance.jsx';
import IncomeExpense from './IncomeExpense.jsx';

const TransactionSummary = () => {
  const { transactions } = useTransactions();

  const amounts = transactions.map((t) => t.amount);
  const income = amounts.filter((amt) => amt > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter((amt) => amt < 0).reduce((acc, val) => acc + val, 0);
  const balance = income + expense;

  return (
    <div className="w-full max-w-md">
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={Math.abs(expense)} />
    </div>
  );
};

export default TransactionSummary;
