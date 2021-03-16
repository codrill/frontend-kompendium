import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={ styles.layout }>

      <header className={ styles.layoutHeader }>
        <h1>Frontend - kompendium wiedzy</h1>
      </header>
      <main className={ styles.layoutMain }>{ children }</main>
      <footer className={ styles.layoutFooter }>
        <p>Created by {' '}
          <a
            href="https://codrill.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codrill
          </a>
        </p>
      </footer>
    </div>
  )
}