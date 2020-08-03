import Head from 'next/head'
import Header from './Header'
import Banner from './Banner'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta key="charset" charset="utf-8" />
        <meta key="description" name="description" content="Rodrigo Boniatti | Software Engineer | Ruby on Rails | Python | Go | JavaScript " />
        <meta key="author" name="author" content="Rodrigo Boniatti" />
        <link key="icon" rel="shortcut icon" type="type/png" href="/favicon.png" />
        <link key="fonts" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Open+Sans:400,600" />
        <title>Rodrigo Boniatti</title>
      </Head>
      <section className="layout">
        <Header />
        <Banner />
        <div className="content">{children}</div>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="social-media clearfix">
          <a className="ir social-media__github" href="https://github.com/boniattirodrigo" target="_blank">Github</a>
          <a className="ir social-media__linkedin" href="https://br.linkedin.com/in/rodrigoboniatti" target="_blank">Linkedin</a>              <a className="ir social-media__twitter" href="https://twitter.com/boniattirodrigo" target="_blank">Twitter</a>
        </div>
        <address><a href="mailto:boniatti.rodrigo@gmail.com">boniatti.rodrigo@gmail.com</a></address>
      </footer>
    </>
  )
}
