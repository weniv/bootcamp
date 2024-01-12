import SVGCode from '@/svg/SVGCode';
import SVGPencil from '@/svg/SVGPencil';

export default function Python() {
  return (
    <>
      <section>
        <h4 className="title">
          2023, 프로그래밍 언어 중
          <br />
          가장 인기 있는 언어 1위 Python
        </h4>

        <figure className="figure">
          <picture>
            <source
              srcSet="/images/camps/python/tiobe_m.webp"
              media="(max-width: 640px)"
            />
            <img src="/images/camps/python/tiobe.webp" alt="" />
          </picture>

          <figcaption>TIOBE</figcaption>
        </figure>
      </section>
    </>
  );
}

export function Python2() {
  return (
    <>
      <section>
        <div className="header">
          <p className="fc-text">print(”Hello World”)만 해보셨나요?</p>
          <h4>초심자여도 괜찮습니다</h4>
        </div>
        <ul className="bg-ul">
          <li>
            <SVGPencil />
            Python의 기본 개념과 기초 문법부터 시작합니다.
          </li>
          <li>
            <SVGCode />
            기초부터 코딩 테스트까지 올인원으로 학습합니다.
          </li>
        </ul>

        <h4 className="title">
          Python 교육 플랫폼 개발자에게 직접 배워보세요!
        </h4>
        <img src="/images/camps/python/wenivworld.webp" alt="" loading="lazy" />
        <p>
          별도의 설치 없이, 어디서나 접속 가능한 웹 기반 파이썬 코딩 교육 플랫폼{' '}
          <a href="https://world.weniv.co.kr/" target="_blank">
            '위니브월드'
          </a>
          를 총괄한 개발자가 직접 여러분을 지도합니다.
        </p>
      </section>

      <section>
        <h4 className="title">코딩테스트 대비까지 한 번에!</h4>
        <ol className="step">
          <li>Python 코딩테스트 출제 경향과 유형 분석</li>
          <li>유형 살펴보기</li>
          <li>코딩테스트 전략 수립하기</li>
          <li>정규표현식 이해와 활용</li>
        </ol>
      </section>
    </>
  );
}
