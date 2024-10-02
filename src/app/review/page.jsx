import SVGTalk from "@/svg/SVGTalk";
import styles from "./page.module.scss";

import ReviewItem from "@/components/card/ReviewItem";

export const metadata = {
  title: "수강생 후기 | 위니브 부트캠프",
  description:
    "위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.",
  openGraph: {
    title: "수강생 후기 | 위니브 부트캠프",
    description:
      "위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.",
    url: "https://bootcamp.weniv.co.kr",
    type: "website",
    siteName: "위니브 부트캠프",
    images: ["/images/OG.png"],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "수강생 후기 | 위니브 부트캠프",
    description:
      "위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.",
    images: ["/images/OG.png"],
  },
};
export default function SubPage() {
  const reviews = require("/public/data/reviews.json");

  return (
    <>
      <span className={styles.icon}>
        <SVGTalk color="primary" />
      </span>
      <h2 className={styles.title}>수강생 후기</h2>
      <p className={styles.desc}>
        위니브의 부트캠프를 수강했던 수강생의 생생한 후기를 살펴보세요.
      </p>
      <ul className={styles.container}>
        {reviews.map((review, i) => (
          <ReviewItem key={i} data={review} />
        ))}
      </ul>
    </>
  );
}
