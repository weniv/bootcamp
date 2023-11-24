'use client';
import Link from 'next/link';
import styles from './Card.module.scss';
import SVGCalendar from './svg/SVGCalendar';

import Img from '../Img';
import BtnIcon from '../button/BtnIcon';
import SVGShare from './svg/SVGShare';
import { handleClipBoard } from '@/utils/handleClipBoard';

export default function CardItem({ data, share, titleStart }) {
  const { url, image, type, title, description, recruitmentPeriod } = data;

  return (
    <article className={styles.item}>
      <Img src={image ? image : null} className={styles['item-thumbnail']} />
      <div className={styles['item-content']}>
        <div className={styles['flex-container']}>
          <p className={styles['item-content-tag']}>{type}</p>
          {share && (
            <BtnIcon
              children={<SVGShare />}
              onClick={() => {
                handleClipBoard(url);
              }}
            />
          )}
        </div>
        {titleStart === 4 ? (
          <h4 className={styles['item-content-title']}>{title}</h4>
        ) : (
          <h3 className={styles['item-content-title']}>{title}</h3>
        )}

        <p className={styles['item-content-desc']}>{description}</p>

        {recruitmentPeriod && (
          <p className={styles['item-content-period']}>
            <SVGCalendar />
            <span className="a11y-hidden">수강기간</span>
            <time>{recruitmentPeriod}</time>
          </p>
        )}
      </div>
      <Link href={url} target={share ? '_blank' : '_self'}>
        <span className="a11y-hidden">{title}로 이동하기</span>
      </Link>
    </article>
  );
}
