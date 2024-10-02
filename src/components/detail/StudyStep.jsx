import React from "react";
import styles from "./FrontEst.module.scss";

export default function StudyStep() {
  return (
    <>
      <section>
        <div className="header">
          <p class={styles["text-desc"]}>
            비전공자, 무경력자, 직무 전환자라 개발이 처음이신가요?
          </p>
          <h4 className={styles.tit4}>
            프론트엔드 개발자 취업에 성공한 비전공자
            <br />
            <span class="fc-primary">이 순서로 공부했어요</span>
          </h4>
        </div>
        <ol className={`step ${styles.fs__medium}`}>
          <li>
            <p>
              <span className="fw-bold fc-primary">
                검증된 커리큘럼, 검증된 강사님의&nbsp;
              </span>
              LIVE 강의로
              <br />
              <span className="fw-bold">프론트엔드 기초 지식을 학습했어요</span>
            </p>
          </li>
          <li>
            <p>
              API 명세를 활용해
              <span className="fw-bold fc-primary">
                &nbsp;실제 동작하는 서비스를 개발
              </span>
              해 볼 수 있는
              <br />
              <span className="fw-bold">’실전 팀 프로젝트’를 진행했어요</span>
            </p>
          </li>
          <li>
            <p>
              다양한
              <span className="fw-bold fc-primary">
                &nbsp;웹/앱 서비스 UI 디자인을 직접 구현
              </span>
              해보면서 <br />
              프론트엔드
              <span className="fw-bold">
                코딩 테스트(구현 테스트)를 대비했어요
              </span>
            </p>
          </li>
          <li>
            <p>
              오픈소스/책 출판 프로젝트, 컨퍼런스 연사 참여 등 다양한 경험으로
              <br />
              남들과 다른
              <span className="fw-bold">
                &nbsp;차별화된 포트폴리오 제작했어요
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="fw-bold fc-primary">현직 개발자 멘토 </span>에게
              <span className="fw-bold">&nbsp;이력서 피드백을 받았어요</span>
            </p>
          </li>
          <li className="bg-primary fw-bold">
            <p>프론트엔드 개발자로 취업 성공!</p>
          </li>
        </ol>
      </section>
    </>
  );
}
