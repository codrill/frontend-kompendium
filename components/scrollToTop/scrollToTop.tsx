import React from 'react'
import { useRouter } from 'next/router'

import { TocVisibilityContext } from '../../state/tocVisibility.context'

import styles from './scrollToTop.module.scss'

export function ScrollToTop(): JSX.Element {
  const router = useRouter()
  const { isVisible } = React.useContext(TocVisibilityContext)

  const scrollTop = () => {
    router.push('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button className={`${styles.scrollToTop} ${!isVisible ? styles.visible : ''}`} onClick={scrollTop}>
      <span className="sr-only">Wróć na początek strony</span>
    </button>
  )
}
