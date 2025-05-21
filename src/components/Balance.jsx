export default function Balance({ balance }) {
  return (
    <div className="bg-white shadow rounded p-4 w-full max-w-md mb-4">
      <h2 className="text-xl font-semibold">Your Balance</h2>
      <p className="text-2xl mt-2">₹{balance}</p>
    </div>
  );
}
