import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.aboutUs}>
            <img className={styles.backgroundImage} src="images/SiliconWeb-Home-Image.svg" alt="" />
            <div className={`container ${styles.container}`}>
                    <h1>Who are we?</h1>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <img className={styles.image} src="images/alexD.svg" alt="Alexander" />
                        <h5>Alexander Dyplin</h5>
                        <p>alexander.dyplin@domain.com</p>
                    </div>
                    <div className={styles.info}>
                        <img className={styles.image} src="images/markusL.svg" alt="Markus" />
                        <h5>Markus Lokander</h5>
                        <p>markus.lokander@domain.com</p>
                    </div>
                </div>
            </div>
        </section>
  );
}
