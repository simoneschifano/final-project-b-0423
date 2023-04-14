import styles from "./index.module.scss";
import Card from "../card/Card";

const CardsList = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.CardsList}>
      {data?.map((item) => (
        <Card props={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardsList;
