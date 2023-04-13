import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
        <a href="../account">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22.857" viewBox="0 0 20 22.857">
              <path id="user" d="M13.571,5.714A3.571,3.571,0,1,0,10,9.286,3.571,3.571,0,0,0,13.571,5.714Zm-9.286,0A5.714,5.714,0,1,1,10,11.429,5.714,5.714,0,0,1,4.286,5.714Zm-2.085,15H17.8a5.819,5.819,0,0,0-5.759-5H7.96A5.819,5.819,0,0,0,2.2,20.714ZM0,21.531a7.958,7.958,0,0,1,7.96-7.96h4.08A7.958,7.958,0,0,1,20,21.531a1.326,1.326,0,0,1-1.326,1.326H1.326A1.326,1.326,0,0,1,0,21.531Z" transform="translate(0 0)" fill="#f5f5f5"/>
            </svg>

            </span>
            ACCOUNT
          </a>
        </li>
        <li>
          <a href="../login">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20">
                <path id="unlock" d="M5.625,5.625a3.126,3.126,0,0,1,5.949-1.34,1.249,1.249,0,1,0,2.258-1.07A5.625,5.625,0,0,0,3.125,5.625V7.5H2.5A2.5,2.5,0,0,0,0,10v7.5A2.5,2.5,0,0,0,2.5,20H15a2.5,2.5,0,0,0,2.5-2.5V10A2.5,2.5,0,0,0,15,7.5H5.625Z" fill="#f5f5f5"/>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
