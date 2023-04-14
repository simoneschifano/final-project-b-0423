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
          <p className={styles.rank}>{coins.market_cap_rank}</p>
          <img className={styles.image} src={coins.image} alt={coins.id} />
          <div className={styles.icons}>
            <h1 className={styles.symbol}>{coins.symbol.toUpperCase()}</h1>
            <p className={styles.rank}>{coins.id}</p>
          </div>
          <MdStars className={styles.star_desktop} />
        </div>
      </div>
      <div className={styles.graph}>{/* <ChartEl prices={cryptoId} /> */}</div>
      <div className={styles.chart}></div>

      <div className={styles.stat}>
        <MdStars className={styles.icon} />
        <p className={styles.price}>€{coins.current_price}</p>
        <p className={styles.var}>
          {coins.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.day}>
          <p>{coins.symbol.toUpperCase()}-NOW</p>
          <p className={styles.digits}>€{coins.current_price}</p>
        </div>
        <div className={styles.week}>
          <p>{coins.symbol.toUpperCase()}-CHANGE PERC.</p>
          <p className={styles.digits}>
            {coins.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
        <div className={styles.month}>
          <p>{coins.symbol.toUpperCase()}-TODAY</p>
          <p className={styles.digits}>€{coins.price_change_24h}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
