import SVGTobe from '@/svg/SVGTobe';
import './contents.scss';
import SVGPencil from '@/svg/SVGPencil';
import SVGCode from '@/svg/SVGCode';
import SVGCheck from '@/svg/SVGCheck';
import { noimg } from '@/utils/noimg';

export default function Python() {
  return (
    <div className="camp-contents">
      <section>
        <div className="header">
          😥
          <p>빠르게 학습하고 싶지만 수개월의 시간을 투자하기 어려우신가요?</p>
          <h4>작심 5일이면 충분합니다!</h4>
        </div>
        <ol className="step">
          <li>
            <SVGPencil />
            <strong>1일차(월)</strong>
            파이썬 기초와 환경 설정
          </li>
          <li>
            <SVGCode />
            <strong>2일차(화)</strong>
            컬렉션 자료형과 함수
          </li>
          <li>
            <SVGCode />
            <strong>3일차(수)</strong>
            조건문과 반복문
          </li>
          <li>
            <SVGCode />
            <strong>4일차(목)</strong>
            클래스와 Python 심화 과정
          </li>
          <li>
            <SVGCheck />
            <strong>5일차(금)</strong>
            코딩테스트를 통한 이해 점검하기
          </li>
        </ol>
      </section>

      <hr className="short" />

      <section>
        <h4 className="title">
          <span>KDT 100% 수료율 달성 신화를 만든</span>
          <span>위니브 부트캠프와 함께하세요</span>
        </h4>
        <ul className="box-ul">
          <li>
            위니브 누적 수강생
            <strong>7만+</strong>
          </li>
          <li>
            최고 수료율
            <strong>100%</strong>
          </li>
          <li>
            수강생 최고 평균 만족도
            <strong>♥ 4.9</strong>
          </li>
        </ul>

        <blockquote className="blockquote">
          <h5 className="title">
            대한민국에서 탑 레벨 수준의
            <br />
            전문강사 그룹입니다
          </h5>
          <p>
            위니브의 강사진들은 수강생의 성장에 대한 진심을 바탕으로 강의와
            이벤트를 매우 효과적으로 운영합니다. 대한민국에서 탑 레벨 수준의
            전문강사 그룹입니다. 단순하게 강의를 쳐내기보다 강의를 통해
            <strong>
              수강생들이 개발자로 자라날 수 있도록 가장 효과적인 전략을
              펼쳐냅니다.
            </strong>
          </p>

          <footer>- (전) 멋쟁이사자처럼 교육사업 담당자 -</footer>
        </blockquote>
      </section>

      <div className="tobe">
        <SVGTobe />
      </div>

      <section>
        <div className="header">
          <p>Python 부트캠프는</p>
          <h4> 이런분들에게 꼭! 필요합니다</h4>
        </div>
        <ul className="flex-ul">
          <li>
            <img src="/images/camps/python/img1.png" alt="" />
            Python 기초 과정 이상을 속성으로 배워보고 싶으신 분
          </li>
          <li>
            <img src="/images/camps/python/img2.png" alt="" />
            밀도 있는 실시간 온라인 코딩 강의를 찾고 있으신 분
          </li>
          <li>
            <img src="/images/camps/python/img3.png" alt="" />
            코딩테스트 대비를 어떻게 해야 할지 막막하신 분
          </li>
        </ul>
      </section>
      <section>
        <h4 className="title">
          2023, 프로그래밍 언어 중
          <br />
          가장 인기 있는 언어 1위 Python
        </h4>

        <figure>
          <img src={noimg} alt="" />
          <figcaption>TOBE</figcaption>
        </figure>

        <h5 className="title">Python을 배우면 어떤 걸 할 수 있을까요?</h5>
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

        <h5 className="title">
          ...
          <br />
          파이썬으로 할 수 있는 것이 이렇게나 많습니다!
        </h5>
      </section>

      <div className="tobe">
        <SVGTobe />
      </div>

      <section>
        <div className="header">
          🥲
          <p> 그렇지만... 혼자 공부하기 두려우신가요?</p>
          <h4>100% 라이브로 함께해요!</h4>
        </div>
        <p>
          <strong> 위니브 부트캠프는 ZOOM에서 100% 라이브로 진행됩니다.</strong>
          또한 강사와 수강생이 모두 모여있는 디스코드 커뮤니티에서 동기부여를
          받으며 함께 학습할 수 있습니다.
        </p>
      </section>

      <section>
        <figure>
          <img src="/images/camps/python/zoom.jpg" alt="" />
          <figcaption>100% 라이브로 진행되는 강의</figcaption>
        </figure>

        <figure>
          <img src="/images/camps/python/discord.jpg" alt="" />
          <figcaption>디스코드 커뮤니티 운영</figcaption>
        </figure>

        <div className="header">
          <p>print(”Hello World”)만 해보셨나요?</p>
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
        <img src="/images/camps/python/wenivworld.jpg" alt="" />
        <p>
          별도의 설치 없이, 어디서나 접속 가능한 웹 기반 파이썬 코딩 교육 플랫폼
          <a href="#">‘위니브월드’</a>를 총괄한 개발자가 직접 여러분을
          지도합니다.
        </p>
      </section>

      <section>
        <div className="header">
          🤗
          <p>강의가 끝나도 걱정 마세요!</p>
          <h4>소장 가능한 VOD 강의 5개를 무료로 제공합니다.</h4>
        </div>

        <img src={noimg} alt="" />

        <h4 className="title">오직 부트캠프 참여자에게만 드리는 혜택!</h4>
        <p>
          <strong>
            제주코딩베이스캠프 강의 중 Python 토픽 인기 유료 강의 5개를 모든
            수강생에게 무료로 제공합니다.
          </strong>{' '}
          캠프가 끝나더라도 VOD 강의를 통해 효과적으로 반복 학습할 수 있습니다.
        </p>

        <hr className="short" />

        <section>
          <h5 className="title">드릴 수 있는 모든 것을 꾹꾹 눌러 담았습니다</h5>
          <ol className="step">
            <li className="fc-blue">총 25시간 분량의 실시간 온라인 강의</li>
            <li>
              <p className="fc-blue">
                제주코딩베이스캠프 Python 토픽 인기 강의
              </p>
              <p>
                <del>5종 10 ~ 15만 원 상당</del> &gt; 무료 제공
              </p>
            </li>
            <li>
              <p className="fc-blue">우수 수료생 위니브 굿즈 세트 제공</p>
              <p>
                <del>5만 원 상당 </del>&gt; 무료 제공
              </p>
            </li>
            <li className="fc-blue">강의 자료 노션 페이지 제공</li>
          </ol>
        </section>
      </section>
    </div>
  );
}
