import styles from './authlink.module.css';
import Link from 'next/link';

const AuthLink = () => {
  const status = 'notauthenticated';

  return (
    <>
      {
        status === 'notauthenticated' ? (
          <Link href='/login' className={styles.loginbutton}>
            <span>Login</span>
          </Link>
        ) : (
          <>
            <Link href='/write' className={styles.loginbutton}>
              <span>Write</span>
            </Link>

            <button className={styles.logoutbutton}>
              <span>LogOut</span>
            </button>
          </>
        )
      }
    </>
  )
}

export default AuthLink;