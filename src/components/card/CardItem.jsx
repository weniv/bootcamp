'use client';
import Link from 'next/link';
import styles from './Card.module.scss';
import SVGCalendar from './svg/SVGCalendar';

import BtnIcon from '../button/BtnIcon';
import SVGShare from './svg/SVGShare';
import { handleClipBoard } from '@/utils/handleClipBoard';

import { noimg } from '@/utils/noimg';

export default function CardItem({ data, share, titleStart }) {
  const { url, image, type, title, subtitle, description, trainingPeriod } =
    data;

  return (
    <article className={styles.item}>
      <img
        width="380"
        height="200"
        src={image ? image : noimg}
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
        <div>
          {titleStart === 4 ? (
            <>
              <h4 className={styles['item-content-title']}>{title}</h4>
              {subtitle && (
                <h5 className={styles['item-content-subtitle']}>{subtitle}</h5>
              )}
            </>
          ) : (
            <>
              <h3 className={styles['item-content-title']}>{title}</h3>
              {subtitle && (
                <h4 className={styles['item-content-subtitle']}>{subtitle}</h4>
              )}
            </>
          )}
        </div>

        <p className={styles['item-content-desc']}>{description}</p>

        {trainingPeriod && (
          <p className={styles['item-content-period']}>
            <SVGCalendar />
            <span className="a11y-hidden">수강기간</span>
            <time>{trainingPeriod}</time>
          </p>
        )}
      </div>
      <Link
        href={url}
        target={share ? '_blank' : '_self'}
        title={share ? '새창' : ''}>
        <span className="a11y-hidden">{title}로 이동하기</span>
      </Link>
    </article>
  );
}
