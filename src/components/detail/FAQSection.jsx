'use client';
import { useEffect, useRef } from 'react';
import styles from './FAQSection.module.scss';

export default function FAQSection({ data }) {
  const olRef = useRef();

  const toggleAnswer = (e) => {
    const target = e.target;
    const targetNum = target.value * 1;
    const list = olRef.current.querySelectorAll('li');
    const targetAnswer = list[targetNum].querySelector(`.${styles.answer}`);

    if (target.textContent === '열기') {
      targetAnswer.style.display = 'block';
      target.textContent = '닫기';
    } else {
      targetAnswer.style.display = 'none';
      target.textContent = '열기';
    }
  };

  return (
    <section className={styles.faq}>
      <h3 className="title2 tac">FAQ</h3>
      {data?.length > 0 && (
        <ol ref={olRef}>
          {data.map((faq, index) => (
            <li key={index}>
              <p className={styles.question}>
                <span>Q{index + 1}.</span>
                {faq.question}
              </p>
              {faq.answer !== '' && (
                <p className={styles.answer}>{faq.answer}</p>
              )}
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
      )}
    </section>
  );
}
