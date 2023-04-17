import { AiFillEuroCircle } from "react-icons/ai";

import styles from "./index.module.scss";

import { useState } from "react";

const GlobalModal = ({ icon, price, id }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(e.target.value);
  console.log(inputValue);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!JSON.parse(localStorage.getItem("wallet"))) {
      localStorage.setItem("wallet", JSON.stringify({ id: id, qty: qty }));
    } else {
      alert("a");
    }
  };

  const qty = (inputValue / price).toFixed(6);

  return (
    <div className={styles.GlobalModal}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>Definisci il tuo acquisto</h3>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <div className={styles.firstInput}>
            <AiFillEuroCircle className={styles.icon} />
            <input
              value={inputValue}
              className={styles.input}
              onChange={onHandleInput}
              type="number"
              placeholder="price"
              required
            />
          </div>
          <div className={styles.secondInput}>
            <img src={icon} className={styles.icon} />
            <input
              className={styles.input}
              value={qty}
              type="number"
              placeholder="qty"
            />
          </div>
          <input className={styles.btn} type="submit" value="ACQUISTA" />
        </form>
      </div>
    </div>
  );
};

export default GlobalModal;
