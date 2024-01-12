import Image from 'next/image';
import styles from './Need.module.scss';

export default function Need({ title, contents }) {
  return (
    <section>
      <div className="header">
        <p>{title}는</p>
        <h4>이런분들에게 꼭! 필요합니다</h4>
      </div>
      <ul className={styles.flex_ul}>
        {contents.map((content, i) => (
          <li key={i}>
            <Image
              width={160}
              height={160}
              src={`/images/camps/img${i + 1}.webp`}
              alt=""
            />
            {content}
          </li>
        ))}
      </ul>
    </section>
  );
}
