import styles from './Logo.module.scss';
import LogoBootcamp from '@/svg/LogoBootcamp';

export default function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <h1>
        <LogoBootcamp />
        <span className="a11y-hidden">Weniv bootcamp</span>
      </h1>
    </a>
  );
}
