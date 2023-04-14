import { useEffect, useState } from "react";
import Head from "next/head";
import CardsList from "@/components/cards_list";
import Layout from "@/components/layout";
import Loading from "@/components/loading";

export default function allCrypto() {
  const mode = "dark_mode";
  //manca l'altro useState e il setInterval per il caricamento
  const [allCrypto, setAllCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      process.env.NEXT_PUBLIC_API_URL +
        "markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((res) => res.json())
      .then((data) => setAllCrypto(data));
    setLoading(false);
  }, []);
  // console.log(allCrypto);
  return (
    <>
      <Head>
        <title>Crypie - Cripto allCrypto</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mode}>
        <Layout>
          <h2> allCrypto </h2>
          {loading ? <Loading /> : <CardsList data={allCrypto} />}
        </Layout>
      </main>
    </>
  );
}
