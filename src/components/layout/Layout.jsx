import styles from "./index.module.scss";

import Navbar from "../navbar";
import Header from "../header";

const Layout = ({ children, theme }) => {
  console.log(theme);
  return (
    <div className={styles.Layout}>
      <div className={`${theme ? styles.dark : styles.unactive}`}></div>
      
      <Header />
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
