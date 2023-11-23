'use client';
import { useState } from 'react';
import styles from './PageNav.module.scss';
import useIntersectionObservation from '@/utils/useIntersectionObservation';

export default function PageNav() {
  const [activeId, setActiveId] = useState('section1');
  useIntersectionObservation(setActiveId, '.section');

  const navList = [
    '캠프 소개',
    '후기',
    '수료생 혜택',
    '커리큘럼',
    '강사소개',
    'FAQ',
  ];

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
          <a href="#" target="_blank">
            신청하기
          </a>
        </li>
      </ul>
    </nav>
  );
}
