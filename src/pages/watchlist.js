import Head from "next/head";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import CardsList from "@/components/cards_list";
import { cryptoJson } from "./api/crypto";

export default function watchlist() {
  const mode = "dark_mode";
  // const [coin, setCoin] = useState("");
  // const [allCrypto, setAllCrypto] = useState([]);

  // useEffect(() => {
  //   const storedName = JSON.parse(localStorage.getItem("watchlist"));
  //   if (storedName) {
  //     setCoin(storedName);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetch(
  //     process.env.NEXT_PUBLIC_API_URL +
  //       "markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setAllCrypto(data));
  // }, []);

  // let stars=[];
  // const GetCoins=() => {
  //   const stars=[];
  //   if (coin && allCrypto){coin.forEach(item => {
  //     console.log(allCrypto.includes(e=>e.id===item))

  //   })}
  //   return(
  //     <div>pippo</div>
  //   )
  // }

  return (
    <>
      <Head>
        <title>Crypie - Cripto watchlist</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mode}>
        <Layout>
          <h2> watchlist </h2>
          <div>
            {GetCoins()}
            <CardsList data={allCrypto} />
          </div>
        </Layout>
      </main>
    </>
  );
}
