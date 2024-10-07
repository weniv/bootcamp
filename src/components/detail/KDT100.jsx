import styles from "./KDT100.module.scss";

export default function KDT100() {
  return (
    <section>
      <h4 className="title">
        KDT 100% 수료율 달성 신화를 만든
        <br />
        위니브 부트캠프와 함께하세요
      </h4>
      <ul className={styles.box_ul}>
        <li>
          위니브 누적 수강생
          <strong>7만+</strong>
        </li>
        <li>
          최고 수료율
          <strong>100%</strong>
        </li>
        <li>
          수강생 최고 평균 만족도
          <strong>♥ 4.9</strong>
        </li>
      </ul>

      <blockquote className={styles.blockquote}>
        <h5 className="title">
          대한민국에서 탑 레벨 수준의
          <br />
          전문강사 그룹입니다
        </h5>
        <p>
          위니브의 강사진들은 수강생의 성장에 대한 진심을 바탕으로 강의와
          이벤트를 매우 효과적으로 운영합니다. 대한민국에서 탑 레벨 수준의
          전문강사 그룹입니다. 단순하게 강의를 쳐내기보다 강의를 통해
          <strong>
            &nbsp;수강생들이 개발자로 자라날 수 있도록 가장 효과적인 전략을
            펼쳐냅니다.
          </strong>
        </p>

        <footer>- (전) 멋쟁이사자처럼 교육사업 담당자 -</footer>
      </blockquote>
    </section>
  );
}
