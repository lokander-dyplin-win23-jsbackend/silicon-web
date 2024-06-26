import Link from "next/link";
import styles from "./Header.module.css";
import { cookies } from "next/headers";

export default function Header() {
  const isSignedIn = cookies().get("Authorization");
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link id={styles.logo} href="/">
          <img src="/images/Silicon-Logotype-Light-Mode.svg" alt="" />
        </Link>
        <div id={styles.menu}>
          <nav className={styles.nav}>
            <Link className="menu-link" href="/">
              Home
            </Link>

            {isSignedIn ? (
              <Link className="menu-link" href="/courses">
                Courses
              </Link>
            ) : (
              <Link className="menu-link" href="#features">
                Features
              </Link>
            )}

            <Link className="menu-link" href="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div className={`btn-switch ${styles.btnSwitch}`}>
          <label>Light</label>
          <label className="switch" htmlFor="switch-mode">
            <input type="checkbox" id="switch-mode" />
            <span className="slider round"></span>
          </label>
          <label>Dark</label>
        </div>

        <div className={styles.accountButtons}>
          {isSignedIn ? (
            <Link className="btn btn-theme" href="/signout">
              <i className="fa-regular fa-user"></i>
              <span>Sign out</span>
            </Link>
          ) : (
            <>
              <Link className="btn btn-gray" href="/signin">
                <i className="fa-regular fa-right-to-bracket"></i>
                <span>Sign in</span>
              </Link>
              <Link className="btn btn-theme" href="/signup">
                <i className="fa-regular fa-user"></i>
                <span>Sign up</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
