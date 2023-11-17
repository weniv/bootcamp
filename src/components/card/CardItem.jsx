import Link from 'next/link';
import styles from './Card.module.scss';
import SVGCalendar from './SVGCalendar';

import Img from '../Img';

export default function CardItem({ data }) {
  const { link, thumbnail, tag, title, description, recruitmentPeriod } = data;

  return (
    <article className={styles.item}>
      <Link href={link}>
        <Img src={thumbnail} className={styles['item-thumbnail']} />
        <div className={styles['item-content']}>
          <p className={styles['item-content-tag']}>{tag}</p>
          <h3 className={styles['item-content-title']}>{title}</h3>
          <p className={styles['item-content-desc']}>{description}</p>
          <p className={styles['item-content-period']}>
            <SVGCalendar />
            <span className="a11y-hidden">수강기간</span>
            <time>{recruitmentPeriod}</time>
          </p>
        </div>
      </Link>
    </article>
  );
}
