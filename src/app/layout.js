import './css/style.css';
import Header from '@/components/client/header/Header';
import Main from '@/components/client/main/Main';
import Footer from '@/components/client/footer/Footer';
import { generatePageMetadata } from '@/utils/metadata';

export const metadata = () => generatePageMetadata('Home');

const RootLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        {/* HEADER */}
        <Header />

        {/* MAIN-CONTENT */}
        <Main>{children}</Main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
