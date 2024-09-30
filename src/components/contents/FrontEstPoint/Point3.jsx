import Point from "@/components/detail/Point";
import React from "react";
import styles from "./Points.module.scss";
import CardItem from "@/components/card/CardItem";
import BookItem from "@/components/card/BookItem";

export default function Point3() {
  const {
    projects,
    books,
    conferences,
  } = require("/public/data/contents.json");

  return (
    <section>
      <div className={styles.title__container}>
        <Point number={3} />
        <h4>
          타 부트캠프에서는 얻을 수 없는
          <br />
          <span className="fc-primary">특별한 프로젝트 경험을 제공합니다.</span>
        </h4>
      </div>

      <blockquote className={styles.blockquote}>
        <p>
          취업하기 위해 인턴십도 하고 아주 많은 곳에 지원하고 면접도 수없이
          봤는데 그때마다{" "}
          <strong>
            위니브에서 함께한 책 집필과 다양한 프로젝트들이 큰 도움이 됐습니다.
            거의 모든 면접에서 항상 관심 가져주셨습니다.
          </strong>
        </p>

        <footer className="fw-bold">- 위니브 부트캠프 수료생 후기 中 - </footer>
      </blockquote>

      <section className={styles.project__section}>
        <h3 className="title2">수강생 주도 오픈소스 프로젝트</h3>
        <ul className={styles.project__container}>
          {projects.map((project, index) => (
            <li key={index}>
              <CardItem data={project} titleStart={4} share />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.project__section}>
        <h3 className="title2">수강생 주도 ICT 전자책 집필</h3>
        <ul className={styles.book__container}>
          {books.map((book, index) => (
            <li key={index}>
              <BookItem data={book} />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.project__section}>
        <div>
          <h3 className="title2">컨퍼런스 연사 참여 기회</h3>
          <p className={styles.text_desc}>
            교육 과정 기간 중 위니브 주관 컨퍼런스가 개최되는 경우, 수강생에게
            연사로 참여할 수 있는 기회가 주어집니다.
          </p>
        </div>

        <ul className={styles.conf__container}>
          {conferences.map((conf, index) => (
            <li key={index}>
              <figure className="figure">
                <iframe width="100%" height="315" src={conf.link}></iframe>
                <figcaption>{conf.desc}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
