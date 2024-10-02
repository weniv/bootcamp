import BaseItem from "../card/BaseItem";
import styles from "./BenefitFrontEst.module.scss";
import ImageGrid from "./ImageGrid";

export default function BenefitFrontEst(props) {
  const { type, content } = props;

  return (
    <>
      <section>
        <div className="header">
          <p class={styles["text-desc"]}>
            ‘프론트엔드 개발자 양성 과정 오르미’ 부트캠프에서는
          </p>
          <h4 className={styles.tit4}>
            LIVE로 진행되는 탄탄한 기초/실무 교육, <br />
            풍부한 VOD 콘텐츠와 차별화된 프로젝트 경험까지 <br />
            <span className="fc-primary">한.번.에 다 얻을 수 있습니다</span>
          </h4>
        </div>
        <ImageGrid type={type} data={content} />
      </section>
    </>
  );
}
