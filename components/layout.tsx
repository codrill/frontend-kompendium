export default function Layout({ children }) {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">

      <header className="text-center">
        <h1>Frontend - kompendium wiedzy</h1>
      </header>
      <main className="flex-1">{ children }</main>
      <footer className="text-center">
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