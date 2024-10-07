import Point from "@/components/detail/Point";
import React from "react";
import styles from "./Points.module.scss";
import ImageGrid from "@/components/detail/ImageGrid";

export default function Point2({ campData }) {
  return (
    <section>
      <div className={styles.title__container}>
        <Point number={2} />
        <p className={styles["text-desc"]}>
          실무와 동일한 환경에서 디자인 구현 능력을 키울 수 있도록
        </p>
        <h4>
          <span className="fc-primary">*피그마(Figma)</span> 디자인 파일을
          제공합니다
        </h4>
        <p className={styles.text_additional}>
          *피그마(Figma): 디자이너와 개발자가 UI/UX 디자인 작업을 하며 협업하는
          데 사용되는 웹 기반 도구
        </p>
        <ImageGrid data={campData.figma} type="figma" />
      </div>
    </section>
  );
}
