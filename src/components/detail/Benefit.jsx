import BaseItem from '../card/BaseItem';

export default function Benefit(props) {
  let { student, completion } = require('/public/data/benefit.json');

  return (
    <>
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
