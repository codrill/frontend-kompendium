import React, { PropsWithChildren } from 'react'

import styles from './layout.module.scss'

// Using JSX.Element as return type based on discouraged React.FC type
// Link: https://github.com/facebook/create-react-app/pull/8177#issuecomment-576802686
export function Layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>
        <h1>Frontend - kompendium wiedzy</h1>
      </header>
      <main className={styles.layoutMain}>{children}</main>
      <footer className={styles.layoutFooter}>
        <p>
          Created by{' '}
          <a href="https://codrill.pl" target="_blank" rel="noopener noreferrer">
            Codrill
          </a>
        </p>
      </footer>
    </div>
  )
}
