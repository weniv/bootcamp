import React from "react";
import styles from "./Point.module.scss";

export default function Point({ number }) {
  return <div className={styles.container}>Point #{number}</div>;
}
