import Section from './Section'
import styles from './ContactForm.module.scss'

export default function ContactForm() {
  return (
    <>
      <div className={styles.Contact}>
        <Section className={styles.SectionOverride}>
          <h2>Contact</h2>

          <div className={styles.Form}>
            <div>
              <div className="i-stand-up">
                {/* <img className="i-body" src="/img/I.png" width="187" height="491" />
                <div className="i-mouth"></div>
                <img className="i-arm" src="/img/arm.png" width="266" height="99" />
                <img className="i-arm-bent" src="/img/arm-bent.png" width="113" height="256" /> */}
              </div>
            </div>

            <div>
              <form name="contact" method="POST" data-netlify="true">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="Name" required />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="Email" required />
                <label htmlFor="message">Message</label>
                <textarea name="message" cols="30" rows="10" required />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
