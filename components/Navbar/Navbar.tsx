import styles from "./Navbar.module.scss"
import Link from "next/link"

function Navbar() {
  return (
    <div className='xl:container xl:mx-auto flex justify-between'>
      <h1 className={styles.header}>
        <Link href='/'>D // R</Link>
      </h1>
      <div className='flex'>
        <div className='nav__link'>About</div>
        <div className='nav__link'>Portfolio</div>
        <div className='nav__link'>Blog</div>
        <div className='nav__link'>Contact</div>
      </div>
    </div>
  )
}

export default Navbar
