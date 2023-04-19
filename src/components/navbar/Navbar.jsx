import styles from "./index.module.scss";
import { VscAccount } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <a href="../account">
            <span>
              <VscAccount className={styles.icon} />
            </span>
            ACCOUNT
          </a>
        </li>
        <li>
          <a href="../login">
            <span>
              <FiLogOut className={styles.icon} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
