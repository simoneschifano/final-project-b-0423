import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/http";
import ChartEl from "@/components/chartEl";
import styles from "@/styles/pages/crypto.module.scss";
import { cryptoJson } from "./api/crypto";
import Button from "@/components/button";
import GlobalModal from "@/components/global_modal";
import React from "react";

import { MdStars } from "react-icons/md";

export default function cryptoId() {
  const router = useRouter();
  const { name } = router.query;
  const [singleCryptoData, setSingleCryptoData] = useState([]);
  const [isGlobalModal, setIsGlobalModal] = useState(false);

  if (typeof window !== "undefined") {
    if (localStorage.getItem("watchlist")) {
      null;
    } else {
      localStorage.setItem("watchlist", "[]");
    }
  }

  const [watchlist, setWatchlist] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("watchlist"))
      : []
  );

  React.useEffect(() => {
    if (router.isReady) {
      GET(`${name}/market_chart?vs_currency=eur&days=7&interval=daily`).then(
        (data) => setSingleCryptoData(data.prices)
      );
    }
  }, [router.isReady]);
  console.log(cryptoJson);
  const onHandleOpenModal = () => {
    setIsGlobalModal((prev) => !prev);
  };

  const onHandleStar = () => {
    if (typeof window !== "undefined") {
      if (watchlist) {
        console.log(localStorage.getItem("watchlist"));
        if (!!watchlist.find((item) => item === name)) {
          alert("Questa crypto è già presente nella watchlist.");
          return;
        } else {
          alert("Crypto aggiunta alla watchlist con successo!");
          localStorage.setItem(
            "watchlist",
            JSON.stringify([...watchlist, name])
          );
        }
      }
    }
  };

  return (
    <>
      <Layout>
        <div className={styles.header}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h2> {cryptoJson.market_cap_rank}</h2>
              <img
                className={styles.image}
                src={cryptoJson.image}
                alt={cryptoJson.id}
              />
              <h2> {name}</h2>
              <MdStars onClick={onHandleStar} className={styles.star} />
            </div>
            <div className={styles.col}>
              <Button
                text="buy"
                className={styles.btn}
                func={onHandleOpenModal}
              />
            </div>
          </div>
        </div>
        <div className={styles.chartArea}>
          <ChartEl prices={singleCryptoData} />
        </div>

        <div className={styles.info}>
          <div className={styles.price}>
            <div className={styles.priceDettails}>
              <h3 className={styles.priceValue}>
                <span>Price: </span> €{cryptoJson.current_price}
              </h3>
              <h6
                className={
                  cryptoJson.price_change_percentage_24h > 0
                    ? styles.positiveVar
                    : styles.negativeVar
                }
              >
                {cryptoJson.price_change_percentage_24h}
              </h6>
            </div>

            <div className={styles.HLprice}>
              <h6>Low: €{cryptoJson.low_24h}</h6>
              <h6>Hight: €{cryptoJson.high_24h}</h6>
            </div>
          </div>

          <div className={styles.supply}>
            <h6> Circulating supply: {cryptoJson.circulating_supply}</h6>
            <h6> Total supply: {cryptoJson.total_supply}</h6>
          </div>

          <div className={styles.marketCap}>
            <h6> Market Cap: €{cryptoJson.market_cap}</h6>
          </div>
        </div>

        {isGlobalModal && (
          <GlobalModal
            icon={cryptoJson.image}
            price={cryptoJson.current_price}
            id={cryptoJson.id}
          />
        )}
      </Layout>
    </>
  );
}
