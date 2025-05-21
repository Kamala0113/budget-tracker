import {useState} from 'react';
import Balance from './components/Balance.jsx';
import IncomeExpense from './components/IncomeExpense.jsx';
import TransactionList from './components/TransactionList.jsx';
import AddTransaction from './components/AddTransaction.jsx'

function App() {
  const [transactions, setTransactions] = useState([]);
  

  const addTransaction = (newTransaction) => {
    

    setTransactions([newTransaction, ...transactions]);
    
  };

  const getIncome = () =>
    transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);

  const getExpense = () =>
    transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);

  const balance = (getIncome() + getExpense()).toFixed(2)
  const income = getIncome().toFixed(2)
  const expense = Math.abs(getExpense()).toFixed(2)

  return (
    <div className="min-h-screen w-full max-w-screen-2xl mx-auto bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Budget Tracker</h1>

      {/* Balance */}
      <Balance balance={balance} />

      {/* Income & Expense Summary */}
      <IncomeExpense income={income} expense={expense}/>

      {/* Add Transaction Form */}
      <AddTransaction addTransaction={addTransaction} />

       {/* Transaction List */}
       <TransactionList transactions={transactions}/>

    </div>
  );
}

export default App;
