'use client';
import { useEffect, useState } from 'react';

import styles from './CampInfo.module.scss';
import { handleClipBoard } from '@/utils/handleClipBoard';
import Btn from '../button/Btn';
import SVGShare from '../card/svg/SVGShare';

export default function CampInfo({ data }) {
  const [thisUrl, setThisUrl] = useState('');
  useEffect(() => {
    setThisUrl(window.document.location.href);
  }, []);

  return (
    <section className={styles['camp-info']}>
      <h3 className="a11y-hidden">교육 정보</h3>
      <ul>
        <li>
          <span className={styles.tit}>모집 기간</span>
          <span>{data?.recruitmentPeriod}</span>
        </li>
        <li>
          <span className={styles.tit}>교육 기간</span>
          <span>{data?.trainingPeriod}</span>
        </li>
        <li>
          <span className={styles.tit}>교육 방식</span>
          <span>{data?.teaching}</span>
        </li>
        <li>
          <span className={styles.tit}>수강료</span>
          <span className={styles.price}>{data?.price}</span>
        </li>
      </ul>

      <div className={styles['btn-group']}>
        <Btn
          onClick={() => {
            handleClipBoard(thisUrl);
          }}>
          <SVGShare />
          공유하기
        </Btn>
        <Btn href={data?.applyUrl} solid="true" target="_blank">
          신청하기
        </Btn>
      </div>
    </section>
  );
}
