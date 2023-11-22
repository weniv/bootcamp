import styles from './TeacherInfo.module.scss';

export default function TeacherInfo({ name }) {
  const noimg = '/images/no-img.png';
  const data = require('/public/data/teachers.json')[name];
  return (
    <section className={styles['teacher-info']}>
      <h3 className="a11y-hidden">강사 정보</h3>
      <img src={data?.image ? data?.image : noimg} alt="" />
      <p>
        <strong>
          {data?.korName} {data?.engName}
        </strong>
        <span>강사 | 주식회사 위니브 {data?.position}</span>
      </p>
    </section>
  );
}
