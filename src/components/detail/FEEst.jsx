import React from "react";
import styles from "./FrontEst.module.scss";

export default function FEEst() {
  return (
    <>
      <section>
        <div className="header">
          <p class={styles["text-desc"]}>프론트엔드 개발자란?</p>
          <h4 className={styles.tit4}>
            웹/앱 서비스에서
            <span class="fc-primary">사용자가 눈으로 보는 영역</span>을
            <br />
            구축하고, 기능을 구현하는 개발자입니다
          </h4>
        </div>
        <img src="/images/camps/weniv-world.webp" alt="" />
      </section>
    </>
  );
}
