import styles from './Footer.module.scss';

import ListSNS from './ListSNS';
import WenivInfo from './WenivInfo';
import Logo from '@/svg/LogoBootcamp';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.maxWidth}>
        <div className={styles.flex}>
          <h2>
            <Logo color="grayLv3" />
          </h2>
          <p>Copyright © 2023 WENIV All Rights Reserved</p>
        </div>

        <WenivInfo />
        <ListSNS color="grayLv3" />
      </div>
    </footer>
  );
}
