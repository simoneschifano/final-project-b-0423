import styles from "./index.module.scss";

import { useRouter } from "next/router";

const WalletCard = (props) => {
  const data = props;
  const coins = data.props;

  return (
    <div className={styles.WalletCard}>
      <div className={styles.info}>
        <div className={styles.coin}>
          <img className={styles.image} src={coins.image} alt={coins.id} />
          <h1 className={styles.symbol}>{coins.symbol.toUpperCase()}</h1>{" "}
        </div>
        <div className={styles.qty}>
          <h3> Quantity: 2</h3>
        </div>
      </div>
      {/* <h3> Quantity: {coins.qty.toFixed(4)}</h3> */}
    </div>
  );
};

export default WalletCard;
