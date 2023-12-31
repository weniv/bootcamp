import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: '소개 | 위니브 부트캠프',
};

export default function campLayout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-grow">{children}</div>
      <Footer />
    </>
  );
}
