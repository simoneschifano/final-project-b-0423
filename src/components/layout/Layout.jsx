import styles from "./index.module.scss";

import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
