import Link from 'next/link'
import styles from './Navigation.module.scss'

export default function Navigation() {
  return (
    <>
      <nav className={styles.navigation} role="navigation">
        <div className="container">
          <a className={styles.logo} href="/">Rodrigo Boniatti</a>
          <a className={styles.menuToggle} href="#">Menu</a>
          <div className={styles.navigationOptions}>
            {/* <Link href="/"><a>Home</a></Link>
            <Link href="/blog/"><a>Blog</a></Link> */}
            <Link href="#about"><a id="nav-about">About</a></Link>
            <Link href="#talks"><a id="nav-talks">Talks</a></Link>
            <Link href="/blog/"><a>Blog</a></Link>
            <Link href="#contact"><a id="nav-contact">Contact</a></Link>
          </div>
        </div>
      </nav>
    </>
  )
}
