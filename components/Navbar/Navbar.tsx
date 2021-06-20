import styles from "./Navbar.module.scss"
import Link from "next/link"
import TwitterIcon from '@material-ui/icons/Twitter'

function Navbar() {
  return (
    <div className='xl:container xl:mx-auto flex justify-between'>
      <h1 className={styles.header}>
        <Link href='/'>D // R</Link>
      </h1>
      <div className=''>
        <ul className='flex'>
          <li className={styles.nav__link}><Link href='/about'>About</Link></li>
          <li className={styles.nav__link}><Link href='/'>Portfolio</Link></li>
          <li className={styles.nav__link}><Link href='/'>Blog</Link></li>
          <li className={styles.nav__link}><Link href='/'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
