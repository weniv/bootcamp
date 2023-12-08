import styles from './Banner.module.scss';

import Btn from '../button/Btn';

const Content = ({
  categoryColor,
  thumbnail,
  category,
  title,
  description,
}) => {
  return (
    <div className="max-width">
      <div className={styles.content}>
        <p className={styles.category} style={{ color: categoryColor }}>
          {category}
        </p>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {description[0]}
          <br />
          <strong>{description[1]}</strong>
        </p>
      </div>

      {thumbnail && <img className={styles.thumbnail} src={thumbnail} alt="" />}
    </div>
  );
};
export default function BannerItem({ data }) {
  const { bgColor, textColor, link, ...rest } = data;

  const isBlank = link ? link.includes('http') : null;

  return (
    <article
      className={styles.bannerItem}
      style={{ backgroundColor: bgColor, color: textColor }}>
      {link && link ? (
        <a href={link} target={isBlank ? '_blank' : ''}>
          <Content {...rest} />
        </a>
      ) : (
        <Content {...rest} />
      )}
    </article>
  );
}
