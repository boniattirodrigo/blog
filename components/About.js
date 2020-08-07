import styles from './About.module.scss'

export default function About() {
  return (
    <>
      <section className={`section ${styles.sectionAbout}`} id="about">
        <div className="container">
          <h2>About</h2>
          <div className="col col-1-3 first">
            <img src="/img/i-sit.png"  width="208" height="284" />
          </div>
          <div className="col col-2-3">
            <p>Hey, my name is Rodrigo Boniatti. I live in Brazil and I work as a software engineer at <a href="https://www.codeminer42.com/" target="_blank">Codeminer 42</a>.</p>
            <p>I've been working with Ruby and Javascript and other technologies that surround them for some good years. Also, I like to speak in some events and write some posts on my <a href="/blog/">blog</a>.</p>
            <p>Reach me out if you have any question.</p>
          </div>
        </div>
      </section>
    </>
  )
}
