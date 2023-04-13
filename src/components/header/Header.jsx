import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <a className={styles.logo} href="./">
        Crypie
      </a>
      <ul className={styles.list}>
        <li>
          <a href="../wallet">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.714"
                height="20"
                viewBox="0 0 25.714 20"
              >
                <path
                  id="credit-card"
                  d="M22.857,34.143a.716.716,0,0,1,.714.714v1.429H2.143V34.857a.716.716,0,0,1,.714-.714Zm.714,6.429v8.571a.716.716,0,0,1-.714.714h-20a.716.716,0,0,1-.714-.714V40.571ZM2.857,32A2.86,2.86,0,0,0,0,34.857V49.143A2.86,2.86,0,0,0,2.857,52h20a2.86,2.86,0,0,0,2.857-2.857V34.857A2.86,2.86,0,0,0,22.857,32Zm2.5,13.571a1.071,1.071,0,1,0,0,2.143H7.5a1.071,1.071,0,1,0,0-2.143Zm5.714,0a1.071,1.071,0,1,0,0,2.143h5a1.071,1.071,0,1,0,0-2.143Z"
                  transform="translate(0 -32)"
                  fill="#f5f5f5"
                />
              </svg>
            </span>
            Wallet
          </a>
        </li>
        <li>
          <a href="../allCrypto">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="coins"
                  d="M20,3.125c0,.7-.559,1.352-1.5,1.875a11.927,11.927,0,0,1-4.777,1.207c-.145-.07-.289-.137-.441-.2A15.42,15.42,0,0,0,7.5,5c-.324,0-.641.008-.957.023L6.5,5C5.559,4.477,5,3.828,5,3.125,5,1.4,8.359,0,12.5,0S20,1.4,20,3.125ZM6.277,6.293c.4-.027.809-.043,1.223-.043a13.083,13.083,0,0,1,5.957,1.227C14.426,8,15,8.66,15,9.375a1.312,1.312,0,0,1-.082.457,2.832,2.832,0,0,1-1.367,1.387h0s-.012,0-.016.008h0c-.012.008-.023.012-.035.02a13.021,13.021,0,0,1-6,1.25,13.437,13.437,0,0,1-5.789-1.137c-.074-.035-.145-.074-.215-.113C.559,10.727,0,10.078,0,9.375,0,8.016,2.086,6.855,5,6.43,5.41,6.371,5.836,6.324,6.277,6.293ZM16.25,9.375a2.949,2.949,0,0,0-.941-2.086,13.146,13.146,0,0,0,2.977-.8,6.765,6.765,0,0,0,1.715-1V6.875c0,.754-.645,1.449-1.711,1.988a9.463,9.463,0,0,1-2.047.723c0-.07.008-.137.008-.207ZM15,13.125c0,.7-.559,1.352-1.5,1.875-.07.039-.141.074-.215.113A13.406,13.406,0,0,1,7.5,16.25,13.021,13.021,0,0,1,1.5,15C.559,14.477,0,13.828,0,13.125V11.742a6.833,6.833,0,0,0,1.715,1A15.456,15.456,0,0,0,7.5,13.75a15.456,15.456,0,0,0,5.785-1.012,7.885,7.885,0,0,0,.875-.426,6.206,6.206,0,0,0,.672-.437c.059-.043.113-.09.168-.133v1.383Zm1.25,0V10.863a12.107,12.107,0,0,0,2.035-.625,6.765,6.765,0,0,0,1.715-1v1.383a1.726,1.726,0,0,1-.582,1.207,6.841,6.841,0,0,1-3.176,1.5C16.246,13.266,16.25,13.2,16.25,13.125ZM7.5,17.5a15.456,15.456,0,0,0,5.785-1.012,6.765,6.765,0,0,0,1.715-1v1.383C15,18.6,11.641,20,7.5,20S0,18.6,0,16.875V15.492a6.833,6.833,0,0,0,1.715,1A15.456,15.456,0,0,0,7.5,17.5Z"
                  fill="#f5f5f5"
                  opacity="0.999"
                />
              </svg>
            </span>
            All crypto
          </a>
        </li>
        <li>
          <a href="../watchlist">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.624"
                height="22.92"
                viewBox="0 0 23.624 22.92"
              >
                <path
                  id="star"
                  d="M35.82,0a1.071,1.071,0,0,1,.967.6l3.071,6.325,6.857,1.012a1.067,1.067,0,0,1,.864.73,1.079,1.079,0,0,1-.264,1.1L42.342,14.7l1.173,6.965a1.082,1.082,0,0,1-.43,1.052,1.069,1.069,0,0,1-1.132.076L35.82,19.516l-6.128,3.272a1.068,1.068,0,0,1-1.132-.076,1.085,1.085,0,0,1-.434-1.052L29.3,14.7,24.326,9.767a1.075,1.075,0,0,1,.6-1.826l6.857-1.012L34.854.6A1.076,1.076,0,0,1,35.82,0Zm0,3.536L33.47,8.379a1.085,1.085,0,0,1-.81.6l-5.3.779,3.845,3.809a1.077,1.077,0,0,1,.3.94l-.909,5.358,4.709-2.516a1.067,1.067,0,0,1,1.012,0l4.709,2.516-.9-5.354a1.065,1.065,0,0,1,.3-.94L44.28,9.758l-5.3-.783a1.082,1.082,0,0,1-.81-.6Z"
                  transform="translate(-24.008)"
                  fill="#f5f5f5"
                />
              </svg>
            </span>
            Watchlist
          </a>
        </li>
      </ul>
      <div className="switcher">light - dark</div>
    </div>
  );
};

export default Header;
