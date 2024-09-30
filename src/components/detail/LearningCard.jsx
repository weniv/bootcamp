import React from "react";
import styles from "./LearningCard.module.scss";
import SVGCheck from "@/svg/SVGCheck";

export default function LearningCard() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <p className="fc-text">수강료 전액 국비 지원</p>
        <h4 className="tit4">내일배움카드란?</h4>
      </div>
      <div className={styles.callout}>
        <SVGCheck />
        <p className="fc-primary">
          본 교육 과정은 내일배움카드를 사용할 수 있어{" "}
          <strong>교육비를 전액 지원받아 수강할 수 있습니다.</strong>
        </p>
      </div>
      <p>
        내일배움카드는 고용노동부에서 제공하는 직업 능력 개발 카드로, 구직자와
        재직자가 직무 능력 향상을 위해 직업 훈련을 받을 수 있도록 지원하는
        제도입니다.
        <br />
        <br />
        내일배움카드를 통해 다양한 교육 과정에서 최대 100%의 훈련비를 지원받을
        수 있어, 개인의 경력 개발과 취업 준비를 효과적으로 도울 수 있습니다.
        <br />
        <br />
        발급 신청 및 자세한 발급 방법은{" "}
        <a href="https://www.work24.go.kr/cm/main.do">
          고용노동부 직업훈련 포털
        </a>
        을 참고해 주세요.
      </p>
    </div>
  );
}
