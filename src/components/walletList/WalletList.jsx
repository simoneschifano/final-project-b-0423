import styles from "./index.module.scss";
import WalletCard from "../walletCard";
import { useEffect, useState } from "react";

const WalletList = ({ data, inHomeActive }) => {
  // const [walletInLocalStorage, setWalletInLocalStorage] = useState();

  // const WalletCoins = () =>{
  //   const storedCoins = typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("wallet"))
  //     : [];
  //     setWalletInLocalStorage(storedCoins);
  // };

  // useEffect(() => {
  //   WalletCoins();
  // }, [walletInLocalStorage]);

  return (
    <div
      className={`${styles.WalletList} ${
        inHomeActive && styles.walletListHome
      }`}
    >
      {data?.map((item) => (
        <WalletCard props={item} key={item.id} />
      ))}
    </div>
  );
};

export default WalletList;
