import CampInfo from '@/components/detail/CampInfo';

import PageNav from '@/components/detail/PageNav';
import TeacherInfo from '@/components/detail/TeacherInfo';
import TeacherDetail from '@/components/detail/TeacherDetail';
import ToggleList from '@/components/detail/ToggleList';
import Benefit from '@/components/detail/Benefit';

import styles from './page.module.scss';
import './contents.scss';

import classNames from 'classnames';
import Notice from '@/components/detail/Notice';

import { noimg } from '@/utils/noimg';
import Python, { Python2 } from '@/components/contents/Python';
import JavaScript, { JavaScript2 } from '@/components/contents/JavaScript';
import React, { React2 } from '@/components/contents/React';
import Live from '@/components/detail/Live';
import Need from '@/components/detail/Need';
import KDT100 from '@/components/detail/KDT100';
import Step from '@/components/detail/Step';
import SVGTobe from '@/svg/SVGTobe';

export async function generateStaticParams() {
  return [{ id: 'python' }, { id: 'javascript' }, { id: 'react' }];
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const campData = require('/public/data/camp.json').find(
    (camp) => camp.url === `/${id}`,
  );

  let title = ' ';
  switch (id) {
    case 'python':
      title = '파이썬 | ';
      break;
    case 'javascript':
      title = '자바스크립트 | ';
      break;
    case 'react':
      title = '리액트 | ';
      break;
  }

  return {
    title: `${title}위니브 부트캠프`,
    description: `위니브 campData.description`,
    openGraph: {
      title: `${title}위니브 부트캠프`,
      description: campData.description,
      images: [campData.image],
    },
  };
}

export default function SubPage({ params }) {
  const { id } = params;

  const campData = require('/public/data/camp.json').find(
    (camp) => camp.url === `/${id}`,
  );

  return (
    <div className={classNames('sub-max-width', styles.camp)}>
      <section>
        <img
          className={styles.camp__thumnail}
          src={campData?.image ? campData?.image : noimg}
          alt=""
        />
        <h2 className={styles.camp__title}>
          {campData?.title}
          {campData?.subtitle && (
            <span className={styles.camp__subtitle}>{campData?.subtitle}</span>
          )}
        </h2>

        <p className={styles.camp__desc}>{campData?.description}</p>

        <TeacherInfo name={campData?.teacher} />
        <CampInfo data={campData} />
      </section>
      <PageNav url={campData?.applyUrl} />

      <div className="camp_contents">
        <section id="section1" className="section">
          <h3 className="a11y-hidden">캠프 소개</h3>

          {id === 'python' && <Python />}
          {id === 'javascript' && <JavaScript />}
          {id === 'react' && <React />}
        </section>

        {/* 작심 5일 */}
        <Step day={campData.day} curriculum={campData.curriculum} />

        <hr className="short" />

        {/* KDT 100% */}
        <KDT100 />

        <div className="tobe">
          <SVGTobe />
        </div>

        {/* 이런분에게 꼭 필요합니다. */}
        <Need title={campData.title} contents={campData.need} />
        {/* 라이브 */}
        <Live />

        {/* 괜찮습니다 */}
        {id === 'python' && <Python2 />}
        {id === 'javascript' && <JavaScript2 />}
        {id === 'react' && <React2 />}

        {/* 혜택 */}
        <Benefit id="section2" className="section" type={id} />
        <hr />
        {/* 커리큘럼 */}
        <section id="section3" className="section">
          <h3 className="title2 tac">커리큘럼</h3>
          <p className="p-des">{campData?.totalCurriculum} </p>
          <ToggleList data={campData?.curriculum} type="curriculum" />
        </section>
        <hr />
        {/* 강사소개 */}
        <section id="section4" className="section">
          <h3 className="title2 tac">강사소개</h3>
          <p className="p-des">
            "부트캠프 수료율 100%의 비결은 수강생을 향한 ‘진심’입니다."
          </p>

          <TeacherDetail name={campData?.teacher} />
        </section>
        <hr />
        {/* FAQ */}
        <section id="section5" className="section">
          <h3 className="title2 tac">FAQ</h3>
          <ToggleList data={campData?.faq} type="faq" />
        </section>
        <Notice day={campData?.day} />
      </div>
    </div>
  );
}
