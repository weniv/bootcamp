import BaseItem from '../card/BaseItem';
import styles from './Benefit.module.scss';

export default function Benefit(props) {
  const { type } = props;
  let { student, completion } = require('/public/data/benefit.json');

  return (
    <>
      <section>
        <div className="header">
          🤗
          <p>강의가 끝나도 걱정 마세요!</p>
          <h4>소장 가능한 VOD 강의 5개를 무료로 제공합니다.</h4>
        </div>

        <img src="/images/camps/python/free-VOD.jpg" alt="" />

        <h5 className="title">오직 부트캠프 참여자에게만 드리는 혜택!</h5>
        <p>
          <strong>
            <a
              href="https://www.inflearn.com/users/170213/@jejucoding"
              target="blank"
              className="fc-blue">
              제주코딩베이스캠프
            </a>{' '}
            강의 중 Python 토픽 인기 유료 강의 5개를 모든 수강생에게 무료로
            제공합니다.
          </strong>{' '}
          캠프가 끝나더라도 VOD 강의를 통해 효과적으로 반복 학습할 수 있습니다.
        </p>
      </section>

      <hr className="short" />

      <section>
        <h5 className="title">드릴 수 있는 모든 것을 꾹꾹 눌러 담았습니다</h5>
        <ul className={styles.border__list}>
          <li className="fc-blue">총 20시간 분량의 실시간 온라인 강의</li>
          <li>
            <p className="fc-blue">
              제주코딩베이스캠프 {type === 'python' && 'Python'}
              {type === 'javascript' && 'JS'}
              {type === 'react' && 'JS, React'} 토픽 인기 강의 5종
            </p>
            <p>
              <del>10 ~ 15만 원 상당</del> &gt; 무료 제공
            </p>
          </li>
          <li>
            <p className="fc-blue">우수 수료생 위니브 굿즈 세트 제공</p>
            <p>
              <del>5만 원 상당 </del>&gt; 무료 제공
            </p>
          </li>
          <li className="fc-blue">강의 자료 노션 페이지 제공</li>
        </ul>
      </section>

      <hr />

      <section {...props}>
        <h3 className="title">수강생 혜택</h3>
        <BaseItem data={student} />
      </section>

      <section {...props}>
        <div className="header">
          <p>마지막까지 힘차게 달려온 여러분께 드리는 특별한 선물 ♥</p>
          <h3>100% 수료생 혜택</h3>
        </div>
        <BaseItem data={completion} />
      </section>
    </>
  );
}
