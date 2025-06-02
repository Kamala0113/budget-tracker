import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TransactionContextProvider } from "./context/Transactions.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionContextProvider>
      <App />
    </TransactionContextProvider>
  </StrictMode>
);
