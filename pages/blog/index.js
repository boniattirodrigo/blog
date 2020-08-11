import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout>
        <div>
          <h2>blog</h2>

          { posts.map(post => (
            <div>
              <Link href="/blog/[slug]" key={post.slug} as={`/blog/${post.slug}`}>
                <h2><a>{ post.frontmatter.title }</a></h2>
              </Link>
              <p>{ post.frontmatter.short_description }</p>
            </div>
          )) }
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