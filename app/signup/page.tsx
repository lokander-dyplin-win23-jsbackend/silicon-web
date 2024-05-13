"use client";

import Link from "next/link";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(
      "https://accountprovider-silicons.azurewebsites.net/api/SignUp?code=ITi2BUi90A1CuUSqitGK74pA25BZrI3Q6T6VHMzLSIuqAzFuAiDbhQ==",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signUpForm),
      }
    );
    if (res.status === 200) {
      router.push("/confirm?email=" + signUpForm.email);
    } else {
      let result = await res.json();
      setError(result.error);
    }
  };
  return (
    <section className={styles.signUp}>
      <div className={`container ${styles.container}`}>
        {error && <div className="alrt alert-danger">{error} </div>}
        <form className="form" onSubmit={handleSubmit} noValidate>
          <h1> Create Account</h1>
          <p>
            Already have an account? <Link href="/signin">Sign in here</Link>.
          </p>
          <div className={styles.content}>
            <div className={`input-group ${styles.formFirstname}`}>
              <label htmlFor="FirstName">Firstname</label>
              <span className="validation-error"></span>
              <input
                value={signUpForm.firstName}
                onChange={onChange}
                type="text"
              />
            </div>
            <div className={`input-group ${styles.formLastname}`}>
              <label htmlFor="LastName">Lastname</label>
              <span className="validation-error"></span>
              <input
                type="text"
                value={signUpForm.lastName}
                onChange={onChange}
              />
            </div>
            <div className={`input-group ${styles.formEmail}`}>
              <label htmlFor="Email">Email</label>
              <span className="validation-error"></span>
              <input
                type="email"
                value={signUpForm.email}
                onChange={onChange}
              />
            </div>
            <div className={`input-group ${styles.formPassword}`}>
              <label htmlFor="Password">Password</label>
              <span className="validation-error"></span>
              <input
                type="password"
                value={signUpForm.password}
                onChange={onChange}
              />
            </div>
            <div className={`input-group ${styles.formConfirm}`}>
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <span className="validation-error"></span>
              <input
                type="password"
                value={signUpForm.confirmPassword}
                onChange={onChange}
              />
            </div>
            <div className={`input-group ${styles.formTerms}`}>
              <div className="input-group">
                <input
                  type="checkbox"
                  className="agreeterms"
                  name="agreeterms"
                  ref={checkboxRef}
                />
                <label htmlFor="TermsAndConditions">
                  {" "}
                  I agree to the <Link href="#"> Terms </Link> &{" "}
                  <Link href="#"> Conditions </Link>
                </label>
              </div>
              <span className="validation-error"></span>
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
