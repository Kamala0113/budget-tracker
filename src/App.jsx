import TransactionSummary from './components/TransactionSummary.jsx';
import TransactionList from './components/TransactionList.jsx';
import AddTransactionForm from './components/AddTransactionForm.jsx'

function App() {

  return (
    <div className="min-h-screen w-full max-w-screen-2xl mx-auto bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Budget Tracker</h1>

      <TransactionSummary />

      {/* Add Transaction Form */}
      <AddTransactionForm />

       {/* Transaction List */}
       <TransactionList />

    </div>
  );
}

export default App;
