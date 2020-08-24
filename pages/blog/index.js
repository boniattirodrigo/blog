import matter from 'gray-matter'
import Link from 'next/link'
import styles from './Blog.module.scss'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Article from 'components/Article'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout showBanner={false} pageTitle="Rodrigo Boniatti | Blog">
        <div className={styles.Container}>
          <Section className={styles.SectionOverride}>
            <h2>blog</h2>

            { posts.map(post => (
              <Article key={post.slug}>
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <h2><a>{ post.frontmatter.title }</a></h2>
                </Link>
                <p>{ post.frontmatter.short_description }</p>
              </Article>
            )) }

          </Section>
          <img src="/img/background-footer.png" className={styles.Montain} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const configData = await import('../../siteconfig.json')

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../../blog', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

export default Index
