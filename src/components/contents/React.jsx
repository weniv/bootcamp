import SVGPencil from '@/svg/SVGPencil';
import SVGCheck from '@/svg/SVGCheck';

export default function React() {
  return (
    <>
      <section>
        <h4 className="title">
          뛰어난 사용자 경험과
          <br />
          혁신적인 웹/앱 개발을 위한 필수 도구, React
        </h4>

        <img src="/images/camps/react/react.jpg" alt="" />
      </section>
    </>
  );
}

export function React2() {
  return (
    <section>
      <div className="header">
        <p className="fc-text">JavaScript는 해보셨지만</p>
        <h4>React가 처음이신가요? 괜찮습니다!</h4>
      </div>
      <ul className="bg-ul">
        <li>
          <SVGPencil />
          React의 기본 개념과 기초 문법부터 시작합니다.
        </li>
        <li>
          <SVGCheck />
          실무 프로젝트까지 한 번에 학습합니다.
        </li>
      </ul>
    </section>
  );
}
