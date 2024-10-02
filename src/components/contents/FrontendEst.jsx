import React from "react";
import ToggleList from "@/components/detail/ToggleList";
import TeacherDetail from "@/components/detail/TeacherDetail";
import TeacherDetailHorizon from "@/components/detail/TeacherDetailHorizon";
import styles from "./FrontendEst.module.scss";
import LearningCard from "../detail/LearningCard";
import LiveFrontEst from "../detail/LiveFrontEst";

import NeedFrontEst from "../detail/NeedFrontEst";
import SVGTobe from "@/svg/SVGTobe";
import Point1 from "./FrontEstPoint/Point1";
import Point2 from "./FrontEstPoint/Point2";
import Point3 from "./FrontEstPoint/Point3";
import Point4 from "./FrontEstPoint/Point4";
import Review from "../detail/Review";
import BenefitFrontEst from "../detail/BenefitFrontEst";
import StudyStep from "../detail/StudyStep";
import FEEst from "../detail/FEEst";
import Competition from "../detail/Competition";
import Roadmap from "../detail/Roadmap";
import KDT100Est from "../detail/KDT100Est";

export default function FrontendEst({ id, campData }) {
  return (
    <>
      <section id="section1" className={`className ${styles.top_section}`}>
        <h3 className="a11y-hidden">캠프 소개</h3>
        <FEEst />
        <Competition />
        <div className={`m-52 ${styles.center}`}>
          <SVGTobe width={90} height={36} />
        </div>
        <Roadmap />
        <hr className="dashed m-52" />
        <StudyStep />
        <div className={`m-52 ${styles.center}`}>
          <SVGTobe width={90} height={36} />
        </div>
        <BenefitFrontEst type="check" content={campData.benefit} />
        <hr className="dashed m-52" />
        <KDT100Est />
        <Review content={campData?.review} />
      </section>
      <section id="section2" className={`section ${styles["curri-section"]}`}>
        <h3 className="a11y-hidden">커리큘럼</h3>
        <hr className="dashed" />
        <NeedFrontEst contents={campData.need} />
        <div className={`${styles.center}`}>
          <SVGTobe width={90} height={36} />
        </div>
        <Point1 campData={campData} />
        <Point2 campData={campData} />
        <Point3 />
        <Point4 />
        <hr className="dashed" />
        <LiveFrontEst />
        <hr className="dashed" />
        <LearningCard />
      </section>

      <hr />
      <section id="section3" className="section">
        <h3 className="title2 tac">강사 소개</h3>
        <p className="p-des">
          "부트캠프 수료율 100%의 비결은 수강생을 향한 ‘진심’입니다."
        </p>
        <ul className={styles["teacher-group"]}>
          {campData?.teachers
            .filter((teacher) => teacher.type === "main")
            .map((teacher, index) => (
              <TeacherDetail
                key={index}
                name={teacher?.name}
                detail={teacher?.detail}
                type={teacher?.type}
              />
            ))}
          {campData?.teachers
            .filter((teacher) => teacher.type === "sub")
            .map((teacher, index) => (
              <TeacherDetailHorizon
                key={index}
                name={teacher?.name}
                detail={teacher?.detail}
                type={teacher?.type}
              />
            ))}
        </ul>
      </section>
      <hr />
      <section id="section4" className="section">
        <h3 className="a11y-hidden">지원 절차 및 안내</h3>
        <h3 className="title2 tac">지원 절차</h3>
        <ol className="step fw-bold recruit">
          <li>
            서류 접수
            <span className="desc">2024.08.12(월) ~ 10.10(목) 23:59PM</span>
          </li>
          <li>서류 접수 후 3일 이내 결과 안내</li>
          <li>내일배움카드 발급 및 HRD-Net 수강 신청</li>
          <li>
            교육생 온보딩
            <span className="desc">(개강 1주일 전 온보딩 메일 발송 예정)</span>
          </li>
          <li>
            <span className="fc-primary">개강 및 오리엔테이션</span>
            <span className="desc">2024.10.23(월)</span>
          </li>
        </ol>
        <h3 className="title2 tac mt-6">지원 안내</h3>
        <ToggleList data={campData?.recruitment} type="recruitment" />
      </section>

      <section id="section5" className="section">
        <h3 className="title2 tac">FAQ</h3>
        <ToggleList data={campData?.faq} type="faq" />
      </section>
    </>
  );
}
