import { useState } from "react";
export default function AddTransaction({
  addTransaction
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction)
    setDescription("");
    setAmount("");
  };
  const isAddDisable = description.trim() && amount.trim()
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
