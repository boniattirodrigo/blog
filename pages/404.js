import Layout from 'components/Layout'
import Section from 'components/Section'

export default function NotFound() {
  return (
    <>
      <Layout showBanner={false} mountainLayout pageTitle="Rodrigo Boniatti | Blog">
        <Section>
          <h1>Page not found</h1>
          <p>The page that you are looking for does not exist or was removed.</p>
        </Section>
      </Layout>
    </>
  )
}
