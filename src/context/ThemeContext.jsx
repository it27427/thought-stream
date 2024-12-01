'use client';

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if(typeof window !== undefined) {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
}

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getFromLocalStorage());

  console.log(theme)

  return (
    <ThemeContext.Provider value={{theme}}>{ children }</ThemeContext.Provider>
  )
}

export default ThemeContextProvider;