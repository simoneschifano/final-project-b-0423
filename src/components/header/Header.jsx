// import SwitcherTheme from "../switcher-Theme";
import { BsCreditCardFill, BsStar } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import styles from "./index.module.scss";
import SwitcherTheme from "../switcher-theme";

const Header = (theme, status, func) => {
  console.log(theme, status, func)
  return (
    <div className={styles.Header}>
      <a className={styles.logo} href="/">
        Crypie
      </a>
      <a className={styles.logo__mobile} href="/">
        <svg
          id="logo-86"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ccustom"
            clipRule="evenodd"
            d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
          ></path>
          <path
            className="ccustom"
            clipRule="evenodd"
            d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
          ></path>
        </svg>
      </a>
      <ul className={styles.list}>
        {/* HOME */}
        <li>
          <a href="/">
            <span className={styles.svg}>
              <AiFillHome className={styles.home} />
            </span>
            <span className={styles.pageName}>Home</span>
          </a>
        </li>
        {/* WALLET */}
        <li>
          <a href="../wallet">
            <span className={styles.svg}>
              <BsCreditCardFill className={styles.wallet} />
            </span>
            <span className={styles.pageName}>Wallet</span>
          </a>
        </li>
        {/* ALL CRYPTO */}
        <li>
          <a href="../allCrypto">
            <span className={styles.svg}>
              <GiTwoCoins className={styles.allCrypto} />
            </span>
            <span className={styles.pageName}>All crypto</span>
          </a>
        </li>
        {/* WATCHLIST */}
        <li>
          <a href="../watchlist">
            <span className={styles.svg}>
              <BsStar className={styles.watchList} />
            </span>
            <span className={styles.pageName}>Watchlist</span>
          </a>
        </li>
        {/* ABOUT US */}
        <li>
          <a href="../aboutUs">
            <span className={styles.svg}>
              <FaUsers className={styles.aboutIcon} />
            </span>
            <span className={styles.pageName}>About us</span>
          </a>
        </li>
      </ul>
      
      <SwitcherTheme status={status} func={func} theme={theme} />
    </div>
  );
};

export default Header;
