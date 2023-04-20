import styles from "./index.module.scss";

import { useRouter } from "next/router";

const WalletCard = (props) => {
  const data = props;
  const coins = data.props;

  const router = useRouter();

  const onHandleOpenDetails = () => {
    localStorage.setItem("crytoID", JSON.stringify(coins.id));
    router.push({
      pathname: "crypto",
      query: { name: coins.id },
    });
  };

  return (
    <div onClick={onHandleOpenDetails} className={styles.WalletCard}>
      <span className={styles.inWallet}>In the wallet</span>
      <div className={styles.info}>
        <div className={styles.coin}>
          <img className={styles.image} src={coins.icon} alt={coins.id} />
          <h2 className={styles.id}>
            {coins.id ? coins.id.toUpperCase() : null}
          </h2>
        </div>
        <div className={styles.qty}>
          <span>Quantity:</span> <span>{coins.qty}</span>
        </div>
      </div>
      {/* <h3> Quantity: {coins.qty.toFixed(4)}</h3> */}
    </div>
  );
};

export default WalletCard;
