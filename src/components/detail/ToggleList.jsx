"use client";
import { useRef } from "react";

import styles from "./ToggleList.module.scss";
import SVGArrowDown from "./svg/SVGArrowDown";
import classNames from "classnames";

export default function ToggleList({ data, type = "faq" }) {
  const olRef = useRef();

  const toggleAnswer = (e) => {
    const target = e.currentTarget;

    if (target.textContent === "열기") {
      target.closest("li").classList.add(styles.active);
      target.classList.add(styles.active);
      target.querySelector("span").textContent = "닫기";
    } else {
      target.closest("li").classList.remove(styles.active);
      target.querySelector("span").textContent = "열기";
      target.classList.remove(styles.active);
    }
  };

  if (data?.length > 0) {
    return (
      <ol
        ref={olRef}
        className={classNames(
          styles.toggleList,
          type === "curriculum" && styles.curriculum
        )}
      >
        {data.map((cont, index) => (
          <li key={index}>
            {type === "curriculum" && (
              <>
                <p className={styles.list__title}>
                  <span className={styles.day}>Day{index + 1}</span>
                  <span className={styles.tech}>{cont.tech}</span>{" "}
                  <span className={styles.period}>{cont.period}</span>
                </p>
                <div className={classNames("cont", styles.list__content)}>
                  {cont.objectives && (
                    <div>
                      <h4>학습 목표</h4>
                      <ul>
                        {cont.objectives.map((list, index) => (
                          <li key={index}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cont.contents && (
                    <div>
                      <h4>주요 내용</h4>
                      <ul>
                        {cont.contents.map((list, index) => (
                          <li key={index}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {cont.notice && (
                    <p className={styles.notice}>{cont.notice}</p>
                  )}
                </div>
              </>
            )}
            {type === "faq" && (
              <>
                <p className={styles.list__title}>
                  <span className={styles.q}>Q{index + 1}.</span>
                  {cont.question}
                </p>
                {Array.isArray(cont.answer) ? (
                  <div className={classNames("cont", styles.list__content)}>
                    {cont.answer.map((list, index) => (
                      <>
                        {Array.isArray(list) ? (
                          <div key={index}>
                            {list.map((item, idx) => (
                              <p key={idx}>{item}</p>
                            ))}
                          </div>
                        ) : (
                          <p key={index}>{list}</p>
                        )}
                      </>
                    ))}
                  </div>
                ) : (
                  <p className={classNames("cont", styles.list__content)}>
                    {cont.answer}
                  </p>
                )}
              </>
            )}
            {type === "recruitment" && (
              <>
                <p className={styles.list__title}>
                  <span className={styles.recruit}>{index + 1}.</span>
                  {cont.title}
                </p>
                {Array.isArray(cont.content) ? (
                  <div className={classNames("cont", styles.list__content)}>
                    {cont.content.map((list, index) => (
                      <>
                        {Array.isArray(list) ? (
                          <div key={index}>
                            {list.map((item, idx) => (
                              <p key={idx}>{item}</p>
                            ))}
                          </div>
                        ) : (
                          <p key={index}>{list}</p>
                        )}
                      </>
                    ))}
                  </div>
                ) : (
                  <p className={classNames("cont", styles.list__content)}>
                    {cont.content}
                  </p>
                )}
              </>
            )}
            <button
              value={index}
              type="button"
              className={styles.btnToggle}
              onClick={toggleAnswer}
            >
              <SVGArrowDown />
              <span className="a11y-hidden">열기</span>
            </button>
          </li>
        ))}
        {type === "faq" && (
          <li>
            <p className={styles.list__title}>
              <span className={styles.q}>Q{data.length + 1}</span>
              위니브의 부트캠프를 수강했던 수강생의 후기가 궁금해요.
            </p>
            <p className={classNames("cont", styles.list__content)}>
              <span>
                위니브 부트캠프 <a href="/review">수강생 후기 살펴보기</a>
              </span>
            </p>
            <button
              value={data.length}
              type="button"
              className={styles.btnToggle}
              onClick={toggleAnswer}
            >
              <SVGArrowDown />
              <span className="a11y-hidden">열기</span>
            </button>
          </li>
        )}
      </ol>
    );
  }
}
