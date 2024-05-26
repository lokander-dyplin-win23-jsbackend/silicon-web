"use client";
import React, { useEffect, useState, ChangeEvent } from "react";
import styles from "./Account.module.css";

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export default function AccountBasic() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("/account/getUserInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to connect to internal api");
        }

        const data = await response.json();
        setUserInfo({
          firstName: data.FirstName,
          lastName: data.LastName,
          email: data.Email,
        });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={`container ${styles.container}`}>
      <section className={styles.basicInfo}>
        <form method="post" noValidate>
          <h2>Account Details</h2>
          <h5>Account Info</h5>
          <div className={styles.content}>
            <div className={`input-group ${styles.formFirstname}`}>
              <label>Firstname</label>
              <span></span>
              <input
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={`input-group ${styles.formLastname}`}>
              <label>Lastname</label>
              <span></span>
              <input
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={`input-group ${styles.formEmail}`}>
              <label>Email</label>
              <span></span>
              <input
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className={`input-group ${styles.formPhone}`}>
              <label>Phone</label>
              <input name="Basic!.PhoneNumber" />
            </div>
            <div className={`input-group ${styles.formBio}`}>
              <label>Bio(optional)</label>
              <textarea></textarea>
            </div>
            <div className={styles.formButtons}>
              <button className="btn btn-gray" type="reset">
                Cancel
              </button>
              <button className="btn btn-theme" type="submit">
                Save changes
              </button>
            </div>
          </div>
        </form>
        <hr />
      </section>
    </div>
  );
}
