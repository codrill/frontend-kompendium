import TocItem, { TocItemProps } from '../tocItem/tocItem'

type Props = {
  toc: TocItemProps[]
}

export default function TableOfContent({ toc }: Props)  {
  return (
    <div className="tableOfContent">
      <h2>Spis treści</h2>

      <ol className="tableOfContent__list">
        { toc.map( (item) => <TocItem key={ item.anchor } { ...item } />) }
      </ol>
    </div>
  )
}