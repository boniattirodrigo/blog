import styles from './Article.module.scss'

export default function Article({ children }) {
  return (
    <article className={styles.Article}>
      { children }
    </article>
  )
}
