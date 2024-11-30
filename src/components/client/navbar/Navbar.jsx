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
          <Logo />

          <MainMenu />
          
          <div className='flex items-center gap-1'>
            <AuthLink />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;