import BaseItem from '../card/BaseItem';

export default function Benefit(props) {
  let benefits = require('/public/data/benefit.json');

  return (
    <section {...props}>
      <h3 className="title2 tac">수료생 혜택</h3>
      <BaseItem data={benefits} />
    </section>
  );
}
