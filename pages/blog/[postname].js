import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/Layout'
import Article from 'components/Article'
import Section from 'components/Section'
import styles from './Blog.module.scss'
import CodeBlock from 'components/CodeBlock';

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <Layout showBanner={false} mountainLayout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Section className={styles.SectionOverride}>
        <h1>{ frontmatter.title }</h1>
        <Article>
          <ReactMarkdown escapeHtml={false} source={markdownBody} renderers={{ code: CodeBlock }} />
        </Article>
      </Section>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../blog/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../blog', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
