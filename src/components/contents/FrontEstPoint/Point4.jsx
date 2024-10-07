import Point from "@/components/detail/Point";
import React from "react";
import styles from "./Points.module.scss";
import Link from "next/link";

export default function Point4() {
  return (
    <section className={styles.container}>
      <div className={styles.title__container}>
        <Point number={4} />
        <p className={styles["text-desc"]}>
          교육 과정이 끝나도 걱정 마세요! 오직 부트캠프 수강생에게만 드리는 혜택
        </p>
        <h4>
          약 100만 원 상당 VOD 강의 <br />
          30여 개를<span className="fc-primary">&nbsp;무료</span>로
          제공합니다(소장 가능)
        </h4>
      </div>
      <img
        src="/images/camps/free-VOD.webp"
        alt=""
        loading="lazy"
        width="790px"
        height="402px"
      />
      <p className="mt-52">
        <strong>
          모든 수강생에게는
          <span className="fc-primary"> 제주코딩베이스캠프</span>(인프런)의
          유·무료 강의 30여 개가 제공됩니다.
        </strong>
        &nbsp;수강 후에도 VOD 강의를 통해 지속적으로 복습하며 학습을 이어나갈 수
        있습니다.
      </p>
      <Link
        href="https://www.inflearn.com/users/170213/@jejucoding"
        className={styles.lecture__btn}
        title={"_blank"}
        target="_blank"
      >
        제주코딩베이스캠프 강의 살펴보기
      </Link>
    </section>
  );
}
