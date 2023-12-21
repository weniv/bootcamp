import styles from './Notice.module.scss';

export default function Notice({ day = 5 }) {
  return (
    <section className={styles.notice}>
      <h3>유의사항</h3>
      <ul>
        <li>본 프로그램은 {day}일 동안 수강 가능합니다.</li>
        <li>
          디스코드 채널 초대 링크는 구매 시 작성하신 휴대폰 번호로 전송됩니다.
          휴대폰 번호를 정확하게 입력해 주세요.
        </li>
        <li>
          상품 특성상 디스코드 채널 초대 링크 발송 이후에는 수강 환불이 어려운
          점 양해 부탁드립니다.
        </li>
        <li>
          쿠폰 북 제공을 위해 강의 플랫폼(인프런) 회원 이메일을 수집할 수
          있습니다.
        </li>
        <li>
          이벤트 상품 배송을 위해 이벤트 당첨자의 이름, 전화번호, 자택 주소 등을
          수집할 수 있습니다.
        </li>
      </ul>
    </section>
  );
}
