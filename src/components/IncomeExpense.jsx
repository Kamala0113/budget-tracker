export default function IncomeExpense({ income, expense }) {
  return (
    <div className="bg-white shadow rounded p-4 w-full max-w-md flex justify-between mb-4">
      <div className="text-green-600">
        <h3>Income</h3>
        <p>₹{income}</p>
      </div>
      <div className="text-red-600">
        <h3>Expense</h3>
        <p>₹{expense}</p>
      </div>
    </div>
  );
}
