import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useReducer } from "react";
import { Context } from "@/store";
import { initialState } from "@/store/state";
import { mainReducer } from "@/store/reducers";
import { GET } from "@/utils/http";
import { AppWrapper } from "@/store/wrapper";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [allCrypto, setAllCrypto] = useState([]);

  return (
    <AppWrapper value={(state, dispatch)}>
      <Component {...pageProps} />
    </AppWrapper>
    // <Component {...pageProps} />
  );
}
