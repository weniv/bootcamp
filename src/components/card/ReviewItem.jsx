import Image from 'next/image';
import SVGStar from '@/svg/SVGStar';
import styles from './ReviewItem.module.scss';
export default function ReviewItem({ data }) {
  const { character, type, title, contents } = data;
  return (
    <li className={styles.card}>
      <Image
        width={86}
        height={68}
        src={`/images/${character}.png`}
        alt="수강생"
      />
      <p className={styles.type}>#{type}</p>

      <div className={styles.title_wrap}>
        <span className={styles.star}>
          <SVGStar />
          <span className="a11y-hidden">별점 5점</span>
        </span>
        <p className={styles.title}>"{title}"</p>
      </div>
      <div className={styles.content}>
        {contents.map((content, index) => (
          <p key={index}>{content} </p>
        ))}
      </div>
    </li>
  );
}
