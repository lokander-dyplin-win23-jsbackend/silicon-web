<section id="signup">
  <div className="container">
    <form method="post" asp-controller="Auth" asp-action="SignUp" noValidate>
      <h1> Create Account</h1>
      <p>
        Already have an account?{" "}
        <a asp-controller="Auth" asp-action="SignIn">
          Sign in here
        </a>
        .
      </p>
      <div className="content">
        <div id="form-firstname" className="input-group">
          <label asp-for="FirstName"></label>
          <span asp-validation-for="FirstName"></span>
          <input asp-for="FirstName" />
        </div>
        <div id="form-lastname" className="input-group">
          <label asp-for="LastName"></label>
          <span asp-validation-for="LastName"></span>
          <input asp-for="LastName" />
        </div>
        <div id="form-email" className="input-group">
          <label asp-for="Email"></label>
          <span asp-validation-for="Email"></span>
          <input asp-for="Email" />
        </div>
        <div id="form-password" className="input-group">
          <label asp-for="Password"></label>
          <span asp-validation-for="Password"></span>
          <input asp-for="Password" />
        </div>
        <div id="form-confirm" className="input-group">
          <label asp-for="ConfirmPassword"></label>
          <span asp-validation-for="ConfirmPassword"></span>
          <input asp-for="ConfirmPassword" />
        </div>
        <div id="form-terms" className="checkbox-group">
          <div className="input-group">
            <input asp-for="TermsAndConditions" />
            <label asp-for="TermsAndConditions">
              {" "}
              I agree to the{" "}
              <a asp-controller="" asp-action="">
                {" "}
                Terms
              </a>{" "}
              &{" "}
              <a asp-controller="" asp-action="">
                Conditions
              </a>
            </label>
          </div>
          <span asp-validation-for="TermsAndConditions"></span>
        </div>
      </div>
      <button id="form-submit" className="btn-theme-s" type="submit">
        Sign up
      </button>
    </form>
  </div>
</section>;
