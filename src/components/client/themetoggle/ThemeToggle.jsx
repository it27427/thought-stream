'use client';

import { useContext } from 'react';
import styles from './themetoggle.module.css';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <>
      <div className={styles.themebutton}>
        <input type="checkbox" id="themetoggle" className={styles.togglecheck} hidden />
        <label htmlFor="themetoggle" className={styles.togglelabel}>
          <FaSun className={styles.sun} />
          <FaMoon className={styles.moon} />
          <span class={styles.ball}></span>
        </label>
      </div>
    </>
  )
}

export default ThemeToggle;