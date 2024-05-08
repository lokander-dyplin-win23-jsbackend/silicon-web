import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <section className={styles.signUp}>
      <div className={`container ${styles.container}`}>
        <form className="form" method="post" noValidate>
          <h1> Create Account</h1>
          <p>
            Already have an account? <a href="/signin">Sign in here</a>.
          </p>
          <div className={styles.content}>
            <div className={`input-group ${styles.formFirstname}`}>
              <label htmlFor="FirstName">Firstname</label>
              <span className={styles.validationError}></span>
              <input type="text" />
            </div>
            <div className={`input-group ${styles.formLastname}`}>
              <label htmlFor="LastName">Lastname</label>
              <span className={styles.validationError}></span>
              <input type="text" />
            </div>
            <div className={`input-group ${styles.formEmail}`}>
              <label htmlFor="Email">Email</label>
              <span className={styles.validationError}></span>
              <input type="email" />
            </div>
            <div className={`input-group ${styles.formPassword}`}>
              <label htmlFor="Password">Password</label>
              <span className={styles.validationError}></span>
              <input type="password" />
            </div>
            <div className={`input-group ${styles.formConfirm}`}>
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <span className={styles.validationError}></span>
              <input type="password" />
            </div>
            <div className={`input-group ${styles.formTerms}`}>
              <div className="input-group">
                <input
                  type="checkbox"
                  value=""
                  className="agreeterms"
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
            id="formSubmit"
            className={`btn btn-theme-s ${styles.formSubmit}`}
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
