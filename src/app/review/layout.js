import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function campLayout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-grow max-width">{children}</div>
      <Footer />
    </>
  );
}
