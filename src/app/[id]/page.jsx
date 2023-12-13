import CampInfo from '@/components/detail/CampInfo';

import MessageSection from '@/components/MessageSection';
import PageNav from '@/components/detail/PageNav';
import TeacherInfo from '@/components/detail/TeacherInfo';
import TeacherDetail from '@/components/detail/TeacherDetail';
import ToggleList from '@/components/detail/ToggleList';
import Benefit from '@/components/detail/Benefit';

import styles from './page.module.scss';
import classNames from 'classnames';
import Notice from '@/components/detail/Notice';

import { noimg } from '@/utils/noimg';
import Python from '@/components/contents/Python';

export async function generateStaticParams() {
  return [{ id: 'python' }, { id: 'javascript' }, { id: 'react' }];
}

export async function generateMetadata({ params }) {
  const { id } = params;

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
          width="790"
          height="416"
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

      <PageNav />

      <section id="section1" className="section">
        <h3 className="a11y-hidden">캠프 소개</h3>

        {id === 'python' ? (
          <Python />
        ) : (
          <div
            style={{
              height: '1000px',
              backgroundColor: '#eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '2rem',
            }}>
            작성중...
          </div>
        )}
      </section>
      <hr />

      {/* 후기 */}
      <section id="section2" className="section">
        <h3 className="title2 tac">수강생 후기를 살펴보세요!</h3>
        <MessageSection messages={campData?.messages} />
      </section>
      <hr />

      {/* 수료생 혜택 */}
      <Benefit id="section3" className="section" />

      <hr />

      {/* 커리큘럼 */}
      <section id="section4" className="section">
        <h3 className="title2 tac">커리큘럼</h3>
        <p className="p-des">{campData?.totalCurriculum} </p>
        <ToggleList data={campData?.curriculum} type="curriculum" />
      </section>

      <hr />

      {/* 강사소개 */}
      <section id="section5" className="section">
        <h3 className="title2 tac">강사소개</h3>
        <p className="p-des">
          "부트캠프 수료율 100%의 비결은 수강생을 향한 ‘진심’입니다."
        </p>

        <TeacherDetail name={campData?.teacher} />
      </section>

      <hr />
      {/* FAQ */}
      <section id="section6" className="section">
        <h3 className="title2 tac">FAQ</h3>
        <ToggleList data={campData?.faq} type="faq" />
      </section>

      <Notice />
    </div>
  );
}
