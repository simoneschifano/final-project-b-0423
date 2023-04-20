import styles from "./index.module.scss";
import WalletCard from "../walletCard";

const WalletList = ({ data, inHomeActive }) => {
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
