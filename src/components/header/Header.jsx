import Logo from '@/svg/LogoBootcamp';
import Link from 'next/link';

import styles from './Header.module.scss';
import classNames from 'classnames';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames('max-width', styles.inner)}>
        <Logo className={styles.logo} />
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#">위니브 부트캠프 소개</Link>
            </li>
            <li>
              <Link href="#">콘텐츠 아카이브</Link>
            </li>
            <li>
              <Link href="#">스터디인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
