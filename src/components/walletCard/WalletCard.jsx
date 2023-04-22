import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const WalletCard = (props) => {
  const data = props;
  const coins = data.props;
  const [walletInlocalStorage, setWalletInlocalStorage] = useState(null);

  useEffect(() => {
    setWalletInlocalStorage(
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("wallet"))
        : []
    );
  }, []);

  let newLocalStorage = [];
  const onHandleSell = () => {
    newLocalStorage = walletInlocalStorage.filter(
      (crypto) => crypto.id !== coins.id
    );
    newLocalStorage.length > 0
      ? localStorage.setItem("wallet", JSON.stringify(newLocalStorage))
      : localStorage.removeItem("wallet");
  };

  return (
    <div className={styles.WalletCard}>
      <span className={styles.inWallet}>In the wallet</span>
      <div className={styles.info}>
        <div className={styles.coin}>
          <img className={styles.image} src={coins.icon} alt={coins.id} />
          <h2 className={styles.id}>
            {coins.id ? coins.id.toUpperCase() : null}
          </h2>
        </div>
        <div className={styles.qty}>
          <span>OWNED:</span> <span>{coins.qty}</span>
        </div>
        <button onClick={onHandleSell} className={styles.sell}>
          SELL
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
