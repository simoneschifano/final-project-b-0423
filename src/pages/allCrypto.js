import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import CardsList from "@/components/cards_list";
import Layout from "@/components/layout";
import Loading from "@/components/loading";
import BtnFilter from "@/components/btnFilter";
import styles from "../styles/pages/allCrypto.module.scss";
import { Context } from "@/store";
import { BsSearch } from "react-icons/bs";

export default function allCrypto() {
  const { state, dispatch } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [filteredCrypto, setFilteredCrypto] = useState(state.cryptoListData);

  useEffect(() => {
    dispatch({ type: "SELECTED_ICON", payload: "allCrypto" });
  }, []);

  const onHandleChange = (e) => {
    setNameFilter(() => e.target.value);
  };

  useEffect(() => {
    setFilteredCrypto(
      state.cryptoListData.filter((item) =>
        item.id.toLowerCase().includes(nameFilter.toLocaleLowerCase())
      )
    );
  }, [nameFilter]);

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
              <div className={styles.search}>
                <BsSearch className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search a crypto..."
                  onChange={onHandleChange}
                />
              </div>
              <BtnFilter value="Sorting by Rank " setFilter={setFilter} />
            </div>
          </div>
          <div className={styles.AllCriptoCard}>
            {filter ? (
              loading ? (
                <Loading />
              ) : filteredCrypto.length > 0 ? (
                <CardsList
                  data={filteredCrypto.sort(
                    (a, b) => b.market_cap_rank - a.market_cap_rank
                  )}
                  inHomeActive={false}
                />
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
            ) : filteredCrypto.length > 0 ? (
              <CardsList
                data={filteredCrypto.sort(
                  (a, b) => a.market_cap_rank - b.market_cap_rank
                )}
                inHomeActive={false}
              />
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
