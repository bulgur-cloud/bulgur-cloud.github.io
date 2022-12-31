import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/get-started/install"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhatIs() {
  return (
    <div className={clsx("container", styles.whatIs)}>
      <div>
        <h2>What is Bulgur Cloud?</h2>
        <p>
          Bulgur Cloud is a self-hostable cloud storage solution. You can upload
          and download files, organize them, and share them with others*.
          Everything stays on computers or servers you own, so you have complete
          control and trust over your data.
        </p>
        <div className={styles.subscript}>
          * Sharing not yet implemented. Bulgur Cloud is in early development.
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Bulgur Cloud, simple and delicious cloud storage and sharing."
    >
      <HomepageHeader />
      <main>
        <WhatIs />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
