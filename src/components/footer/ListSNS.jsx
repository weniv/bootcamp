import styles from './ListSNS.module.scss';

import BtnIcon from '@/components/button/BtnIcon';
import SVGHome from './svg/SVGHome';
import SVGInflearn from './svg/SVGInflearn';
import SVGInstar from './svg/SVGInstar';
import SVGNaver from './svg/SVGNaver';
import SVGYoutube from './svg/SVGYoutube';

export default function ListSNS({ color = 'grayLv3' }) {
  const SNSList = [
    {
      icon: <SVGHome color={color} />,
      href: '/',
      target: null,
    },
    {
      icon: <SVGInflearn color={color} />,
      href: 'https://www.inflearn.com/users/170213/@jejucoding',
      target: '_blank',
    },
    {
      icon: <SVGYoutube color={color} />,
      href: 'https://www.youtube.com/@jejucodingcamp',
      target: '_blank',
    },
    {
      icon: <SVGNaver color={color} />,
      href: 'https://blog.naver.com/paul-lab',
      target: '_blank',
    },
    {
      icon: <SVGInstar color={color} />,
      href: 'https://www.instagram.com/weniv_official/',
      target: '_blank',
    },
  ];

  return (
    <ul className={styles.list}>
      {SNSList.map((sns, index) => (
        <li key={index}>
          <BtnIcon
            className={styles.snsBtn}
            href={sns.href}
            target={sns.target}>
            {sns.icon}
          </BtnIcon>
        </li>
      ))}
    </ul>
  );
}
