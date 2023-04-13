import styles from "./index.module.scss";

const Card = (props) => {
  const data = props;
  const coins = data.props;
  return (
    <div className={styles.Card}>
      <div className={styles.details}>
        <div className={styles.actions}></div>
        <div className={styles.graph}></div>
      </div>
      <div className={styles.info}>{coins.id}</div>
    </div>
  );
};

export default Card;
