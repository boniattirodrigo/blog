import Link from 'next/link'
import styles from './Navigation.module.scss'

export default function Navigation() {
  return (
    <>
      <nav className={styles.Container} role="navigation">
        <div className={styles.Navigation}>
          <Link href="/"><a className={styles.NavigationHome} id="nav-home">Home</a></Link>
          {/* <Link href="#talks"><a id="nav-talks">Talks</a></Link>
          <Link href="/blog/"><a>Blog</a></Link> */}
        </div>
      </nav>
    </>
  )
}
