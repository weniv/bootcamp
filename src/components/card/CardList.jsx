import classNames from 'classnames';
import styles from './Card.module.scss';

import CardItem from './CardItem';

export default function CardList() {
  const camps = require('/public/data.json');

  return (
    <ul className={styles['container']}>
      {camps.map((camp) => (
        <li>
          <CardItem data={camp} />
        </li>
      ))}
    </ul>
  );
}
