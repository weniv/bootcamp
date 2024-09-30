import Point from "@/components/detail/Point";
import ToggleCurriculumn from "@/components/detail/ToggleCurriculumn";
import React from "react";
import styles from "./Points.module.scss";

export default function Point1({ campData }) {
  return (
    <section>
      <div className={styles.title__container}>
        <Point number={1} />
        <p className="text-desc">주니어 프론트엔드 개발자라면 꼭 알아야 하는</p>
        <h4>
          <span className="fc-primary">핵.심.만 담은</span> 커리큘럼과
          함께합니다.
        </h4>
        <p>교육 기간 약 5개월 | 월~금 | 09:00 ~ 18:00(8시간)</p>
      </div>
      <ToggleCurriculumn data={campData?.curriculum} />
    </section>
  );
}
