import styles from './Notice.module.scss';

export default function Notice() {
  return (
    <section className={styles.notice}>
      <h3>유의사항</h3>
      <ul>
        <li>본 프로그램은 5일 동안 수강 가능합니다.</li>
        <li>프로그램 시작일부터는 환불이 불가합니다.</li>
      </ul>
    </section>
  );
}
