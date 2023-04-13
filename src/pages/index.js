import Head from "next/head";
import Layout from "@/components/layout";
import styles from "@/styles/pages/Home.module.scss";
import CardsList from "@/components/cards_list";

export default function Home({ data }) {
  const mode = "bg_dark";
  return (
    <>
      <Head>
        <title>Crypie - Cripto Wallet</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mode}>
        <Layout>
          <CardsList data={data} />
        </Layout>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
