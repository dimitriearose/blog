import styles from "./Navbar.module.scss"
import Link from "next/link"

function Navbar() {
  return (
    <div className='xl:container xl:mx-auto'>
      <h1 className={styles.header}>
        <Link href='/'>D // R</Link>
      </h1>
    </div>
  )
}

export default Navbar
