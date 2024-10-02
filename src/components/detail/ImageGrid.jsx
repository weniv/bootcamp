import React from "react";
import styles from "./ImageGrid.module.scss";
import SVGCheckFill from "@/svg/SVGCheckFill";

export default function ImageGrid({ data, type = "check" }) {
  return (
    <ul className={`${styles.container} ${styles[type]}`}>
      {type === "check" && (
        <>
          {data.map((el, idx) => (
            <li class={styles.grid__item}>
              <SVGCheckFill />
              <strong>{el.content}</strong>
              <div className={styles.img__container}>
                <img src={el.img} alt="" />
              </div>
            </li>
          ))}
        </>
      )}
      {type === "figma" && (
        <>
          {data.map((el, idx) => (
            <li class={styles.grid__item}>
              <div className={styles.img__container}>
                <img src={el.img} alt="" />
              </div>
              <strong>{el.content}</strong>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
