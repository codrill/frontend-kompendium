import { InView } from 'react-intersection-observer'
import React from 'react'

import { TocItem, TocItemProps } from '../tocItem/tocItem'
import { TocVisibilityContext } from '../../state/tocVisibility.context'

import styles from './tableOfContent.module.scss'

type Props = {
  toc: TocItemProps[]
}

export function TableOfContent({ toc }: Props): JSX.Element {
  const { setVisibility } = React.useContext(TocVisibilityContext)

  const changeHandler = (inView) => setVisibility(inView)

  return (
    <InView as="div" className={styles.tableOfContent} onChange={changeHandler}>
      <h2>Spis treści</h2>

      <ol className={styles.tableOfContent__list}>
        {toc.map((item) => (
          <TocItem key={item.anchor} {...item} />
        ))}
      </ol>
    </InView>
  )
}
