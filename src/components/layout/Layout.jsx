import styles from "./index.module.scss";

import Navbar from "../navbar";
import Header from "../header";

const Layout = ({ children }) => {
  
  return (
    
    <div className={styles.Layout} >
      <Header /> 
      <Navbar />
      <div className={styles.container}>
        {children}
      </div>
      </div>
      
  );
};

export default Layout;
