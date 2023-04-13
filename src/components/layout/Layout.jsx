import styles from "./index.module.scss";

import Navbar from "../navbar";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
