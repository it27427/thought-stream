import styles from './themetoggle.module.css';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
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