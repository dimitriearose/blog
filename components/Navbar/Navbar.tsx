import styles from "./Navbar.module.scss"
import Link from "next/link"



function Navbar() {
  return (
    <div className='xl:container xl:mx-auto flex justify-between'>
      <h1 className={styles.header}>
        <Link href='/'>D//R</Link>
      </h1>
      <div className=''>
        <ul className={styles.navbar}>
          <li className={styles.nav__link}><Link href='/about'>About</Link></li>
          <li className={styles.nav__link}><Link href='/'>Portfolio</Link></li>
          <li className={styles.nav__link}><Link href='/'>Blog</Link></li>
          <li className={styles.nav__link}><Link href='/'>Contact</Link></li>
        </ul>
        <div className={styles.nav_mobile}>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
