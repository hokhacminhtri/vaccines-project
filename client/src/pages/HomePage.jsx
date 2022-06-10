import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeIntroduction from '../components/HomeIntroduction';
import usePageTitle from '../hooks/usePageTitle';

export default function HomePage() {
  usePageTitle('Trang chủ');

  return (
    <>
      <Header />
      <HomeIntroduction />
      <Footer />
    </>
  );
}
