import Link from 'next/link'
import styles from './page.module.css'

export default () => {
    return(
        <div>
           <Link href="/mentors"><h1 className={styles.def}>TS works</h1></Link>
        </div>
    )
}