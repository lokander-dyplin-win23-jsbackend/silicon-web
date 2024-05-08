import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <section className={styles.signup}>
      <div className={styles.container}>
        <form className={styles.form} method="post" noValidate>
          <h1> Create Account</h1>
          <p>
            Already have an account? <a href="/signin">Sign in here</a>.
          </p>
          <div className={styles.content}>
            <div id="form-firstname" className={styles.inputGroup}>
              <label htmlFor="FirstName">Firstname</label>
              <span className={styles.validationError}></span>
              <input type="text" id="FirstName" name="FirstName" />
            </div>
            <div id="form-lastname" className={styles.inputGroup}>
              <label htmlFor="LastName">Lastname</label>
              <span className={styles.validationError}></span>
              <input type="text" id="LastName" name="LastName" />
            </div>
            <div id="form-email" className={styles.inputGroup}>
              <label htmlFor="Email">Email</label>
              <span className={styles.validationError}></span>
              <input type="email" id="Email" name="Email" />
            </div>
            <div id="form-password" className={styles.inputGroup}>
              <label htmlFor="Password">Password</label>
              <span className={styles.validationError}></span>
              <input type="password" id="Password" name="Password" />
            </div>
            <div id="form-confirm" className={styles.inputGroup}>
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <span className={styles.validationError}></span>
              <input
                type="password"
                id="ConfirmPassword"
                name="ConfirmPassword"
              />
            </div>
            <div id="form-terms" className={styles.checkboxGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="checkbox"
                  value=""
                  id="agreeterms"
                  name="agreeterms"
                  // checked={item.checked}
                />
                <label htmlFor="TermsAndConditions">
                  {" "}
                  I agree to the <a href="#"> Terms </a> &{" "}
                  <a href="#"> Conditions </a>
                </label>
              </div>
              <span className={styles.validationError}></span>
            </div>
          </div>
          <button
            id="form-submit"
            className={`${styles.btnThemeS} ${styles.formSubmit}`}
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
