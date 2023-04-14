import Button from "../button";
import styles from "./index.module.scss";

const LoginForm = () => {
  return <div className={styles.LoginForm}>
    <h2> Login </h2>
    
    <label htmlFor="username"> username</label>
    <input type="text" />
    <label htmlFor="password">password </label>
    <input type="password" />
    <Button />
  </div>;
};

export default LoginForm;
