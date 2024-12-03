'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeProvider = ({ children }) => {
  const {theme} = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(mounted) {
    return (
      <html lang='en' className={theme} suppressHydrationWarning>
        { children }
      </html>
    )
  }
}

export default ThemeProvider;