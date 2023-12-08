import styles from './page.module.scss';

import CardItem from '@/components/card/CardItem';
import BookItem from '@/components/card/BookItem';
import InfoSection from '@/components/InfoSection';
import MessageSection from '@/components/MessageSection';
import SVGPencil from '@/svg/SVGPencil';
import SVGPeoples from '@/svg/SVGPeoples';
import SVGtime from '@/svg/SVGtime';
import SVGBook from '@/svg/SVGBook';

export default function SubPage() {
  const {
    messages,
    projects,
    books,
    links,
  } = require('/public/data/contents.json');
  return (
    <>
      <img
        width="1920"
        height="600"
        src="/images/subimg.webp"
        alt=""
        className={styles.sub__visual}
      />
      <div className={styles.container}>
        <section>
          <h2 className="title1">위니브 부트캠프가 추구하는 가치</h2>
          <blockquote>
            한 사람을 기술로 세우고, 그 기술로 먹고 살 수 있도록 하는 것.
          </blockquote>
          <p>
            지난 3년간 K-디지털 트레이닝(KDT) 산업의 주요 부트캠프에서 메인
            강사진과 멘토진으로 참여하며 수많은 수강생분들을 만나 함께
            성장했습니다.
          </p>
          <div className={styles.blue__box}>
            <strong className="fs24">"부트캠프 수료율 100%"</strong>
            믿기지 않는 수치가 가능했던 이유는 수강생을 향한
            <strong>'진심'</strong>이었습니다.
          </div>
          <p>
            경력과 노하우, 타 부트캠프에 없는 책 출판 프로젝트 등 '진심'을
            전달하기 위한 여러 프로그램과 실무자의 실무위주 교육으로 여러분들과
            함께합니다.
          </p>
          <InfoSection img="/images/weniv.svg">
            <h3>주식회사 위니브</h3>
            <h4>KDT 강의 이력</h4>
            <ul>
              <li>멋쟁이사자처럼 프론트엔드 스쿨 1기 · 메인 강사, 멘토진</li>
              <li>멋쟁이사자처럼 프론트엔드 스쿨 2기 · 메인 강사, 멘토진</li>
              <li>멋쟁이사자처럼 프론트엔드 스쿨 3기 · 메인 강사, 멘토진</li>
              <li>멋쟁이사자처럼 프론트엔드 스쿨 5기 · 메인 강사, 멘토진</li>
              <li>멋쟁이사자처럼 프론트엔드 스쿨 7기 · 메인 강사, 멘토진</li>
              <li>멋쟁이사자처럼 데이터 분석 스쿨 1기 · 메인 강사, 멘토진</li>
              <li>이스트소프트 백엔드 스쿨 1기 · 메인 강사, 멘토진 </li>
              <li>이스트소프트 백엔드 스쿨 3기 · 메인 강사, 멘토진 </li>
            </ul>
            <h4>KDC 콘텐츠 공급</h4>
            <ul>
              <li>멋사 리엑트(React) 콘텐츠 제작</li>
              <li>고려아카데미 SW 종합 기초 콘텐츠 제작</li>
            </ul>
            <h4>자체 캠프</h4>
            <ul>
              <li>제주코딩베이스캠프 1~15기 주관</li>
              <li>제주알고리즘베이스캠프 1기 주관</li>
            </ul>
            <h4>그 외 교육 및 채널</h4>
            <ul>
              <li>인프런 7만명 수강생, 평점 4.8점</li>
              <li>유튜브 제주코딩베이스캠프 운영</li>
              <li>카카오와 함께하는 알고리즘 산책</li>
              <li>제주대학교, SK 그룹 등 다양한 필드에서 교육</li>
            </ul>
          </InfoSection>
          <p>
            100% 온라인 과정으로 진행되는 단기 부트캠프에서
            <strong>
              위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과
              프로젝트, 멘토링을 제공합니다.
            </strong>
          </p>

          <ul className={styles.icon__ul}>
            <li>
              <SVGPencil />
              주니어 프론트엔드/백엔드 개발자에게 가장 필요한 요소를 중심으로
              커리큘럼 개발
            </li>
            <li>
              <SVGPeoples />
              모두에게 필요한 부분을 세심하게 채울 수 있도록 레벨별 스터디 운영
            </li>
            <li>
              <SVGtime />
              강의와 과외활동의 적절한 배치로 모두가 만족하며 성장하는 경험 제공
            </li>
            <li>
              <SVGBook />
              오픈 소스, 책 출판 프로젝트 등 타 부트캠프에서는 얻을 수 없는
              특별한 경험 제공
            </li>
          </ul>
        </section>

        <section>
          <h3 className="title2">수강생 주도 오픈소스 프로젝트</h3>
          <ul className={styles.project__container}>
            {projects.map((project, index) => (
              <li key={index}>
                <CardItem data={project} titleStart={4} share />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="title2">수강생 주도 ICT 전자책 집필</h3>
          <ul className={styles.book__container}>
            {books.map((book, index) => (
              <li key={index}>
                <BookItem data={book} />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="title2">수강생의 메시지</h3>
          <MessageSection messages={messages} />
        </section>

        <hr />

        <section>
          <h3 className="title2">위니브 더 알아보기</h3>
          <ul className={styles.link__list}>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
