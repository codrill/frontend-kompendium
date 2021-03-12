export default function Layout({ children }) {
  return (
    <div>

      <header>
        <h1>Frontend - kompendium</h1>
      </header>
      <main>{ children }</main>
      <footer>
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