import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import { Context } from "@/store";
import { initialState } from "@/store/state";
import { mainReducer } from "@/store/reducers";
import { GET } from "@/utils/http";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [allCrypto, setAllCrypto] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     process.env.NEXT_PUBLIC_API_URL +
  //       "markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => localStorage.setItem("cryptos", JSON.stringify(data)));

  //   dispatch({ type: "SET_CRYPTO_LIST", payload: allCrypto });
  // }, []);

  return (
    // <AppWrapper>
    //   <Component {...pageProps} />
    // </AppWrapper>
    <Component {...pageProps} />
  );
}
