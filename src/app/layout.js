import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import BtnTop from '@/components/button/BtnTop';
import '@/styles/globals.scss';

export const metadata = {
  title: '위니브 부트캠프',
  description:
    '위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.',
  metadataBase: new URL('https://bootcamp.weniv.co.kr'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '위니브 부트캠프',
    description:
      '위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.',
    url: 'https://bootcamp.weniv.co.kr',
    type: 'website',
    siteName: '위니브 부트캠프',
    images: ['/images/OG.png'],
    locale: 'ko_KR',
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <meta
          name="naver-site-verification"
          content="c51f4cbf1d086158b6a1751c56d9483d32efb231"
        />
      </head>
      <body className="layout-flex">
        {children}
        <BtnTop />
      </body>
      <GoogleTagManager gtmId={GA_ID} />
    </html>
  );
}
