import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Head>
          <title>Dimitri Rose</title>
          <meta name='description' content='Generated by create next app' />
          {/*/<link rel='icon' href='/favicon.ico' />*/}
        </Head>

        <Navbar />
        {/*<div className='body'></div>*/}
      </div>
    </div>
  )
}
