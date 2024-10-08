import CampInfo from "@/components/detail/CampInfo";

import PageNav from "@/components/detail/PageNav";
import TeacherInfo from "@/components/detail/TeacherInfo";

import styles from "./page.module.scss";
import "./contents.scss";

import classNames from "classnames";

import OwnCampContent from "@/components/contents/OwnCampContent";
import FrontendEst from "@/components/contents/FrontendEst";

export async function generateStaticParams() {
  return [
    { id: "python" },
    { id: "javascript" },
    { id: "react" },
    { id: "frontend-est" },
  ];
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const campData = require("/public/data/camp.json").find(
    (camp) => camp.url === `/${id}`
  );

  let title = " ";
  switch (id) {
    case "python":
      title = "파이썬 | ";
      break;
    case "javascript":
      title = "자바스크립트 | ";
      break;
    case "react":
      title = "리액트 | ";
      break;
    case "frontend-est":
      title = "프론트엔드 오르미 | 이스트소프트 X ";
      break;
  }

  return {
    title: `${title}위니브 부트캠프`,
    description: campData.description,
    siteName: `${title}위니브 부트캠프`,
    openGraph: {
      title: `${title}위니브 부트캠프`,
      description: campData.description,
      url: `https://bootcamp.weniv.co.kr/${id}`,
      type: "website",
      images: [campData.image],
      locale: "ko_KR",
    },
    twitter: {
      card: "summary",
      title: `${title}위니브 부트캠프`,
      description: campData.description,
      images: [campData.image],
    },
  };
}

export default function SubPage({ params }) {
  const { id } = params;

  const campData = require("/public/data/camp.json").find(
    (camp) => camp.url === `/${id}`
  );

  return (
    <div className={classNames("sub-max-width", styles.camp)}>
      <section>
        <picture>
          <source
            srcSet={`/images/camps${campData?.url}/thumbnail_640.webp`}
            media="(max-width: 640px)"
          />
          <img
            className={styles.camp__thumnail}
            src={`/images/camps${campData?.url}/thumbnail.webp`}
            rel="preload"
            alt=""
          />
        </picture>

        <h2 className={styles.camp__title}>
          {campData?.title}
          {campData?.subtitle && (
            <span className={styles.camp__subtitle}>{campData?.subtitle}</span>
          )}
        </h2>

        <p className={styles.camp__desc}>{campData?.description}</p>

        {campData?.teacher && <TeacherInfo name={campData?.teacher} />}
        <CampInfo data={campData} />
      </section>
      <PageNav url={campData?.applyUrl} nav={campData?.nav} />

      <div className="camp_contents">
        {id === "frontend-est" ? (
          <FrontendEst id={id} campData={campData} />
        ) : (
          <OwnCampContent id={id} campData={campData} />
        )}
      </div>
    </div>
  );
}
