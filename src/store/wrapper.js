import { createContext, useContext } from "react";
import { initialState } from "./state";

const AppContext = createContext();

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
