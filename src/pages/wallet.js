import Head from "next/head";
import Layout from "@/components/layout";
import CakeChart from "@/components/cakeChart";
import WalletList from "@/components/walletList";
import styles from "@/styles/pages/wallet.module.scss";
import { summArrayValues } from "@/utils/func";
import { useState, useEffect, useContext } from "react";
import { Context } from "@/store";

export default function Wallet() {
  const [walletInLocalStorage, setWalletInLocalStorage] = useState();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: "SELECTED_ICON", payload: "wallet" });
  }, []);

  useEffect(() => {
    const Storage =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("wallet"))
        : [];
    setWalletInLocalStorage(Storage);
  }, []);

  let value = 0;
  const cakePercentualArray = walletInLocalStorage?.map(
    (item) => (value = item.qty * item.price)
  );

  return (
    <>
      <Head>
        <title>Crypie - Cripto Wallet</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.Main}>
        <Layout>
          <div className={styles.Content}>
            <h2 className={styles.title}> MY WALLET STATUS</h2>

            {walletInLocalStorage ? (
              <>
                <div className={styles.chartArea}>
                  <CakeChart
                    cakePercentualArray={cakePercentualArray}
                    chartData={walletInLocalStorage}
                  />
                  <h3 className={styles.walletValue}>
                    WALLET VALUE: €
                    {summArrayValues(cakePercentualArray).toFixed(2)}
                  </h3>
                </div>

                <div className={styles.walletList}>
                  <h2> Crypto </h2>
                  <WalletList data={walletInLocalStorage} />
                </div>
              </>
            ) : (
              <h5>Buy a crypto, it will be showed here</h5>
            )}
          </div>
        </Layout>
      </main>
    </>
  );
}
