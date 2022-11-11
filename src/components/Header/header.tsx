import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src='/img/ignite-simbol.svg'
        className={styles.img}
      />

      <h1 className={styles.text}>
        Ignite Feed
      </h1>
    </header>
  )
}
