import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Self Host",
    Svg: require("@site/static/img/undraw_project_complete_lwss.svg").default,
    description: (
      <>
        Keep your files under your own control by hosting Bulgur Cloud yourself.
        Bulgur Cloud has no external dependencies, just a single executable
        file. Or a single, small container. No databases, caches, or services to
        configure.
      </>
    ),
  },
  {
    title: "Small but Mighty",
    Svg: require("@site/static/img/undraw_maker_launch_re_rq81.svg").default,
    description: (
      <>
        Bulgur Cloud uses little in terms of resources, but delivers powerful
        features. Common operations complete in a few milliseconds, so you never
        have to wait.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/undraw_programmer_re_owql.svg").default,
    description: (
      <>
        Bulgur Cloud is open source, licensed under the AGLP license. You can
        read the source code, make changes, and contribute to the project.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
