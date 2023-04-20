import { useState, useEffect, useReducer, createContext } from "react";
import { mainReducer } from "./reducer/reducers";
// initial state
//const modeDataCheck = true;
const initialState = {
  cryptoListData: [],
};

const checkTheme = () => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem("theme");
    if (item === "LIGHT") {
      const initialState = {
        modeData: false,
      };
    } else {
      localStorage.setItem("theme", "DARK");
      const initialState = {
        modeData: true,
      };
    }
  }
};
checkTheme();

// create context
const Context = createContext({});

// combine reducer function

const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(mainReducer),
    initialState
  ); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
