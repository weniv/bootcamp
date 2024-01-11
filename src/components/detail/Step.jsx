import SVGCheck from '@/svg/SVGCheck';
import SVGCode from '@/svg/SVGCode';
import SVGPencil from '@/svg/SVGPencil';

export default function Step({ day, curriculum }) {
  const getDay = (num) => {
    switch (num) {
      case 0:
        return '월';
      case 1:
        return '화';
      case 2:
        return '수';
      case 3:
        return '목';
      case 4:
        return '금';
    }
  };
  return (
    <section>
      <div className="header">
        🥲
        <p>빠르게 학습하고 싶지만 수 개월의 시간을 투자하기 어려우신가요?</p>
        <h4>작심 {day}일이면 '큰 그림'을 그리기엔 충분합니다!</h4>
      </div>
      <ol className="step">
        {curriculum.map((cur, i) => (
          <li key={i}>
            {}
            {i === curriculum.length - 1 ? (
              <SVGCheck />
            ) : i === 0 ? (
              <SVGPencil />
            ) : (
              <SVGCode />
            )}
            <strong>
              {i + 1}일차({getDay(i)})
            </strong>
            <p> {cur.tech}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
