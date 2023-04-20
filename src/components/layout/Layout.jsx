import styles from "./index.module.scss";

import Navbar from "../navbar";
import Header from "../header";
import { useState } from "react";

const Layout = ({ children, theme, status, func }) => {
  
  return (
    <div className={styles.Layout}>
      <div className={theme ? styles.dark : styles.unactive}>
      
        <Header theme={theme} status={status} func={func} />
      <Navbar />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
