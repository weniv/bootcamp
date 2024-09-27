"use client";
import { useEffect, useState } from "react";

import styles from "./CampInfo.module.scss";
import { handleClipBoard } from "@/utils/handleClipBoard";
import Btn from "../button/Btn";
import SVGShare from "../card/svg/SVGShare";

export default function CampInfo({ data }) {
  const [thisUrl, setThisUrl] = useState("");
  useEffect(() => {
    setThisUrl(window.document.location.href);
  }, []);

  return (
    <section className={styles["camp-info"]}>
      <h3 className="a11y-hidden">교육 정보</h3>
      <ul>
        <CampInfoItem title="모집 기간" content={data?.recruitmentPeriod} />
        <CampInfoItem
          title="교육 기간"
          content={[data?.trainingPeriod, data?.totalCurriculum, data?.time]}
        />
        <CampInfoItem title="교육 시간" content={data?.classTime} />
        <CampInfoItem title="교육 방식" content={data?.teaching} />
        <CampInfoItem title="모집 인원" content={data?.recruitePersonnel} />
        <CampInfoItem title="수강료" content={data?.price} type="price" />
      </ul>

      <div className={styles["btn-group"]}>
        <Btn
          onClick={() => {
            handleClipBoard(thisUrl);
          }}
        >
          <SVGShare />
          공유하기
        </Btn>
        <Btn href={data?.applyUrl} solid="true" target="_blank">
          신청하기
        </Btn>
      </div>
    </section>
  );
}

function CampInfoItem({ title, content, type }) {
  if (content) {
    return (
      <li>
        <span className={styles.tit}>{title}</span>

        <span className={type === "price" ? styles.price : ""}>
          {Array.isArray(content)
            ? content
                .filter((el) => el !== null && el !== undefined)
                .join(" | ")
            : content}
        </span>
      </li>
    );
  }
}
