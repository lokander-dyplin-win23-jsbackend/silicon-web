import styles from './Account.module.css'
export default function AccountAddress() {
    return (
            <div className={`container ${styles.container}`}>
                
            <section className={styles.addressInfo}>
                <form method="post" noValidate>
                    <h5>Address Info</h5>

                    <div className={styles.content}>
                        <div className={`input-group ${styles.formAddressline1}`}>
                            <label>Addressline 1</label>
                            <span></span>
                            <input asp-for="AddressInfo!.Addressline_1" />
                        </div>

                        <div className={`input-group ${styles.formAddressline2}`}>
                            <label>Addressline 2(optional)</label>
                            <span></span>
                            <input asp-for="AddressInfo!.Addressline_2" />
                        </div>

                        <div className={`input-group ${styles.formPostalcode}`}>
                            <label>PostalCode</label>
                            <span></span>
                            <input asp-for="AddressInfo!.PostalCode" />
                        </div>

                        <div className={`input-group ${styles.formCity}`}>
                            <label>City</label>
                            <span></span>
                            <input asp-for="AddressInfo!.City" />
                        </div>

                        <div id={styles.formButtons}>
                            <button className="btn btn-gray" type="reset">Cancel</button>
                            <button className="btn btn-theme" type="submit">Save Changes</button>
                        </div>
                    </div>
                </form>
            </section>
            </div>
    );}