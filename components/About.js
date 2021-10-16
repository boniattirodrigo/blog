import styles from './About.module.scss'
import Section from './Section'

export default function About() {
  return (
    <>
      <Section>
        <h2>About</h2>

        <div className={styles.Container}>
          <div className={styles.Cartoon}>
            <img src="/img/i-sit.png"  width="208" height="284" />
          </div>
          <div className={styles.Description}>
            <p>Hey, my name is Rodrigo Boniatti. I live in Brazil and I work as a software engineer at <a href="https://www.codeminer42.com/" target="_blank">Codeminer 42</a>.</p>
            <p>I've been working with Ruby and Javascript and other technologies that surround them for some good years.</p>
            <p>Reach me out if you have any question.</p>
            <p><a href="https://speakerdeck.com/boniatti" target="_blank">Talks</a> • <a href="https://twitter.com/boniattirodrigo" target="_blank">Twitter</a> • <a href="mailto:boniatti.rodrigo@gmail.com" target="_blank">Email</a></p>
          </div>
        </div>
      </Section>
    </>
  )
}
