import React from "react";
import styles from "./styles.module.css";

export default function Screenshot() {
  return (
    <section className={styles.section}>
      <h2>Many themes to choose from</h2>
      <img
        className={styles.screenshot}
        src={require("@site/static/img/theme-showcase.png").default}
      />
    </section>
  );
}
