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
    <ThemeContextProvider>
      <ThemeProvider>
        <body>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </body>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default RootLayout;
