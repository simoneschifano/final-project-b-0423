import { useState } from "react";
import styles from "./index.module.scss";

import { BsMoon, BsSun } from "react-icons/bs";

const SwitcherTheme = () => {
  const [isLightActive, setLightActive] = useState(false);

  const onHandleClick = () => setLightActive((prev) => !prev);
  return (
    <div onClick={onHandleClick} className={styles.SwictherTheme}>
      <div className={`${styles.dark} ${isLightActive && styles.unactive}`}>
        <BsMoon className={styles.moon} />
      </div>
      <div className={`${styles.light} ${isLightActive && styles.active}`}>
        <BsSun className={styles.sun} />
      </div>
    </div>
  );
};

export default SwitcherTheme;
