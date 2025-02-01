// 404Page.js
import React from "react";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.code}>OOPS !</span>
          <span className={styles.companyName}>Knot Perfect</span>
        </div>
        <div className={styles.animation}>
          <div className={styles.bouncingBox}>404</div>
        </div>
        <h1>Oops, you've encountered an error!</h1>
        <p>Looks like the page you are trying to visit doesn't exist.</p>
        <button className={styles.button} onClick={() => (window.location.href = "/")}>
          Take Me Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

