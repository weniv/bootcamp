import classNames from 'classnames';
import styles from './InfoSection.module.scss';

export default function InfoSection({ img, img_m, alt, children }) {
  return (
    <div className={classNames('info-box', styles['info-box'])}>
      <picture>
        <source srcSet={img_m} media="(max-width: 640px)" />
        <img src={img} alt={alt ? alt : ''} loading="lazy" />
      </picture>

      <div>{children}</div>
    </div>
  );
}
