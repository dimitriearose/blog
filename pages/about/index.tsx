import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/about.module.scss'

export default function About() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Navbar />
            </div>
        </div>
    )
}
