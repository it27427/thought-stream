import Link from 'next/link';
import styles from './mainmenu.module.css'

const MainMenu = () => {
  return (
    <ul className={styles.mainmenu}>
      <li>
        <Link href='/' className={styles.menulink}>
          Home
        </Link>
      </li>
      <li>
        <Link href='/about' className={styles.menulink}>
          About
        </Link>
      </li>
      <li>
        <Link href='/blogs' className={styles.menulink}>
          Blogs
        </Link>
      </li>
      <li>
        <Link href='/contact' className={styles.menulink}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default MainMenu;