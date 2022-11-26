import React from "react";
import styles from "../Register/Register.module.css";
function Register() {
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
            <button type="submit">Zaloguj się</button>
          </div>
          <div className={styles.footer}>
            <span className={styles.span}>Nie masz jeszcze konta?</span> <br />
            <button>Zarejestruj się</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
