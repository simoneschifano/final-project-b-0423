import styles from "./index.module.scss";

import { MdStars } from "react-icons/md";
import { useRouter } from "next/router";

const Card = (props) => {
  const data = props;
  const coins = data.props;

  const router = useRouter();

  const onHandleOpenDetails = () => {
    router.push(`crypto/${coins.id}`);
  };

  return (
    <div className={styles.Card} onClick={onHandleOpenDetails}>
      <div className={styles.details}>
        <div className={styles.actions}>
          <p className={styles.rank}>{coins.market_cap_rank}.</p>
          <img className={styles.image} src={coins.image} alt={coins.id} />
          <div className={styles.icons}>
            <h1 className={styles.symbol}>{coins.symbol.toUpperCase()}</h1>
            <p className={styles.rank}>{coins.id}</p>
          </div>
        </div>
        <MdStars className={styles.star} />
      </div>
      <div className={styles.info}>
        <div className={styles.day}>
          <span>PRICE</span>
          <span className={styles.digits}>€{coins.current_price}</span>
        </div>
        <div className={styles.week}>
          <span>CHANGE PERC.</span>
          <span className={styles.var}>
            {coins.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <div className={styles.month}>
          <span>MARKET-CAP</span>
          <span className={styles.digits}>€{coins.market_cap}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
