import Logo from './Logo';
import Nav from './Nav';

import styles from './PCHeader.module.scss';

export default function PCHeader({ type }) {
  return (
    <>
      <Logo />
      {type !== 'notfound' && <Nav className={styles.nav} />}
    </>
  );
}
