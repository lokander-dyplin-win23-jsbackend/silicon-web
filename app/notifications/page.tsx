import AccountProfile from "../account/Account-profile";
import styles from './Notifications.module.css';

export default function Notifications() {
    return (
        <div className={`container ${styles.container}`}>
            <section className={styles.accountDetails}>
                <AccountProfile />
                <div className={styles.details}>
                    <div className={styles.content}>
                        <h1>Notifications</h1>
                        <form>
                            <div className={styles.notificationItem}>
                                <label>Preferred email for notifications</label>
                                <input type="text" placeholder="example@gmail.com"/>
                            </div>
                            <div className={`${styles.notificationItem} ${styles.sliderItem}`}>
                                <div className={`btn-switch ${styles.btnNews}`}>
                                    <label className="switch">
                                        <input type="checkbox" id="switch-mode" />
                                        <span className="slider round"></span>
                                    </label>
                                    <div className={styles.labelAndText}>
                                        <label>Subscribe to Newsletter</label>
                                        <p>Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.notificationItem} ${styles.sliderItem}`}>
                                <div className={`btn-switch ${styles.btnDarkmode}`}>
                                    <label className="switch">
                                        <input type="checkbox" id="switch-mode" />
                                        <span className="slider round"></span>
                                    </label>
                                    <div className={styles.labelAndText}>
                                        <label>Use Dark Mode Theme in Application</label>
                                        <p>Tortor massa porttitor enim tristique neque fermentum sed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formButtons}>
                                <button className="btn btn-gray" type="reset">Cancel</button>
                                <button className="btn btn-theme" type="submit">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
