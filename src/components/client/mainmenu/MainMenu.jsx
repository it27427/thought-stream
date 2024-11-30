import Link from 'next/link';
import styles from './mainmenu.module.css'

const MainMenu = () => {
  return (
    <ul className={styles.mainmenu}>
      <li>
        <Link href='/' className={styles.menulink}>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href='/about' className={styles.menulink}>
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link href='/blogs' className={styles.menulink}>
          <span>Blogs</span>
        </Link>
      </li>
      <li>
        <Link href='/contact' className={styles.menulink}>
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu;