import '@/styles/globals.scss';

// components
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: '위니브 부트캠프',
  description:
    '100% 온라인 과정으로 진행되는 단기 부트캠프에서는 위니브의 실무 경험을 바탕으로 만들어진 현실 도달 가능한 커리큘럼과 프로젝트, 멘토링을 제공합니다.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body className="layout-flex">
        <Header />
        <div className="layout-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
