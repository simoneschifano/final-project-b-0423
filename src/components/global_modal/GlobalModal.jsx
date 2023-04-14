import { AiFillEuroCircle } from "react-icons/ai";
import styles from "./index.module.scss";

const GlobalModal = () => {
  return (
    <div className={styles.GlobalModal}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>Definisci il tuo acquisto</h3>
        <form className={styles.form}>
          <div className={styles.firstInput}>
            <AiFillEuroCircle className={styles.icon} />
            <input
              className={styles.input}
              type="number"
              placeholder="Valore"
            />
          </div>
          <input className={styles.input} type="number" placeholder="qty" />
          <input className={styles.btn} type="submit" value="ACQUISTA" />
        </form>
      </div>
    </div>
  );
};

export default GlobalModal;
