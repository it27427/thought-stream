'use client';

import { useContext } from 'react';
import styles from './themetoggle.module.css';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.themebutton}>
        <input type="checkbox" id="themetoggle" onChange={toggle} className={styles.togglecheck} hidden />
        <label htmlFor="themetoggle" className={`${styles.togglelabel} togglethemebtn`}>
          <FaSun className={styles.sun} />
          <FaMoon className={styles.moon} />
          <span className={`${styles.ball} toggleball`}></span>
        </label>
      </div>
    </>
  )
}

export default ThemeToggle;