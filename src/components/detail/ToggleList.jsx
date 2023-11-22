'use client';
import { useRef } from 'react';

import styles from './ToggleList.module.scss';

export default function ToggleList({ data }) {
  const olRef = useRef();

  const toggleAnswer = (e) => {
    const target = e.target;
    const targetNum = target.value * 1;
    const list = olRef.current.querySelectorAll('li');
    const targetAnswer = list[targetNum].querySelector(`.${styles.answer}`);

    if (target.textContent === '열기') {
      if (targetAnswer) {
        targetAnswer.style.display = 'block';
      }
      target.textContent = '닫기';
    } else {
      if (targetAnswer) {
        targetAnswer.style.display = 'none';
      }

      target.textContent = '열기';
    }
  };

  if (data?.length > 0) {
    return (
      <ol ref={olRef} className={styles.toggleList}>
        {data.map((faq, index) => (
          <li key={index}>
            {/* <p className={styles.question}>
              <span>Q{index + 1}.</span>
              {faq.question}
            </p>
            {faq.answer !== '' && <p className={styles.answer}>{faq.answer}</p>} */}

            <button
              value={index}
              type="button"
              className={styles.btnToggle}
              onClick={toggleAnswer}>
              열기
            </button>
          </li>
        ))}
      </ol>
    );
  }
}
