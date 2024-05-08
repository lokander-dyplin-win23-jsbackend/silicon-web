export default function SignIn() {
  return (
    <section className="signin">
      <div className="container">
        <form method="post" noValidate>
          <div className="statusMessage"></div>
          <h1> Welcome back</h1>
          <p>
            Dont have an account? <a href="signup">Sign up here</a>.
          </p>
          <div className="content">
            <div id="form-email" className="input-group">
              <label asp-for="Email">Email</label>
              <input asp-for="Email" />
            </div>
            <div id="form-password" className="input-group">
              <label asp-for="Password">Password</label>
              <input asp-for="Password" />
            </div>

            <div id="form-remember" className="checkbox-group">
              <div className="input-group">
                <input
                  type="checkbox"
                  value=""
                  id="remeberme"
                  name="remeberme"
                  // checked={item.checked}
                />
                <label>Remeber me</label>
              </div>
            </div>
            <button id="form-submit" className="btn-theme-s" type="submit">
              {" "}
              Sign In
            </button>
            <a id="form-forgot-password" asp-controller="Account" asp-action="">
              {" "}
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
