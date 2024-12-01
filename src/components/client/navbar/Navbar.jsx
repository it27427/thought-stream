import styles from './navbar.module.css'
import SocialList from "../socialList/SocialList";
import ThemeToggle from '../themetoggle/ThemeToggle';
import MainMenu from '../mainmenu/MainMenu';
import AuthLink from '../authLInk/AuthLink';
import Logo from '../logo/Logo';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className='flex items-center justify-between w-full'>
          <div className={styles.brand}>
            <Logo />
          </div>

          <div className={styles.navmenu}>
            <MainMenu />
          </div>
          
          <div className={styles.authtoggle}>
            <ThemeToggle />
            <AuthLink />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;