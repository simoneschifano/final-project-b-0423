import styles from "./index.module.scss";

import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <a href="../account">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22.857"
                viewBox="0 0 20 22.857"
              >
                <path
                  id="user"
                  d="M13.571,5.714A3.571,3.571,0,1,0,10,9.286,3.571,3.571,0,0,0,13.571,5.714Zm-9.286,0A5.714,5.714,0,1,1,10,11.429,5.714,5.714,0,0,1,4.286,5.714Zm-2.085,15H17.8a5.819,5.819,0,0,0-5.759-5H7.96A5.819,5.819,0,0,0,2.2,20.714ZM0,21.531a7.958,7.958,0,0,1,7.96-7.96h4.08A7.958,7.958,0,0,1,20,21.531a1.326,1.326,0,0,1-1.326,1.326H1.326A1.326,1.326,0,0,1,0,21.531Z"
                  transform="translate(0 0)"
                  
                />
              </svg>
            </span>
            ACCOUNT
          </a>
        </li>
        <li>
          <a href="../login">
            <span>
              <FiLogOut />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
