import Image from 'next/image';
import BrandLogo from '/public/logo.webp';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <figure className={styles.brandlogo}>
      <Image src={BrandLogo} alt='Brand Logo' width={96} height={60} priority className={styles.logo} />
    </figure>
  )
}

export default Logo;