"use client";
import Link from "next/link";
import styles from "./Card.module.scss";
import SVGCalendar from "./svg/SVGCalendar";

import BtnIcon from "../button/BtnIcon";
import SVGShare from "./svg/SVGShare";
import { handleClipBoard } from "@/utils/handleClipBoard";

import { noimg } from "@/utils/noimg";

export default function CardItem({ data, share, titleStart }) {
  const {
    url,
    image,
    image_m,
    type,
    title,
    subtitle,
    description,
    trainingPeriod,
    open,
  } = data;

  return (
    <article className={styles.item}>
      <picture>
        <source srcSet={image_m ? image_m : image} media="(max-width: 640px)" />
        <img
          width="380px"
          height="200px"
          src={image ? image : noimg}
          alt=""
          className={styles["item-thumbnail"]}
          loading="lazy"
        />
      </picture>

      <div className={styles["item-content"]}>
        <div className={styles["flex-container"]}>
          <p className={styles["item-content-tag"]}>{type}</p>
          {share && (
            <BtnIcon
              onClick={() => {
                handleClipBoard(url);
              }}
            >
              <SVGShare />
              <span className="a11y-hidden">주소복사</span>
            </BtnIcon>
          )}
        </div>
        <div>
          {titleStart === 4 ? (
            <>
              <h4 className={styles["item-content-title"]}>{title}</h4>
              {subtitle && (
                <h5 className={styles["item-content-subtitle"]}>{subtitle}</h5>
              )}
            </>
          ) : (
            <>
              <h3 className={styles["item-content-title"]}>{title}</h3>
              {subtitle && (
                <h4 className={styles["item-content-subtitle"]}>{subtitle}</h4>
              )}
            </>
          )}
        </div>

        <p className={styles["item-content-desc"]}>{description}</p>

        {trainingPeriod && (
          <p className={styles["item-content-period"]}>
            <SVGCalendar />
            <span className="a11y-hidden">수강기간</span>
            <time>{trainingPeriod}</time>
          </p>
        )}
      </div>
      <Link
        href={url}
        target={share || url.includes("http") ? "_blank" : "_self"}
        title={share || url.includes("http") ? "새창" : ""}
        onClick={(e) => {
          if (open === false && url.includes("http")) {
            alert("모집이 마감되었습니다");
            e.preventDefault();
          }
        }}
      >
        <span className="a11y-hidden">{title}로 이동하기</span>
      </Link>
    </article>
  );
}
