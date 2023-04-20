import { useState, useContext } from "react";
import Head from "next/head";
import CardsList from "@/components/cards_list";
import Layout from "@/components/layout";
import Loading from "@/components/loading";
import BtnFilter from "@/components/btnFilter";
import styles from "../styles/pages/allCrypto.module.scss";
import { Context } from "@/store";

export default function allCrypto() {
  const { state, dispatch } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <>
      <Head>
        <title>Crypie - Cripto allCrypto</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <Layout theme={state.modeData}>
          <div className={styles.allCryptoHead}>
            <h2> all Crypto </h2>

            <div className={styles.container}>
              <BtnFilter value="Sorting by Rank " setFilter={setFilter} />
            </div>
          </div>
          <div className={styles.AllCriptoCard}>
            {filter ? (
              loading ? (
                <Loading />
              ) : (
                <CardsList
                  data={state.cryptoListData.sort(
                    (a, b) => b.market_cap_rank - a.market_cap_rank
                  )}
                  inHomeActive={false}
                />
              )
            ) : loading ? (
              <Loading />
            ) : (
              <CardsList
                data={state.cryptoListData.sort(
                  (a, b) => a.market_cap_rank - b.market_cap_rank
                )}
                inHomeActive={false}
              />
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
