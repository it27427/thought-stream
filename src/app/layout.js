import './css/style.css';

const RootLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
