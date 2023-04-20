import styles from "./index.module.scss";
import WalletCard from "../walletCard";

const WalletList = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.WalletList}>
      {data?.map((item) => (
        <WalletCard props={item} key={item.id} />
      ))}
    </div>
  );
};

export default WalletList;
