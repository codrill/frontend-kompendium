import { TocItem, TocItemProps } from '../tocItem/tocItem'

import styles from './tableOfContent.module.scss'

type Props = {
  toc: TocItemProps[]
}

export function TableOfContent({ toc }: Props): JSX.Element {
  return (
    <div className={styles.tableOfContent}>
      <h2>Spis treści</h2>

      <ol className={styles.tableOfContent__list}>
        {toc.map((item) => (
          <TocItem key={item.anchor} {...item} />
        ))}
      </ol>
    </div>
  )
}
