import Navbar from '../navbar/Navbar';
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} sticky`}>
      <Navbar />
    </header>
  )
}

export default Header;