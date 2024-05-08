import AccountBasic from "./Account-basic";
import AccountProfile from "./Account-profile";

export default function Account() {
  return (
    <section className="account-details">
      <div className="container">
        <AccountProfile />
        <AccountBasic />
      </div>
    </section>
  );
}
