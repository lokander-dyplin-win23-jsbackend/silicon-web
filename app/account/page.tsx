import styles from './Account.module.css'
import AccountAddress from "./Account-address";
import AccountBasic from "./Account-basic";
import AccountProfile from "./Account-profile";

export default function Account() {
  return (
      <div className={`container ${styles.container}`}>
        <section className={styles.accountDetails}>
        
          <AccountProfile />
          <div className={styles.details}>
            <AccountBasic />
            <AccountAddress />
          </div>
        </section>
      </div>
  );
}
