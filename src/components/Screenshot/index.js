import React from "react";
import styles from "./styles.module.css";

export default function Screenshot() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mockWindowHeader}>
          <div className={styles.mockWindowHeaderCircle} />
          <div className={styles.mockWindowHeaderCircle} />
          <div className={styles.mockWindowHeaderCircle} />
        </div>
        <div className={styles.mockWindow}>
          <img
            className={styles.screenshot}
            src={require("@site/static/img/homepage-screenshot.png").default}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.mockPhone}>
          <img
            className={`${styles.screenshot} ${styles.mockPhoneScreen}`}
            src={require("@site/static/img/homepage-phone.png").default}
          />
        </div>
      </div>
    </section>
  );
}
