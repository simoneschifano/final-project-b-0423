import styles from "./index.module.scss";

import { MdStars } from "react-icons/Md";

const Card = (props) => {
  const data = props;
  const coins = data.props;
  return (
    <div className={styles.Card}>
      <div className={styles.details}>
        <div className={styles.actions}>
          <img src={coins.image} alt={coins.id} />
          <div className={styles.icons}>
            <h1 className={styles.symbol}>{coins.symbol.toUpperCase()}</h1>
            <p className={styles.rank}>
              {coins.market_cap_rank}.{coins.id}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.graph}></div>
      <div className={styles.stat}>
        <MdStars className={styles.icon} />
        <span className={styles.price}>€{coins.current_price}</span>
        <span className={styles.var}>
          {coins.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.day}>
          <span>{coins.symbol.toUpperCase()}-NOW</span>
          <span>€{coins.current_price}</span>
        </div>
        <div className={styles.week}>
          <span>{coins.symbol.toUpperCase()}-CHANGE PERC.</span>
          <span>{coins.price_change_percentage_24h.toFixed(2)}%</span>
        </div>
        <div className={styles.month}>
          <span>{coins.symbol.toUpperCase()}-TODAY</span>
          <span>€{coins.price_change_24h}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
