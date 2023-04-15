import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/http";
import ChartEl from "@/components/chartEl";
import styles from "@/styles/pages/crypto.module.scss";

export default function cryptoId() {
  const router = useRouter();
  const { name } = router.query;

  const [singleCryptoData, setSingleCryptoData] = useState([]);
  const [cryptoDetails, setCryptoDetails] = useState({});

  useEffect(() => {
    GET(
      `${JSON.parse(
        localStorage.getItem("crytoID")
      )}/market_chart?vs_currency=eur&days=7&interval=daily`
    ).then((data) => {
      // console.log(data);
      setSingleCryptoData(data.prices);
    });
    GET(`${JSON.parse(localStorage.getItem("crytoID"))}`).then(
      // (data) => console.log(data)
      (data) => setCryptoDetails(() => data)
    );
  }, []);

  return (
    <div className={styles.Main}>
      <Layout>
        <div className={styles.title}>
          <h1> {name}</h1>
          <img
            className={styles.image}
            src={
              cryptoDetails.image
                ? cryptoDetails.image.large
                : cryptoDetails.symbol
            }
            alt={singleCryptoData.id}
          />
        </div>
        <div className={styles.chartArea}>
          <ChartEl prices={singleCryptoData} />
        </div>

        <div className={styles.details}>
          <div className={styles.info}>
            <div className={styles.pricesInfo}>
              <div className={styles.singlePrice}>
                <p className={styles.infoName}>Actual price: </p>
                <p
                  className={
                    cryptoDetails.market_data
                      ? cryptoDetails.market_data.price_change_percentage_24h >
                        0
                        ? styles.infoDigitPos
                        : styles.infoDigitNeg
                      : styles.infoDigit
                  }
                >
                  €
                  {cryptoDetails.market_data
                    ? cryptoDetails.market_data.current_price.eur
                    : null}
                </p>
              </div>
              <div className={styles.singlePrice}>
                <p className={styles.infoName}>Price variation: </p>
                <p
                  className={
                    cryptoDetails.market_data
                      ? cryptoDetails.market_data.price_change_percentage_24h >
                        0
                        ? styles.infoDigitPos
                        : styles.infoDigitNeg
                      : styles.infoDigit
                  }
                >
                  {cryptoDetails.market_data
                    ? cryptoDetails.market_data.price_change_percentage_24h.toFixed(
                        2
                      )
                    : null}
                  %
                </p>
              </div>
              <div className={styles.singlePrice}>
                <p className={styles.infoName}>Lowest price: </p>
                <p className={styles.infoDigitNeg}>
                  €
                  {cryptoDetails.market_data
                    ? cryptoDetails.market_data.low_24h.eur
                    : null}
                </p>
              </div>
              <div className={styles.singlePrice}>
                <p className={styles.infoName}>Highest price: </p>
                <p className={styles.infoDigitPos}>
                  €
                  {cryptoDetails.market_data
                    ? cryptoDetails.market_data.high_24h.eur
                    : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
