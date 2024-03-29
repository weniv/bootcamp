import { noimg } from '@/utils/noimg';
import InfoSection from '../InfoSection';

export default function TeacherDetail({ name }) {
  const data = require('/public/data/teachers.json')[name];

  return (
    <InfoSection
      img={data?.image ? data?.image : noimg}
      img_m={data?.image_m ? data?.image_m : data?.image}>
      <h4 className="tit3">
        {data?.korName} <span>{data?.engName}</span>
      </h4>
      <ul>
        {data?.career.now.map((career, index) => (
          <li key={index}>
            <span className="fc-primary">現</span> {career}
          </li>
        ))}
        {data?.career.prev.map((career, index) => (
          <li key={index}>
            <span className="fc-gray3">前</span> {career}
          </li>
        ))}
      </ul>
      <h5>강사 이력</h5>
      <ul>
        {data?.education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
    </InfoSection>
  );
}
