import Logo from '@/svg/LogoBootcamp';
import Link from 'next/link';

import styles from './Header.module.scss';
import classNames from 'classnames';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames('max-width', styles.inner)}>
        <Link href="/">
          <h1>
            <Logo className={styles.logo} />
            <span className="a11y-hidden">Weniv bootcamp</span>
          </h1>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/camp">위니브 부트캠프 소개</Link>
            </li>
            <li>
              <Link href="https://archive.weniv.co.kr/" target="_blank">
                콘텐츠 아카이브
              </Link>
            </li>
            <li>
              <Link href="https://www.studyin.co.kr/" target="_blank">
                스터디인
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
