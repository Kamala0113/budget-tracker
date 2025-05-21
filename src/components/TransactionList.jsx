export default function TransactionList({ transactions }) {

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
                <span
                  className={t.amount >= 0 ? "text-green-600" : "text-red-600"}
                >
                  ₹{t.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
