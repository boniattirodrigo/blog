import matter from 'gray-matter'
import Link from 'next/link'
import styles from './Blog.module.scss'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Article from 'components/Article'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout showBanner={false} mountainLayout pageTitle="Rodrigo Boniatti | Blog">
        <Section className={styles.SectionOverride}>
          <h2>blog</h2>

          { posts.map(post => (
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={post.slug}>
              <a className={styles.PostLink}>
                <Article key={post.slug}>
                  <h2>{ post.frontmatter.title }</h2>
                  <p>{ post.frontmatter.short_description }</p>
                  <time className={styles.PostDateTime}>{ post.frontmatter.date_long }</time>
                </Article>
              </a>
            </Link>
          )) }
        </Section>
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

    const sortData = data.sort(function(postA, postB) {
      if (postA.frontmatter.date_short > postB.frontmatter.date_short) {
        return -1;
      }

      if (postA.frontmatter.date_short < postB.frontmatter.date_short) {
        return 1;
      }

      return 0;
    });

    return sortData;
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
