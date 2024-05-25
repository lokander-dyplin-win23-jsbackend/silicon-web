'use client'
import Link from 'next/link';
import styles from './Account.module.css'
import FileUploadForm from "./FileUploader";
export default function AccountProfile() {
    return (
        
        <section className={styles.accountDetails}>
            <aside>
            <div className={styles.profileInfo}>
                <div className={styles.profilePic}>
                    <img src="./images.jpg" />
                </div>
                <FileUploadForm />
                {/* <form encType="multipart/form-data" method="post" asp-action="UploadProfileImage" asp-controller="Account">
                <input id="fileUploader" type="file" name="file" hidden/>    
                <label htmlFor="fileUploader" className="btn btn-circle btn-circl-sm"><i className="fa-regular fa-refresh"></i></label>
                </form> */}
                <div className={styles.profileInfo}>
                    <h5 className={styles.displayName}> John Doe</h5>
                    <p>Johndoe@domain.com</p>
                </div>
            </div>
            <nav>
                <Link className={`btn btn-theme ${styles.btn}`}href="/account"><i className="fa-regular fa-gear"></i>Account Details</Link>
                <Link className={`btn btn-transparent ${styles.btn}`}href="/notifications"><i className="fa-regular fa-bell"></i>Notifications</Link>
                <Link className={`btn btn-transparant ${styles.btn}`}href="/"><i className="fa-regular fa-right-to-bracket"></i>Sign out</Link>
            </nav>
            </aside>
        </section>
    );}