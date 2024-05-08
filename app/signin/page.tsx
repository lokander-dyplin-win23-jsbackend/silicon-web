import styles from "./signin.module.css";

export default function SignIn() {
  return (
    <section className={styles.signIn}>
      <div className={`container ${styles.container}`}>
        <form method="post" noValidate>
          <div className="statusMessage"></div>
          <h1> Welcome back</h1>
          <p>
            Dont have an account? <a href="signup">Sign up here</a>.
          </p>
          <div className={styles.content}>
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
            <div className={`input-group ${styles.formTerms}`}>
              <div className="input-group">
                <input
                  type="checkbox"
                  value=""
                  className="agreeterms"
                  name="agreeterms"
                  // checked={item.checked}
                />
                <label htmlFor="RememberMe"> Remember me</label>
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
