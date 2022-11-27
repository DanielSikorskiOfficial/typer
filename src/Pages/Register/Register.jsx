<>
      <div className={styles.container}>
        <h2 className={styles.header}>Zarejestruj się</h2>
        <form>
          <div className={styles.input}>
            <input type="text" name="imie" placeholder="Imię" required />
          </div>

          <div className={styles.input}>
            <input
              type="text"
              name="nazwisko"
              placeholder="Nazwisko"
              required
            />
          </div>
          <div className={styles.input}>
            <input type="text" name="login" placeholder="Login" required />
          </div>
          <div className={styles.input}>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className={styles.input}>
            <input type="password" name="haslo" placeholder="Hasło" required />
          </div>
          <div className={styles.form_container}>
            <button type="submit">Zarejestruj się</button>
          </div>
          <div className={styles.footer}>
            <span className={styles.span}>Masz już konto?</span> <br />
            <NavLink to={"/"}>
              <button>Zaloguj się</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>