import Image from 'next/image';
import BrandLogo from '/public/logo.webp';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <>
      <Image src={BrandLogo} alt='Brand Logo' width={100} height={48} className={styles.logo} />
    </>
  )
}

export default Logo;