'use client';
import { useState } from 'react';
import Banner from '@/components/banner/Banner';
import CardList from '@/components/card/CardList';
import CategoryList from '@/components/category/CategoryList';

export const CATEGORIES = [
  { id: 0, text: '전체' },
  { id: 1, text: '프론트엔드' },
  { id: 2, text: '백엔드' },
  { id: 3, text: '데이터분석' },
  { id: 4, text: 'AI' },
];

export default function Home() {
  const [activeID, setActiveID] = useState(0);
  return (
    <>
      <Banner />
      <main className="max-width">
        <CategoryList
          list={CATEGORIES}
          state={activeID}
          setState={setActiveID}
        />
        <h2 className="a11y-hidden">{CATEGORIES[activeID].text} 강의 목록</h2>
        <CardList activeID={activeID} />
      </main>
    </>
  );
}
