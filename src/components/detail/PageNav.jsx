'use client';
import { useState } from 'react';
import styles from './PageNav.module.scss';
import useIntersectionObservation from '@/utils/useIntersectionObservation';
import SVGArrow from '@/svg/SVGArrow';

export default function PageNav({ url }) {
  const [activeId, setActiveId] = useState('section1');
  useIntersectionObservation(setActiveId, '.section');

  const navList = ['캠프 소개', '수료생 혜택', '커리큘럼', '강사소개', 'FAQ'];

  return (
    <nav className={styles.nav}>
      <ul>
        {navList.map((list, index) => (
          <li key={index}>
            <a
              href={`#section${index + 1}`}
              className={
                activeId === `section${index + 1}` ? styles.active : ''
              }>
              {list}
            </a>
          </li>
        ))}
        <li>
          <a href={url} target="_blank" title="새창">
            신청하기
            <SVGArrow color="primary" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
