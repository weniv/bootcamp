import { noimg } from "@/utils/noimg";
import InfoSectionHorizon from "../InfoSectionHorizon";

export default function TeacherDetailHorizon({ name, detail }) {
  const data = require("/public/data/teachers.json")[name];

  return (
    <InfoSectionHorizon
      img={detail?.image ? detail?.image : data?.image ? data?.image : noimg}
      img_m={
        detail?.image_m
          ? detail?.image_m
          : data?.image_m
          ? data?.image_m
          : data?.image
      }
    >
      <h4 className="tit3">
        {data?.korName}
        <span className="sub-name">
          {detail?.position ? detail?.position : data?.engName}
        </span>
      </h4>
      <ul>
        {detail?.career?.now
          ? detail?.career?.now?.map((career, index) => (
              <li key={index}>
                <span className="fc-primary">現</span> {career}
              </li>
            ))
          : data?.career.now?.map((career, index) => (
              <li key={index}>
                <span className="fc-primary">現</span> {career}
              </li>
            ))}
        {detail?.career?.now
          ? detail?.career?.prev?.map((career, index) => (
              <li key={index}>
                <span className="fc-primary">現</span> {career}
              </li>
            ))
          : data?.career.prev?.map((career, index) => (
              <li key={index}>
                <span className="fc-gray3">前</span> {career}
              </li>
            ))}
      </ul>
    </InfoSectionHorizon>
  );
}