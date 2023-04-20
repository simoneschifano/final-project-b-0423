import { useState } from "react";
import Button from "../button";
import styles from "./index.module.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <form className={styles.LoginForm} onSubmit={onHandleSubmit}>
      <h2> Login </h2>

      <label htmlFor="username"> username</label>
      <input
        type="text"
        value={username}
        onChange={onHandleUsername}
        required
      />
      <label htmlFor="password">password </label>
      <input
        type="password"
        value={password}
        onChange={onHandlePassword}
        required
      />
      <input type="submit" />
      <Button text="Accedi" />
    </form>
  );
};

export default LoginForm;
