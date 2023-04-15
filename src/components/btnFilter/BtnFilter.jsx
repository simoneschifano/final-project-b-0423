import { TbArrowsSort } from "react-icons/tb";
import styles from "./index.module.scss";

const BtnFilter = (prop) => {
  return (
    <div className={styles.BtnFilter}>
      {prop.value}
      <TbArrowsSort />
    </div>
  );
};
export default BtnFilter;
