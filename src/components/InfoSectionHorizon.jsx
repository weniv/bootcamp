import classNames from "classnames";
import styles from "./InfoSection.module.scss";

export default function InfoSectionHorizon({ img, img_m, alt, children }) {
  return (
    <div className={classNames("info-box-horizon", styles["info-box-horizon"])}>
      <picture>
        <source srcSet={img_m} media="(max-width: 640px)" />
        <img src={img} alt={alt ? alt : ""} loading="lazy" />
      </picture>

      <div>{children}</div>
    </div>
  );
}
