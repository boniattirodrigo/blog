import styles from './Section.module.scss'

export default function Section({ children, className = '' }) {
  return (
    <>
      <div className={`${className} ${styles.section}`}>
        { children }
      </div>
    </>
  )
}
