import React from "react";
import styles from "./FrontEst.module.scss";
import SVGCode from "@/svg/SVGCode";
import SVGWall from "@/svg/SVGWall";
import SVGPerson from "@/svg/SVGPerson";

export default function Competition() {
  return (
    <section className={styles.section}>
      <div className="header">
        <p class={styles["text-desc"]}>프론트엔드 개발자가 되기 위해서는</p>
        <h4 className={styles.tit4}>
          다음 세 가지의 <span class="fc-primary">핵심 역량</span>이 반드시
          필요합니다
        </h4>
      </div>
      <ul className="bg-ul">
        <li>
          <SVGCode />
          <p>
            HTML, CSS, JavaScript와 같은
            <span className="fw-bold"> 웹 기본 언어</span>
          </p>
        </li>
        <li>
          <SVGWall />
          <p>
            디자이너와 협업하여
            <span className="fw-bold">
              &nbsp;디자인을 실제 화면으로 구현할 수 있는 역량
            </span>
          </p>
        </li>
        <li>
          <SVGPerson />
          <p>
            모든 사용자가 불편 없이 서비스를 이용할 수 있도록 하는
            <span className="fw-bold"> 웹 접근성에 대한 이해</span>
          </p>
        </li>
      </ul>
    </section>
  );
}
