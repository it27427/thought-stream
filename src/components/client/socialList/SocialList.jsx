
import styles from './social.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const SocialList = () => {
  return (
    <ul className={styles.listsocial}>
      <li className={styles.socialitem}>
        <FaFacebookF />
      </li>

      <li className={styles.socialitem}>
        <FaInstagram />
      </li>

      <li className={styles.socialitem}>
        <FaTiktok />
      </li>

      <li className={styles.socialitem}>
        <FaYoutube />
      </li>
    </ul>
  )
}

export default SocialList;