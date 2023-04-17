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

// import { createContext, useContext } from "react";
// import { initialState } from "./state";
// import { Context } from "./index";

// // const AppContext = createContext();

// export function AppWrapper({ children }) {
//   return <Context.Provider value={initialState}>{children}</Context.Provider>;
// }

// export function useAppContext() {
//   // return useContext(AppContext);
//   return useContext(Context);
// }
