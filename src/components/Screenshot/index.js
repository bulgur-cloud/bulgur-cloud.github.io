import React from "react";
import styles from "./styles.module.css";

export default function Screenshot() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mockWindowHeader}>
          <div className={styles.mockWindowHeaderButton} />
          <div className={styles.mockWindowHeaderButton} />
          <div className={styles.mockWindowHeaderButton} />
        </div>
        <div className={styles.mockWindow}>
          <img
            src={require("@site/static/img/homepage-screenshot.png").default}
          />
        </div>
      </div>
    </section>
  );
}
