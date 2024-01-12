import Image from 'next/image';
import SVGPencil from '@/svg/SVGPencil';
import SVGCode from '@/svg/SVGCode';

export default function JavaScript() {
  const { curriculum } = require('/public/data/camp.json')[1];

  return (
    <>
      <section>
        <h4 className="title">
          웹 개발 필수! 폭 넓게 사용되는
          <br />
          인기 언어 JavaScript
        </h4>

        <Image
          width={790}
          height={482}
          src="/images/camps/javascript/javascript.webp"
          alt="자바스크립트로 할 수 있는 것: 웹페이지 제작, 게임 프로그래밍, 앱 개발, 서버 프로그래밍, 데스크톱 앱 개발 인터랙티브 콘텐츠 제작"
        />
      </section>
    </>
  );
}

export function JavaScript2() {
  return (
    <>
      {' '}
      <section>
        <div className="header">
          <p className="fc-text">console.log(”Hello World”)만 해보셨나요?</p>
          <h4>초심자여도 괜찮습니다</h4>
        </div>
        <ul className="bg-ul">
          <li>
            <SVGPencil />
            JavaScript의 기본 개념과 기초 문법부터 시작합니다.
          </li>
          <li>
            <SVGCode />
            기초부터 코딩 테스트까지 올인원으로 학습합니다.
          </li>
        </ul>

        <h4 className="title">
          여러 교육 플랫폼을 개발한 개발자에게 직접 배워보세요!
        </h4>
        <Image
          width={790}
          height={402}
          src="/images/camps/javascript/jsalgo.webp"
          alt=""
        />
        <p>
          JavaScript 알고리즘 테스트 서비스인{' '}
          <a href="https://jsalgo.co.kr/">'JS 알고리즘 베스트 20(JS Algo)'</a>의
          기획 및 개발을 총괄한 개발자가 직접 여러분을 지도합니다.
        </p>
      </section>
      <section>
        <h4 className="title">코딩테스트 대비까지 한 번에!</h4>
        <ol className="step">
          <li>JavaScript 코딩테스트 출제 경향과 유형 분석</li>
          <li>유형 살펴보기</li>
          <li>코딩테스트 전략 수립하기</li>
          <li>정규표현식 이해와 활용</li>
        </ol>
      </section>
    </>
  );
}
