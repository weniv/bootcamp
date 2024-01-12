import styles from './TeacherInfo.module.scss';
import { noimg } from '@/utils/noimg';

export default function TeacherInfo({ name }) {
  const data = require('/public/data/teachers.json')[name];
  return (
    <section className={styles['teacher-info']}>
      <h3 className="a11y-hidden">강사 정보</h3>
      <img src={data?.image_m ? data?.image_m : noimg} alt="" loading="lazy" />
      <p>
        <strong>
          {data?.korName} {data?.engName}
        </strong>
        <span>강사 | 주식회사 위니브 {data?.position}</span>
      </p>
    </section>
  );
}
