import Head from 'next/head'
import Banner from './Banner'
import Navigation from './Navigation'
import styles from './Layout.module.scss'

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta key="charset" charSet="utf-8" />
        <meta key="description" name="description" content="Rodrigo Boniatti | Software Engineer | Ruby on Rails | Python | Go | JavaScript" />
        <meta key="author" name="author" content="Rodrigo Boniatti" />
        <link key="icon" rel="shortcut icon" type="type/png" href="/favicon.png" />
        <link key="fonts" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Open+Sans:400,600" />
        <title>Rodrigo Boniatti | Software Engineer</title>
      </Head>

      <section>
        <Banner />
        <Navigation />
        <main className={styles.Container}>
          { children }
        </main>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="social-media clearfix">
          <a className="ir social-media__github" href="https://github.com/boniattirodrigo" target="_blank">Github</a>
          <a className="ir social-media__linkedin" href="https://br.linkedin.com/in/rodrigoboniatti" target="_blank">Linkedin</a>
          <a className="ir social-media__twitter" href="https://twitter.com/boniattirodrigo" target="_blank">Twitter</a>
        </div>
        <address><a href="mailto:boniatti.rodrigo@gmail.com">boniatti.rodrigo@gmail.com</a></address>
      </footer>
    </>
  )
}
