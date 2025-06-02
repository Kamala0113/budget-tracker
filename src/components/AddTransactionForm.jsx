import { useState } from "react";
import { useTransactions } from "../context/Transactions.jsx";
export default function AddTransactionForm() {
  const { dispatch } = useTransactions();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  ); // Default: today

  const categories = [
    "Groceries",
    "Utilities",
    "Rent",
    "Salary",
    "Transportation",
    "Healthcare",
    "Entertainment",
    "Other",
  ];

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
      date, // ISO date string (YYYY-MM-DD)
    };
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
    setDescription("");
    setAmount("");
    setCategory("Other");
    setDate(new Date().toISOString().split("T")[0]);
  };
  const isAddDisable = description.trim() && amount.trim();
  return (
    <div className="bg-white shadow rounded p-4 w-full max-w-md">
      <h3 className="font-semibold mb-2">Add Transaction</h3>
      <form className="space-y-2" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          className="w-full border rounded px-2 py-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (use - for expenses)"
          className="w-full border rounded px-2 py-1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="mb-3">
          <label className="block text-sm font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-1 rounded"
          disabled={!isAddDisable}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
