import styles from "./index.module.scss";
import Card from "../card/Card";

const CardsList = ({ data, inHomeActive }) => {
  // console.log(data);
  return (
    <div
      className={`${styles.CardsList} ${inHomeActive && styles.CardListHome}`}
    >
      {data?.map((item) => (
        <Card props={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardsList;
