import Link from 'next/link';
import styles from './Book.module.scss';

import Image from 'next/image';
const noimg = '/bootcamp/images/no-img.png';

export default function BookItem({ data }) {
  const { url, image, title, author } = data;

  return (
    <article className={styles.item}>
      <Link href={url}>
        <Image
          width="246"
          height="450"
          src={image ? `/bootcamp${image}` : noimg}
          alt=""
          className={styles['item-thumbnail']}
        />

        <div className={styles['item-content']}>
          <h4 className={styles['item-content-title']}>{title}</h4>
          <p className={styles['item-content-author']}>{author}</p>
        </div>
      </Link>
    </article>
  );
}
