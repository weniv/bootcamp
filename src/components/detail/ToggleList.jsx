'use client';
import { useRef } from 'react';

import styles from './ToggleList.module.scss';
import SVGArrowDown from './svg/SVGArrowDown';
import classNames from 'classnames';

export default function ToggleList({ data, type = 'faq' }) {
  const olRef = useRef();

  const toggleAnswer = (e) => {
    const target = e.currentTarget;

    if (target.textContent === '열기') {
      target.closest('li').classList.add(styles.active);
      target.classList.add(styles.active);
      target.querySelector('span').textContent = '닫기';
    } else {
      target.closest('li').classList.remove(styles.active);
      target.querySelector('span').textContent = '열기';
      target.classList.remove(styles.active);
    }
  };

  if (data?.length > 0) {
    return (
      <ol ref={olRef} className={styles.toggleList}>
        {data.map((cont, index) => (
          <li key={index}>
            {type === 'curriculum' && (
              <>
                <p className={styles.list__title}>
                  <span className={styles.day}>Day{index + 1}</span>
                  <span className={styles.tech}>{cont.tech}</span> {cont.period}
                </p>
                <div className={classNames('cont', styles.list__content)}>
                  <ol>
                    {cont.contents.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ol>
                </div>
              </>
            )}
            {type === 'faq' && (
              <>
                <p className={styles.list__title}>
                  <span className={styles.q}>Q{index + 1}.</span>
                  {cont.question}
                </p>
                <p className={classNames('cont', styles.list__content)}>
                  {cont.answer}
                </p>
              </>
            )}
            <button
              value={index}
              type="button"
              className={styles.btnToggle}
              onClick={toggleAnswer}>
              <SVGArrowDown />
              <span className="a11y-hidden">열기</span>
            </button>
          </li>
        ))}
      </ol>
    );
  }
}
