import Layout from '../components/Layout'
import About from '../components/About'
import Talks from '../components/Talks'
import ContactForm from '../components/ContactForm'

export default function Index() {
  return (
    <Layout>
      <About />
      <ContactForm />
    </Layout>
  )
}
