import styles from './Need.module.scss';

export default function Need({ title, contents }) {
  return (
    <section>
      <div className="header">
        <p>{title}는</p>
        <h4>이런분들에게 꼭! 필요합니다</h4>
      </div>
      <ul className={styles.flex_ul}>
        {contents.map((content, i) => (
          <li key={i}>
            <img src={`/images/camps/python/img${i + 1}.png`} alt="" />
            {content}
          </li>
        ))}
      </ul>
    </section>
  );
}
