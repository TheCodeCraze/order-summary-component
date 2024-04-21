import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <img
        src="/illustration-hero.svg"
        alt="Hero illustration"
        className={styles.image}
      />
      <div className={styles.text}>
        <h1 className={styles.title}>Order Summary</h1>
        <p className={styles.description}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className={styles.info}>
          <img
            src="/icon-music.svg"
            alt="Music illustration"
            className={styles.icon}
          />
          <div className={styles.plan}>
            <p className={styles.name}>Annual Plan</p>
            <p className={styles.price}>$59.99/year</p>
          </div>
          <p className={styles.change}>Change</p>
        </div>
        <button className={styles["cta-payment"]} aria-label="Click to pay">
          Proceed to Payment
        </button>
        <button className={styles["cta-cancel"]} aria-label="Click to cancel">
          Cancel Order
        </button>
      </div>
    </main>
  );
};
