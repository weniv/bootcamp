import React from "react";
import SVGTalk from "@/svg/SVGTalk";
import styles from "./Review.module.scss";
import ReviewItem from "@/components/card/ReviewItem";
import Link from "next/link";

export default function Review({ content }) {
  return (
    <>
      <h2 className="a11y-hidden">교육 수료생 후기</h2>
      <p className={styles.tit3}>
        교육 수료생의 후기가
        <br /> 위니브의 교육 퀄리티를 증명합니다
      </p>
      <ul className={styles.container}>
        {content.map((review, i) => (
          <ReviewItem key={i} data={review} />
        ))}
      </ul>

      <Link
        href="/review"
        styles
        className={styles.lecture__btn}
        title={"_blank"}
        target="_blank"
      >
        수료생 후기 더 보러 가기
      </Link>
    </>
  );
}
