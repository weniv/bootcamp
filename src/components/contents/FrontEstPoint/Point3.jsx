import Point from "@/components/detail/Point";
import React from "react";
import styles from "./Points.module.scss";

export default function Point3() {
  return (
    <section>
      <div className={styles.title__container}>
        <Point number={3} />
        <h4>
          타 부트캠프에서는 얻을 수 없는
          <br />
          <span className="fc-primary">특별한 프로젝트 경험을 제공합니다.</span>
        </h4>
      </div>
    </section>
  );
}
