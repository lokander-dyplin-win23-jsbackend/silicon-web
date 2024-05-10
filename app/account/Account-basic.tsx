import styles from './Account.module.css'
export default function AccountBasic() {
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
                            <input asp-for="Basic!.FirstName" />
                        </div>
                        <div className={`input-group ${styles.formLastname}`}>
                            <label>Lastname</label>
                            <span></span>
                            <input asp-for="Basic!.LastName" />
                        </div>
                        <div className={`input-group ${styles.formEmail}`}>
                            <label>Email</label>
                            <span></span>
                            <input></input>
                        </div>
                        <div className={`input-group ${styles.formPhone}`}>
                            <label>Phone</label>
                            <input asp-for="Basic!.PhoneNumber" />
                        </div>
                        <div className={`input-group ${styles.formBio}`}>
                        <label>Bio(optional)</label>
                        <textarea></textarea>
                        </div>
                        <div className={styles.formButtons}>
                            <button className="btn btn-gray" type="reset">Cancel</button>
                            <button className="btn btn-theme" type="submit">Save changes</button>
                        </div>
                    </div>
                </form>
                <hr />
            </section>
            </div>
  
    );}