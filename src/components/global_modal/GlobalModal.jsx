import { AiFillEuroCircle } from "react-icons/ai";
import styles from "./index.module.scss";
import { useState } from "react";

const GlobalModal = ({ icon, price, id, setIsGlobalModal }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(e.target.value);

  const walletInLocalStorage = JSON.parse(localStorage.getItem("wallet")) || [];

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const isCryptoInWallet = walletInLocalStorage.find(
      (crypto) => crypto.id === id
    );

    if (isCryptoInWallet) {
      const prevQty = walletInLocalStorage.find(
        (quantity) => quantity.id === id
      );

      const updatedQty = {
        id: id,
        qty: qty + prevQty.qty,
        price: price,
        icon: icon,
      };

      const finalAddWallet = walletInLocalStorage.filter(
        (wallet) => wallet.id === id
      );

      finalAddWallet.length > 1
        ? localStorage.setItem(
            "wallet",
            JSON.stringify([finalAddWallet, updatedQty])
          )
        : localStorage.setItem("wallet", JSON.stringify([updatedQty]));
    } else {
      localStorage.setItem(
        "wallet",
        JSON.stringify([
          ...walletInLocalStorage,
          { id: id, qty: qty, price: price, icon: icon },
        ])
      );
    }
    onHandleCloseModal();
  };

  const qty = inputValue / price;

  const onHandleCloseModal = () => {
    setIsGlobalModal((prev) => !prev);
  };

  return (
    <div className={styles.GlobalModal}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
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
