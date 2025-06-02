import { createContext, useReducer, useContext } from "react";
import { transactionReducer } from '../reducers/transactionReducer';

export const TransactionContext = createContext({transactions:[], dispatch:()=>{}})

export function TransactionContextProvider({children}){
    const [transactions, dispatch] = useReducer(transactionReducer, []);

      const contextValue = {
        transactions,
        dispatch
      };

    return <TransactionContext value={contextValue}>{children}</TransactionContext>

}

export const useTransactions = () => useContext(TransactionContext);