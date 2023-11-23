import CardItem from '@/components/card/CardItem';
import './camp.scss';
import BookItem from '@/components/card/BookItem';
import InfoSection from '@/components/InfoSection';
import MessageSection from '@/components/MessageSection';

export default function SubPage() {
  const {
    messages,
    projects,
    books,
    links,
  } = require('/public/data/contents.json');
  return (
    <>
      <img src="/images/subimg.jpg" alt="" className="sub-visual" />
      <div className="container">
        <section>
          <h2 className="title1">위니브 부트캠프가 추구하는 가치</h2>
          <blockquote>
            한 사람을 기술로서 세우는 것, 그 기술로서 먹고 살 수 있도록 하는 것.
          </blockquote>
          <p>
            지난 3년간 K-디지털 트레이닝(KDT) 산업의 주요 부트캠프에서 메인
            강사진과 멘토진으로 참여하며 수많은 수강생분들을 만나 함께
            성장했습니다.
          </p>
          <div className="blue-box">
            <strong className="fs24">"부트캠프 수료율 100%"</strong>
            믿기지 않는 수치이지만 가능했던 이유는 다름 아닌 수강생을 향한
            <strong>'진심'</strong>이었습니다.
          </div>
          <p>
            그리고 그 진심을 전달하기 위해 치열하게 고민했던 주식회사 위니브가
            여러분을 지도합니다.
          </p>

          <InfoSection img="images/weniv.svg">
            <h3>주식회사 위니브</h3>
            <h4>KDT 강의 이력</h4>
            <ul>
              <li>멋사 TECHIT 프론트엔드 스쿨 1기 · 메인 강사, 멘토진</li>
              <li>멋사 TECHIT 프론트엔드 스쿨 2기 · 메인 강사, 멘토진</li>
              <li>멋사 TECHIT 프론트엔드 스쿨 3기 · 메인 강사, 멘토진</li>
              <li>멋사 TECHIT 프론트엔드 스쿨 5기 · 메인 강사, 멘토진</li>
              <li>멋사 TECHIT 프론트엔드 스쿨 7기 · 메인 강사, 멘토진</li>
              <li>멋사 TECHIT 데이터 분석 스쿨 1기 · 메인 강사, 멘토진</li>
              <li>멋사 TECHIT AI 스쿨 1기 · 부분 강사진</li>
              <li>EST 백엔드 스쿨 1기 · 메인 강사, 멘토진 </li>
              <li>EST 백엔드 스쿨 3기 · 메인 강사, 멘토진 </li>
            </ul>
            <h4>KDC 콘텐츠 공급</h4>
            <ul>
              <li>멋사 리엑트(React) 콘텐츠 제작</li>
              <li>고려아카데미 콘텐츠 제작</li>
            </ul>
            <h4>자체 캠프</h4>
            <p>제주코딩베이스캠프 1~15기 주관</p>
          </InfoSection>

          <p>
            100% 온라인 과정으로 진행되는 단기 부트캠프에서는 위니브의 실무
            경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트,
            멘토링을 제공합니다.
          </p>
        </section>

        <section>
          <h3 className="title2">수강생의 메시지</h3>
          <MessageSection messages={messages} />
        </section>

        <section>
          <h3 className="title2">수강생 주도 오픈소스 프로젝트</h3>
          <ul className="project-container">
            {projects.map((project, index) => (
              <li key={index}>
                <CardItem data={project} titleStart={4} share />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="title2">수강생 주도 ICT 전자책 집필</h3>
          <ul className="book-container">
            {books.map((book, index) => (
              <li key={index}>
                <BookItem data={book} />
              </li>
            ))}
          </ul>
        </section>

        <hr />

        <section>
          <h3 className="title2">위니브 더 알아보기</h3>
          <ul className="link-list">
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
