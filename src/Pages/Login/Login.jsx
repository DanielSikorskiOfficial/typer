import React from "react";
import NavLink from "react-router-dom"
import styles from "./Login.module.css";
export const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Zaloguj się</h2>
        <form>
          <div className={styles.input}>
            <input type="text" name="login" placeholder="Login" required />
          </div>
          <div className={styles.input}>
            <input type="password" name="haslo" placeholder="Hasło" required />
          </div>
          <div className={styles.form_container}>
            <button type="submit" className={styles.button}>
              Zaloguj się
            </button>
          </div>
          <div className={styles.footer}>
            <span className={styles.span}>Nie masz jeszcze konta?</span> <br />
            <NavLink to={"/register"}>
              <button className={styles.button}>Zarejestruj się</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};
