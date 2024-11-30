import styles from './navbar.module.css'
import SocialList from "../socialList/SocialList";
import ThemeToggle from '../themetoggle/ThemeToggle';
import MainMenu from '../mainmenu/MainMenu';
import AuthLink from '../authLInk/AuthLink';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className='flex items-center justify-between w-full'>
          <SocialList />
          
          <div className='flex items-center gap-3'>
            <ThemeToggle />
            <MainMenu />
            <AuthLink />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;