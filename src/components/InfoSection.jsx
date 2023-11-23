import classNames from 'classnames';
import styles from './InfoSection.module.scss';

export default function InfoSection({ img, alt, teacher, children }) {
  return (
    <div className={classNames('info-box', styles['info-box'])}>
      <img src={img} alt={alt ? alt : ''} />
      <div>{children}</div>
    </div>
  );
}
