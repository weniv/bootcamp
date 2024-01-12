import Image from 'next/image';
import classNames from 'classnames';
import styles from './InfoSection.module.scss';

export default function InfoSection({ img, alt, children }) {
  return (
    <div className={classNames('info-box', styles['info-box'])}>
      <Image width={240} height={240} src={img} alt={alt ? alt : ''} />
      <div>{children}</div>
    </div>
  );
}
