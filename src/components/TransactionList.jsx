import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal.jsx";
import { FaTrash } from "react-icons/fa";

export default function TransactionList({ transactions , deleteTransaction}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const openModal = (id) => {
    setTransactionToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTransactionToDelete(null);
  };

  const confirmDelete = () => {
    deleteTransaction(transactionToDelete)
    closeModal();
  };

  return (
    <div className="bg-white shadow rounded p-4 w-full max-w-md mb-4">
      {transactions.length === 0 ? (
        <h3 className="font-semibold mb-2">No Transactions Found</h3>
      ) : (
        <>
          <h3 className="font-semibold mb-2">Transactions</h3>
          <ul className="space-y-2">
            {transactions.map((t) => (
              <li key={t.id} className="flex justify-between text-sm py-2">
                <span className="capitalize">{t.description}</span>
                <div>
                  <span
                    className={
                      t.amount >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    ₹{t.amount.toFixed(2)}
                  </span>
                  <button
                    className="text-red-500 ml-4 hover:text-red-700"
                    onClick={() => openModal(t.id)}
                    title="Delete this transaction"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <ConfirmationModal
            isOpen={isModalOpen}
            onConfirm={confirmDelete}
            onCancel={closeModal}
            message="Are you sure you want to delete this transaction?"
          />
        </>
      )}
    </div>
  );
}
