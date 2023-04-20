import { useState } from "react";
import styles from "./index.module.scss";

import { BsMoon, BsSun } from "react-icons/bs";

const SwictherTheme = ({ status, func }) => {
  
  const state = status;
  
  return (
    
    <div className={styles.SwictherTheme} onClick={func}>
      <div className={`${styles.dark} ${state ? styles.active : styles.unactive}`}>
        <BsMoon className={styles.moon} />
      </div>
      <div className={`${styles.light} ${state ? styles.unactive : styles.active}`}>
        <BsSun className={styles.sun} />
      </div>

    </div>
  );
};

export default SwictherTheme;
