import Layout from 'components/Layout'
import About from 'components/About'
import ContactForm from 'components/ContactForm'

export default function Index() {
  return (
    <Layout showBanner={true} pageTitle="Rodrigo Boniatti | Software Engineer">
      <About />
      <ContactForm />
    </Layout>
  )
}
