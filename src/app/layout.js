import '@/styles/globals.scss';

export const metadata = {
  title: '위니브 부트캠프',
  description:
    '100% 온라인 과정으로 진행되는 단기 부트캠프에서는 위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.',
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

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body className="layout-flex">{children}</body>
    </html>
  );
}
