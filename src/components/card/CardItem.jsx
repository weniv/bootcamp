'use client';
import Link from 'next/link';
import styles from './Card.module.scss';
import SVGCalendar from './svg/SVGCalendar';

import BtnIcon from '../button/BtnIcon';
import SVGShare from './svg/SVGShare';
import { handleClipBoard } from '@/utils/handleClipBoard';

import Image from 'next/image';
const noimg = '/bootcamp/images/no-img.png';

export default function CardItem({ data, share, titleStart }) {
  const { url, image, type, title, description, recruitmentPeriod } = data;

  return (
    <article className={styles.item}>
      <Image
        width="380"
        height="200"
        src={image ? `/bootcamp${image}` : noimg}
        alt=""
        className={styles['item-thumbnail']}
      />
      <div className={styles['item-content']}>
        <div className={styles['flex-container']}>
          <p className={styles['item-content-tag']}>{type}</p>
          {share && (
            <BtnIcon
              onClick={() => {
                handleClipBoard(url);
              }}>
              <SVGShare />
              <span className="a11y-hidden">주소복사</span>
            </BtnIcon>
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
