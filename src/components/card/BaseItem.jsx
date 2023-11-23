import styles from './BaseItem.module.scss';

import Img from '../Img';

export default function BaseItem({ data }) {
  return (
    <ul className={styles.container}>
      {data.map((data, index) => (
        <li key={index}>
          <article className={styles.item}>
            <Img
              src={data?.image ? data.image : null}
              className={styles['item-thumbnail']}
            />
            <div className={styles['item-content']}>
              <h4 className={styles['item-content-title']}>{data?.title}</h4>
              <p className={styles['item-content-description']}>
                {data?.description}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
