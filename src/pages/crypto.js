import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/http";
import ChartEl from "@/components/chartEl";
import styles from "@/styles/pages/crypto.module.scss";
import { cryptoJson } from "./api/crypto";

export default function cryptoId() {
  const router = useRouter();
  const { name } = router.query;

  const [singleCryptoData, setSingleCryptoData] = useState([]);

  useEffect(() => {
    GET(
      `${JSON.parse(
        localStorage.getItem("crytoID")
      )}/market_chart?vs_currency=eur&days=7&interval=daily`
    ).then((data) => setSingleCryptoData(data.prices));
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.title}>
          <h2> {name}</h2>
          <img
            className={styles.image}
            src={cryptoJson.image}
            alt={cryptoJson.id}
          />
        </div>
        <div className={styles.chartArea}>
          <ChartEl prices={singleCryptoData} />
        </div>

        <div className={styles.info}>
          <div className={styles.price}>
            <div className={styles.priceDettails}>
              <h3> Price: €{cryptoJson.current_price}</h3>
              <h6> %{cryptoJson.price_change_percentage_24h.toFixed(2)}</h6>
            </div>

            <div className={styles.HLprice}>
              <h6>Low: €{cryptoJson.low_24h}</h6>
              <h6>Hight: €{cryptoJson.high_24h}</h6>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
