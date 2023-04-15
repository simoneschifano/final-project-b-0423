import { TbArrowsSort } from "react-icons/tb";
import styles from "./index.module.scss";

const BtnFilter = (prop) => {
  const onHandleSorting = () => {
    prop.setFilter((prev) => !prev);
  };

  return (
    <div className={styles.BtnFilter} onClick={onHandleSorting}>
      {prop.value}
      <TbArrowsSort />
    </div>
  );
};
export default BtnFilter;
