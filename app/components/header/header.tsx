export default function Header() {
  return (
    <header>
      <div className="container">
        <a id="logo" href="home.html">
          <img src="" alt="" />{" "}
        </a>
        <div id="menu">
          <nav>
            <a className="menu-link" href="#showcase">
              Showcase
            </a>
            <a className="menu-link" href="#features">
              Features
            </a>
            <a className="menu-link" href="contact.html">
              Contact
            </a>
          </nav>
        </div>
        <div className="btn-switch">
          <label>Light</label>
          <label className="switch" htmlFor="switch-mode">
            <input type="checkbox" id="switch-mode" />
            <div className="slider round"></div>
          </label>
        </div>
        <div className="account-buttons">
          <a className="btn-gray" asp-controller="Auth" asp-action="SignIn">
            <i className="fa-regular fa-right-to-bracket"></i>
            <span>Sign in</span>
          </a>
          <a className="btn-theme" asp-controller="Auth" asp-action="SignUp">
            <i className="fa-regular fa-user"></i>
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </header>
  );
}
