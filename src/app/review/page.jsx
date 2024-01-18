import SVGTalk from '@/svg/SVGTalk';
import styles from './page.module.scss';

import ReviewItem from '@/components/card/ReviewItem';

export const metadata = {
  title: '수강생 후기 | 위니브 부트캠프',
  openGraph: {
    title: '수강생 후기 | 위니브 부트캠프',
  },
  twitter: {
    card: 'summary',
    title: '수강생 후기 | 위니브 부트캠프',
  },
};
export default function SubPage() {
  const reviews = require('/public/data/reviews.json');

  return (
    <>
      <span className={styles.icon}>
        <SVGTalk color="primary" />
      </span>
      <h2 className={styles.title}>수강생 후기</h2>
      <p className={styles.desc}>
        위니브의 부트캠프를 수강했던 수강생의 생생한 후기를 살펴보세요.
      </p>
      <ul className={styles.container}>
        {reviews.map((review, i) => (
          <ReviewItem key={i} data={review} />
        ))}
      </ul>
    </>
  );
}
