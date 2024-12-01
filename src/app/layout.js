import './css/style.css';
import Header from '@/components/client/header/Header';
import Main from '@/components/client/main/Main';
import Footer from '@/components/client/footer/Footer';
import { generatePageMetadata } from '@/utils/metadata';
import ThemeContextProvider from '@/context/ThemeContext';

export const metadata = () => generatePageMetadata('Home');

const RootLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeContextProvider>
          {/* HEADER */}
          <Header />

          {/* MAIN-CONTENT */}
          <Main>{children}</Main>

          {/* FOOTER */}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
