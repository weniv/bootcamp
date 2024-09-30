"use client";
import { useRef } from "react";

import styles from "./ToggleList.module.scss";
import SVGArrowDown from "./svg/SVGArrowDown";
import classNames from "classnames";

export default function ToggleCurriculumn({ data }) {
  const olRef = useRef();

  const toggleAnswer = (e) => {
    const target = e.currentTarget;

    if (target.textContent === "열기") {
      target.closest("li").classList.add(styles.active);
      target.classList.add(styles.active);
      target.querySelector("span").textContent = "닫기";
    } else {
      target.closest("li").classList.remove(styles.active);
      target.querySelector("span").textContent = "열기";
      target.classList.remove(styles.active);
    }
  };

  if (data?.length > 0) {
    return (
      <ol
        ref={olRef}
        className={classNames(styles.toggleList, styles.curriculum)}
      >
        {data.map((cont, index) => (
          <li key={index}>
            <p className={styles.list__title}>
              <span className={styles.p}>{cont.period}</span>
              <span className={styles["p-subject"]}>{cont.subject}</span>
            </p>
            <p className={classNames("cont", styles.list__content)}>
              <span className={styles.content__title}>강의 내용</span>
              {cont.content}
            </p>{" "}
            <button
              value={index}
              type="button"
              className={styles.btnToggle}
              onClick={toggleAnswer}
            >
              <SVGArrowDown />
              <span className="a11y-hidden">열기</span>
            </button>
          </li>
        ))}
      </ol>
    );
  }
}
