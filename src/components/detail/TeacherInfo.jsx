import Image from 'next/image';
import styles from './TeacherInfo.module.scss';
import { noimg } from '@/utils/noimg';

export default function TeacherInfo({ name }) {
  const data = require('/public/data/teachers.json')[name];
  return (
    <section className={styles['teacher-info']}>
      <h3 className="a11y-hidden">강사 정보</h3>
      <Image
        width={46}
        height={46}
        src={data?.image ? data?.image : noimg}
        alt=""
      />
      <p>
        <strong>
          {data?.korName} {data?.engName}
        </strong>
        <span>강사 | 주식회사 위니브 {data?.position}</span>
      </p>
    </section>
  );
}
