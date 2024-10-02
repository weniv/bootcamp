import React from "react";
import styles from "./FrontEst.module.scss";
import SVGCheckOutline from "@/svg/SVGCheckOutline";

export default function Roadmap() {
  const roadmap = require("/public/data/ESTFEROadmap.json");
  return (
    <>
      <section className={styles.section}>
        <div className="header">
          <h4 className={styles.tit4}>
            5개월간의 몰입 교육을 통해 <br />
            <span className="fc-primary">프론트엔드 개발자 핵심 역량</span>을
            탄탄히 쌓아보세요
          </h4>
        </div>
        <section className={styles.roadmap__section}>
          <div class={styles.header}>
            <p class={`${styles["text-desc"]} ${styles["mb-8"]}`}>
              이스트소프트 X 위니브
            </p>
            <h5 className={styles.tit5}>
              프론트엔드 개발자 양성 과정 오르미
              <span className="fc-primary"> 로드맵</span>
            </h5>
          </div>
          <ol className="step arrow">
            {roadmap.map((el) => (
              <RoadmapItem
                month={el.month}
                title={el.title}
                content={el.content}
              />
            ))}
          </ol>
        </section>
      </section>
    </>
  );
}

function RoadmapItem({ month, title, content }) {
  return (
    <li className={styles.roadmap_item}>
      <div className={styles.roadmap_title}>
        <span className="bg-primary">{month}달 차</span>
        <strong>{title}</strong>
      </div>
      <ul className={styles.roadmap__content}>
        {content.map((cont, index) => {
          return (
            <li key={index}>
              <strong className={styles.content__title}>
                <SVGCheckOutline />
                {cont.title}
              </strong>
              <p>{cont.desc}</p>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
