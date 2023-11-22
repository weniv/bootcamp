import InfoSection from '../InfoSection';

export default function TeacherDetail({ name }) {
  const noimg = '/images/no-img.png';
  const data = require('/public/data/teachers.json')[name];

  return (
    <InfoSection img={data?.image ? data?.image : noimg}>
      <h3>
        {data?.korName} <span>{data?.engName}</span>
      </h3>
      <ul>
        {data?.career.now.map((career) => (
          <li>
            <span>現</span> {career}
          </li>
        ))}
        {data?.career.prev.map((career) => (
          <li>
            <span>前</span> {career}
          </li>
        ))}
      </ul>
      <h4>강사 이력</h4>
      {data?.education.map((edu) => (
        <li>{edu}</li>
      ))}
    </InfoSection>
  );
}
