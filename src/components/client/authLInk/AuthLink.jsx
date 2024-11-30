import styles from './authlink.module.css';
import Link from 'next/link';

const AuthLink = () => {
  return (
    <>
      <Link href='#' className={styles.loginbutton}>Login</Link>
    </>
  )
}

export default AuthLink;