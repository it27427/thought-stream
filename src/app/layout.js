import './css/style.css';
import Header from '@/components/client/header/Header';
import Main from '@/components/client/main/Main';
import Footer from '@/components/client/footer/Footer';
import { generatePageMetadata } from '@/utils/metadata';
import ThemeContextProvider from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

export const metadata = () => generatePageMetadata('Home');

const RootLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <ThemeContextProvider>
        <ThemeProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </ThemeContextProvider>
    </html>
  );
};

export default RootLayout;
