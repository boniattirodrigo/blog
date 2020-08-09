import styles from './Talks.module.scss'
import Section from './Section'

export default function Talks() {
  return (
    <>
      <Section>
        <h2>Talks</h2>

        <div className={styles.myContainer}>
          <div>
            <script async className="speakerdeck-embed" data-id="31899d352aa144099dfe0c585f55f4e4" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js" />
          </div>
          <div>
            <script async className="speakerdeck-embed" data-id="93d845aee65143bca7216ee6147ac385" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js" />
          </div>
          <div>
            <script async className="speakerdeck-embed" data-id="5f3b0c86fb024001922d589087e8c66a" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js" />
          </div>
        </div>
      </Section>
    </>
  )
}
