import '@/styles/globals.scss';

// components
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: '위니브 부트캠프',
  description: '위니브 부트캠프',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body className="layout-flex">
        <div>
          <Header />
          <div className="layout-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
